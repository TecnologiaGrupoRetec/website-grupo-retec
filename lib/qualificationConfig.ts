export interface QualificationLead {
  nome: string;
  tipoPessoa: "PF" | "PJ";
  empresa?: string;
  email: string;
  telefone: string;
  areaAtuacao: string;
  tipoObra: string;
  tipoObraOutroDetalhe?: string;
}

export const SALES_WHATSAPP_MAP: Record<string, { nome: string; numero: string }> = {
  // Luan Araujo
  "Hospitais": { 
    nome: "Luan Araujo", 
    numero: "5561991311283" 
  },
  "Indústrias": { 
    nome: "Luan Araujo", 
    numero: "5561991311283" 
  },

  // Wellisson Chaves
  "Condomínios": { 
    nome: "Wellisson Chaves", 
    numero: "5561991694504" 
  },
  "Shoppings": { 
    nome: "Wellisson Chaves", 
    numero: "5561991694504" 
  },
  "Centros Corporativos": { 
    nome: "Wellisson Chaves", 
    numero: "5561991694504" 
  },
  "Instaladores": { 
    nome: "Wellisson Chaves", 
    numero: "5561991694504" 
  },

  // Roberto Carlos
  "Instaladores em geral": { 
    nome: "Roberto Carlos", 
    numero: "5561994158716" 
  },
  "Centros de Ensino": { 
    nome: "Roberto Carlos", 
    numero: "5561994158716" 
  },
  "Igrejas": { 
    nome: "Roberto Carlos", 
    numero: "5561994158716" 
  },

  // Gestor de Vendas (Fallback / Outros)
  "Outro": { 
    nome: "Pedro Henrique", 
    numero: "5561998904494" 
  }
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