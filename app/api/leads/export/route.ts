import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import ExcelJS from "exceljs";

// Função para formatar o nome do arquivo exatamente como solicitado
function getWeeklyFileName(startDateStr?: string | null, endDateStr?: string | null) {
  const targetDate = startDateStr ? new Date(startDateStr) : new Date();
  
  // Nomes dos meses em português
  const meses = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const mesNome = meses[targetDate.getMonth()];
  const ano = targetDate.getFullYear().toString().slice(-2); // Ex: "26"

  let diaSegunda, diaSexta;

  // Se a gestora filtrou uma data específica, usamos os dias do filtro
  if (startDateStr && endDateStr) {
    diaSegunda = new Date(startDateStr).getDate().toString().padStart(2, "0");
    diaSexta = new Date(endDateStr).getDate().toString().padStart(2, "0");
  } else {
    // Se não filtrou, calcula a segunda e sexta da semana atual
    const dayOfWeek = targetDate.getDay(); 
    const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(targetDate);
    monday.setDate(targetDate.getDate() + distanceToMonday);
    
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);

    diaSegunda = monday.getDate().toString().padStart(2, "0");
    diaSexta = friday.getDate().toString().padStart(2, "0");
  }

  // Resultado: setembro_26_semana07-11.xlsx
  return `${mesNome}_${ano}_semana${diaSegunda}-${diaSexta}.xlsx`;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    // 1. Busca do Supabase
    let query = supabase.from("leads_qualificacao").select("*").order("created_at", { ascending: false });

    if (startDate) query = query.gte("created_at", new Date(startDate).toISOString());
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      query = query.lte("created_at", end.toISOString());
    }

    const { data: leads, error } = await query;
    if (error) throw error;
    if (!leads || leads.length === 0) {
      return NextResponse.json({ message: "Nenhum lead encontrado." }, { status: 404 });
    }

    // 2. Criação do Excel
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Grupo RETEC";
    const worksheet = workbook.addWorksheet("Leads Qualificados");

    worksheet.columns = [
      { header: "Data/Hora", key: "dataHora", width: 20 },
      { header: "Nome", key: "nome", width: 28 },
      { header: "Tipo", key: "tipoPessoa", width: 10 },
      { header: "Empresa", key: "empresa", width: 28 },
      { header: "E-mail", key: "email", width: 30 },
      { header: "Telefone", key: "telefone", width: 22 },
      { header: "Área de Atuação", key: "areaAtuacao", width: 20 },
      { header: "Tipo de Obra", key: "tipoObra", width: 20 },
      { header: "Detalhe", key: "tipoObraOutroDetalhe", width: 26 },
      { header: "Vendedor", key: "vendedorDestino", width: 22 },
    ];

    // Estilo do Cabeçalho
    worksheet.getRow(1).eachCell((cell) => {
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0A2540" } };
      cell.font = { color: { argb: "FFFFFFFF" }, bold: true };
    });

    leads.forEach((lead) => {
      worksheet.addRow({
        dataHora: new Date(lead.created_at).toLocaleString("pt-BR"),
        nome: lead.nome,
        tipoPessoa: lead.tipo_pessoa === "PJ" ? "Pessoa Jurídica" : "Pessoa Física",
        empresa: lead.empresa || "-",
        email: lead.email,
        telefone: lead.telefone,
        areaAtuacao: lead.area_atuacao,
        tipoObra: lead.tipo_obra,
        tipoObraOutroDetalhe: lead.tipo_obra_outro || "-",
        vendedorDestino: lead.vendedor_destino || "-",
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const finalFileName = getWeeklyFileName(startDate, endDate);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${finalFileName}"`,
      },
    });
  } catch (error) {
    console.error("Erro ao gerar Excel:", error);
    return NextResponse.json({ success: false, message: "Erro ao gerar arquivo Excel." }, { status: 500 });
  }
}