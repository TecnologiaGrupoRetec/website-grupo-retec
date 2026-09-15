import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; 
import { QualificationLead, SALES_WHATSAPP_MAP } from "@/lib/qualificationConfig";

export async function POST(req: Request) {
  try {
    const body: QualificationLead = await req.json();

    if (!body.nome || !body.email || !body.telefone || !body.areaAtuacao || !body.tipoObra) {
      return NextResponse.json(
        { success: false, message: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    const vendedorInfo = SALES_WHATSAPP_MAP[body.tipoObra] || { nome: "Triagem / Geral", numero: "" };

    const newLead = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      nome: body.nome.trim(),
      tipo_pessoa: body.tipoPessoa || "PF",
      empresa: body.tipoPessoa === "PJ" ? (body.empresa || "").trim() : "-",
      email: body.email.trim(),
      telefone: body.telefone.trim(),
      area_atuacao: body.areaAtuacao,
      tipo_obra: body.tipoObra,
      tipo_obra_outro: body.tipoObra === "Outro" ? (body.tipoObraOutroDetalhe || "").trim() : null,
      vendedor_destino: vendedorInfo.nome,
      whatsapp_destino: vendedorInfo.numero,
      created_at: new Date().toISOString(),
    };

    const { error: dbError } = await supabase.from("leads_qualificacao").insert([newLead]);

    if (dbError) {
      console.error("Erro ao salvar no Supabase:", dbError.message);
      return NextResponse.json(
        { success: false, message: "Erro ao salvar no banco de dados." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead qualificado com sucesso!",
      lead: newLead,
    });
  } catch (error) {
    console.error("Erro na rota /api/leads:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno ao processar lead." },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    let query = supabase.from("leads_qualificacao").select("*").order("created_at", { ascending: false });

    if (startDate) {
      query = query.gte("created_at", new Date(startDate).toISOString());
    }
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      query = query.lte("created_at", end.toISOString());
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({
      success: true,
      total: data?.length || 0,
      leads: data,
    });
  } catch (error) {
    console.error("Erro ao listar leads:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao listar leads." },
      { status: 500 }
    );
  }
}