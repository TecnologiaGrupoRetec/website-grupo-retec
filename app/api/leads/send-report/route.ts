import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { QualificationLead } from "@/lib/qualificationConfig";
import ExcelJS from "exceljs";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

function getLocalLeads(): QualificationLead[] {
  try {
    if (!fs.existsSync(leadsFilePath)) return [];
    const data = fs.readFileSync(leadsFilePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      startDate,
      endDate,
      recipientEmail = process.env.REPORT_EMAIL_TO || "",
    } = body;

    if (!recipientEmail) {
      return NextResponse.json(
        { success: false, message: "Nenhum e-mail destinatário configurado ou informado." },
        { status: 400 }
      );
    }

    let leads: QualificationLead[] = [];

    // Tenta Supabase
    try {
      let query = supabase.from("leads_qualificacao").select("*").order("created_at", { ascending: false });
      if (startDate) query = query.gte("created_at", new Date(startDate).toISOString());
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        query = query.lte("created_at", end.toISOString());
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        leads = data.map((item: any) => ({
          id: item.id,
          nome: item.nome,
          tipoPessoa: item.tipo_pessoa || "PF",
          empresa: item.empresa || "-",
          email: item.email,
          telefone: item.telefone,
          areaAtuacao: item.area_atuacao,
          tipoObra: item.tipo_obra,
          tipoObraOutroDetalhe: item.tipo_obra_outro || undefined,
          vendedorDestino: item.vendedor_destino,
          whatsappDestino: item.whatsapp_destino,
          createdAt: item.created_at,
        }));
      }
    } catch (e) {
      console.warn("Supabase fetch fail in email report:", e);
    }

    if (leads.length === 0) {
      const local = getLocalLeads();
      leads = local.filter((lead) => {
        if (!lead.createdAt) return true;
        const itemDate = new Date(lead.createdAt);
        if (startDate && itemDate < new Date(startDate)) return false;
        if (endDate) {
          const end = new Date(endDate);
          end.setHours(23, 59, 59, 999);
          if (itemDate > end) return false;
        }
        return true;
      });
    }

    // Gera Workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Leads RETEC");

    worksheet.columns = [
      { header: "Data/Hora", key: "dataHora", width: 20 },
      { header: "Nome", key: "nome", width: 28 },
      { header: "Tipo", key: "tipoPessoa", width: 10 },
      { header: "Empresa / Razão Social", key: "empresa", width: 28 },
      { header: "E-mail", key: "email", width: 30 },
      { header: "Telefone / WhatsApp", key: "telefone", width: 22 },
      { header: "Área de Atuação", key: "areaAtuacao", width: 20 },
      { header: "Tipo de Obra", key: "tipoObra", width: 20 },
      { header: "Detalhe (Outro)", key: "tipoObraOutroDetalhe", width: 24 },
      { header: "Vendedor Destino", key: "vendedorDestino", width: 22 },
    ];

    const headerRow = worksheet.getRow(1);
    headerRow.height = 26;
    headerRow.eachCell((cell) => {
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0A2540" } };
      cell.font = { name: "Calibri", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    leads.forEach((lead, i) => {
      const row = worksheet.addRow({
        dataHora: lead.createdAt ? new Date(lead.createdAt).toLocaleString("pt-BR") : "-",
        nome: lead.nome,
        tipoPessoa: lead.tipoPessoa === "PJ" ? "Pessoa Jurídica" : "Pessoa Física",
        empresa: lead.empresa || "-",
        email: lead.email,
        telefone: lead.telefone,
        areaAtuacao: lead.areaAtuacao,
        tipoObra: lead.tipoObra,
        tipoObraOutroDetalhe: lead.tipoObraOutroDetalhe || "-",
        vendedorDestino: lead.vendedorDestino || "-",
      });
      row.height = 20;
      const isEven = i % 2 === 0;
      row.eachCell((cell) => {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: isEven ? "FFF8FAFC" : "FFFFFFFF" } };
      });
    });

    const buffer = (await workbook.xlsx.writeBuffer()) as any;

    // Configuração de nome do arquivo
    let fileName = "relatorio-leads-retec.xlsx";
    if (startDate && endDate) {
      const sDay = new Date(startDate).getDate().toString().padStart(2, "0");
      const eDay = new Date(endDate).getDate().toString().padStart(2, "0");
      fileName = `semana${sDay}-${eDay}-leads-retec.xlsx`;
    }

    // Configuração do transporter SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({
        success: false,
        message: "Configurações SMTP (SMTP_HOST, SMTP_USER, SMTP_PASS) não foram informadas nas variáveis de ambiente. O arquivo pode ser baixado diretamente pelo painel administrativo!",
        totalLeads: leads.length,
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const periodText = startDate && endDate
      ? `período de ${new Date(startDate).toLocaleDateString("pt-BR")} até ${new Date(endDate).toLocaleDateString("pt-BR")}`
      : "base geral atualizada";

    await transporter.sendMail({
      from: `"Grupo RETEC - Qualificação de Clientes" <${smtpUser}>`,
      to: recipientEmail,
      subject: `📊 Relatório Semanal de Leads - Grupo RETEC (${fileName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background-color: #0A2540; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">Relatório de Pré-Qualificação de Clientes</h2>
            <p style="color: #94a3b8; font-size: 14px; margin: 6px 0 0;">Grupo RETEC HVAC</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p>Olá,</p>
            <p>Segue em anexo a planilha consolidada de contatos e leads qualificados pelo site referente ao <strong>${periodText}</strong>.</p>
            <div style="background: #f1f5f9; padding: 16px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; font-size: 15px;">📈 <strong>Total de Leads Registrados no Período:</strong> ${leads.length}</p>
            </div>
            <p style="font-size: 13px; color: #64748b;">O arquivo Excel anexo contém todos os dados: Nome, Tipo, Empresa, E-mail, Telefone/WhatsApp, Área de Atuação, Tipo de Obra e Vendedor atribuído.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">Este é um relatório automático gerado pelo sistema Grupo RETEC.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: fileName,
          content: Buffer.from(buffer),
          contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: `E-mail com o arquivo ${fileName} enviado com sucesso para ${recipientEmail}! Total de ${leads.length} leads.`,
      totalLeads: leads.length,
    });
  } catch (error: any) {
    console.error("Erro no envio de e-mail de relatório:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Erro ao disparar e-mail de relatório." },
      { status: 500 }
    );
  }
}