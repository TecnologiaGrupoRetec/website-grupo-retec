"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles/qualification-modal.module.scss";
import { QualificationLead, buildWhatsAppLink } from "../../lib/qualificationConfig";

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QualificationModal({ isOpen, onClose }: QualificationModalProps) {
  const [nome, setNome] = useState("");
  const [tipoPessoa, setTipoPessoa] = useState<"PF" | "PJ">("PF");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState<QualificationLead["areaAtuacao"]>("Cliente Final");
  
  // Atualizado para iniciar com a primeira opção válida do novo mapeamento
  const [tipoObra, setTipoObra] = useState<QualificationLead["tipoObra"]>("Hospitais");
  const [tipoObraOutro, setTipoObraOutro] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (tipoPessoa === "PJ" && !empresa.trim()) {
      setError("Por favor, informe o nome da sua empresa.");
      return;
    }

    setLoading(true);

    const leadPayload: QualificationLead = {
      nome,
      tipoPessoa,
      empresa: tipoPessoa === "PJ" ? empresa : undefined,
      email,
      telefone,
      areaAtuacao,
      tipoObra,
      tipoObraOutroDetalhe: tipoObra === "Outro" ? tipoObraOutro : undefined,
    };

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });
    } catch (err) {
      console.error("Erro ao salvar lead na API:", err);
    } finally {
      setLoading(false);

      const whatsappUrl = buildWhatsAppLink({
        nome,
        email,
        areaAtuacao,
        tipoObra,
        tipoObraOutroDetalhe: tipoObraOutro,
      });

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      onClose();
    }
  };

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h3 className={styles.modalTitle}>Conheça Nossas Soluções</h3>
            <p className={styles.modalSubtitle}>Preencha para falar direto com o especialista ideal</p>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
            ✕
          </button>
        </div>

        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            {error && <div className={styles.errorMsg}>{error}</div>}

            <div className={styles.formGroup}>
              <label htmlFor="lead-nome">Nome Completo *</label>
              <input
                id="lead-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Tipo de Contato *</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="tipoPessoa"
                    value="PF"
                    checked={tipoPessoa === "PF"}
                    onChange={() => setTipoPessoa("PF")}
                  />
                  Pessoa Física
                </label>
                <label>
                  <input
                    type="radio"
                    name="tipoPessoa"
                    value="PJ"
                    checked={tipoPessoa === "PJ"}
                    onChange={() => setTipoPessoa("PJ")}
                  />
                  Pessoa Jurídica (Empresa)
                </label>
              </div>
            </div>

            {tipoPessoa === "PJ" && (
              <div className={styles.formGroup}>
                <label htmlFor="lead-empresa">Nome da Empresa *</label>
                <input
                  id="lead-empresa"
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Razão social ou nome fantasia"
                  required
                />
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="lead-email">E-mail *</label>
              <input
                id="lead-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lead-telefone">Telefone / WhatsApp *</label>
              <input
                id="lead-telefone"
                type="tel"
                value={telefone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lead-area">Área de Atuação *</label>
              <select
                id="lead-area"
                value={areaAtuacao}
                onChange={(e) => setAreaAtuacao(e.target.value as QualificationLead["areaAtuacao"])}
                required
              >
                <option value="Projetista">Projetista</option>
                <option value="Construtora">Construtora</option>
                <option value="Arquiteto">Arquiteto</option>
                <option value="Instalador">Instalador</option>
                <option value="Cliente Final">Cliente Final</option>
              </select>
            </div>

            {/* NOVAS OPÇÕES DE OBRAS MAPEADAS PARA OS VENDEDORES */}
            <div className={styles.formGroup}>
              <label htmlFor="lead-obra">Tipo de Obra *</label>
              <select
                id="lead-obra"
                value={tipoObra}
                onChange={(e) => setTipoObra(e.target.value as QualificationLead["tipoObra"])}
                required
              >
                <option value="Hospitais">Hospitais</option>
                <option value="Indústrias">Indústrias</option>
                <option value="Condomínios">Condomínios</option>
                <option value="Shoppings">Shoppings</option>
                <option value="Centros Corporativos">Centros Corporativos</option>
                <option value="Instaladores">Instaladores</option>
                <option value="Instaladores em geral">Instaladores em geral</option>
                <option value="Centros de Ensino">Centros de Ensino</option>
                <option value="Igrejas">Igrejas</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {tipoObra === "Outro" && (
              <div className={styles.formGroup}>
                <label htmlFor="lead-obra-outro">Descreva o Tipo de Obra</label>
                <input
                  id="lead-obra-outro"
                  type="text"
                  value={tipoObraOutro}
                  onChange={(e) => setTipoObraOutro(e.target.value)}
                  placeholder="Ex: Galpão logístico, residência, etc."
                />
              </div>
            )}
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.cancelButton} onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? "Conectando..." : "Avançar para o WhatsApp"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}