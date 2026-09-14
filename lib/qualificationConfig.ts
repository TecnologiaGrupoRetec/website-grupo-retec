export interface QualificationLead {
  id?: string;
  nome: string;
  tipoPessoa: "PF" | "PJ";
  empresa?: string;
  email: string;
  telefone: string;
  areaAtuacao: "Projetista" | "Construtora" | "Arquiteto" | "Instalador" | "Cliente Final";
  tipoObra: "Residencial" | "Comercial" | "Hospitalar" | "Industrial" | "Outro";
  tipoObraOutroDetalhe?: string;
  vendedorDestino?: string;
  whatsappDestino?: string;
  createdAt?: string;
}

// Configuração dos contatos de WhatsApp por Tipo de Obra
// Insira o número no formato internacional sem espaços (ex: "5561999999999")
export const SALES_WHATSAPP_MAP: Record<QualificationLead["tipoObra"], { nome: string; numero: string }> = {
  Residencial: {
    nome: "Vendedor Residencial",
    numero: process.env.NEXT_PUBLIC_WHATSAPP_RESIDENCIAL || "", // Deixe em branco ou preencha com o número (Ex: 5561998904494)
  },
  Comercial: {
    nome: "Vendedor Comercial",
    numero: process.env.NEXT_PUBLIC_WHATSAPP_COMERCIAL || "",
  },
  Hospitalar: {
    nome: "Vendedor Hospitalar",
    numero: process.env.NEXT_PUBLIC_WHATSAPP_HOSPITALAR || "",
  },
  Industrial: {
    nome: "Vendedor Industrial",
    numero: process.env.NEXT_PUBLIC_WHATSAPP_INDUSTRIAL || "",
  },
  Outro: {
    nome: "Triagem / Geral",
    numero: process.env.NEXT_PUBLIC_WHATSAPP_OUTRO || "",
  },
};

// Fallback padrão de WhatsApp caso o vendedor específico ainda não tenha número cadastrado
export const DEFAULT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT || "5561998904494";

/**
 * Gera o link do WhatsApp para o vendedor correto com a mensagem personalizada
 * Enviando apenas: Nome, E-mail, Área de Atuação e Tipo de Obra
 */
export function buildWhatsAppLink(lead: {
  nome: string;
  email: string;
  areaAtuacao: string;
  tipoObra: string;
  tipoObraOutroDetalhe?: string;
}) {
  const vendedor = SALES_WHATSAPP_MAP[lead.tipoObra as QualificationLead["tipoObra"]];
  const targetNumber = (vendedor && vendedor.numero.trim() !== "") ? vendedor.numero.trim() : DEFAULT_WHATSAPP_NUMBER;

  const obraTexto = lead.tipoObra === "Outro" && lead.tipoObraOutroDetalhe
    ? `Outro (${lead.tipoObraOutroDetalhe})`
    : lead.tipoObra;

  const message = [
    "Olá! Gostaria de atendimento para meu projeto.",
    "",
    "📋 *Dados do Contato:*",
    `👤 *Nome:* ${lead.nome}`,
    `📧 *E-mail:* ${lead.email}`,
    `🎯 *Área de Atuação:* ${lead.areaAtuacao}`,
    `🏗️ *Tipo de Obra:* ${obraTexto}`,
  ].join("\n");

  const cleanNumber = targetNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}