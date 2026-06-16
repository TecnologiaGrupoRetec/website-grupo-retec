"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import styles from "./solucoes.module.scss";

const categories = [
  {
    title: "Climatização e Equipamentos",
    slug: "climatizacao-e-equipamentos",
    description: "Máquinas, evaporadoras, condensadoras, fancoletes e sistemas VRV/VRF para projetos comerciais e técnicos.",
    tag: ["Evaporadoras", "Condensadoras", "Fancoletes", "VRV/VRF", "Daikin"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: "Refrigeração de Alta Performance",
    slug: "refrigeracao-de-alta-performance",
    description: "Chillers, mini chillers, torres de resfriamento e sistemas hidrônicos para aplicações críticas.",
    tag: ["Refrigeração", "Chillers", "Mini Chilers", "Trox"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <path d="M12 2v20M17 5H7M19 12H5M17 19H7" />
      </svg>
    )
  },
  {
    title: "Exaustão e Ventilação",
    slug: "exaustao-e-ventilacao",
    description: "Exaustores, ventiladores e gabinetes para renovação, insuflamento e extração de ar.",
    tag: ["Exaustão", "Ventilação", "Exaustores", "Ventiladores", "Gabinetes", "Trox"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    title: "Difusão e Controle de Ar",
    slug: "difusao-e-controle-de-ar",
    description: "Grelhas, difusores, venezianas e dampers para distribuição e balanceamento do fluxo de ar.",
    tag: ["Difusão", "Controle de Ar", "Grelhas", "Difusores", "Venezianas", "Dampers", "Trox"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )
  },
  {
    title: "Dutos e Conexões",
    slug: "dutos-e-conexoes",
    description: "Dutos flexíveis, semi-rígidos, isolados e adaptadores para condução de ar em sistemas HVAC.",
    tag: ["Dutos", "Conexões", "Flexíveis", "Semi-rígidos", "Isolados", "Adaptadores", "Sicflux"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Isolamento e Vedação",
    slug: "isolamento-e-vedacao",
    description: "Mantas, tubos, fitas e adesivos para eficiência térmica, acabamento e controle de condensação.",
    tag: ["Isolamento", "Vedação", "Térmica", "Armacell"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <path d="M4 4h16v16H4zM9 9h6v6H9z" />
      </svg>
    )
  },
  {
    title: "Filtragem e Qualidade do Ar",
    slug: "filtragem-e-qualidade-do-ar",
    description: "Caixas de filtragem, filtros e soluções para renovação e tratamento do ar interno.",
    tag: ["Filtragem", "Qualidade do Ar", "Renovação", "Sicflux"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: "Acessórios e Fixação",
    slug: "acessorios-e-fixacao",
    description: "Fitas, adesivos, vedantes e componentes auxiliares para montagem e manutenção HVAC.",
    tag: ["Instalação", "Vedação", "Fixação", "Armaflex", "Retec"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    )
  }
];

export default function SolucoesPage() {
  return (
    <div className={styles.page}>
      <Navbar activeTab="solucoes" />

      <main>
        {/* Banner Principal (Hero Section) */}
        <section className={styles.hero}>
          {/* Grafismo circular de fundo (Overlay) */}
          <div className={styles.circlesGraphic}>
            <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="600" cy="400" r="300" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
              <circle cx="600" cy="400" r="450" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <circle cx="600" cy="400" r="600" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </svg>
          </div>

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Produtos HVAC</p>
                <h1 className={styles.heroTitle}>
                  Produtos HVAC para obras que exigem desempenho, prazo e suporte técnico
                </h1>
                <p className={styles.heroText}>
                  Da climatização à difusão de ar, a RETEC fornece equipamentos, componentes e acessórios para sistemas HVAC comerciais, industriais, hospitalares e corporativos.
                </p>
              </div>

              <div className={styles.heroActions}>
                <a href="#categorias" className={styles.primaryButton}>
                  Ver categorias
                </a>
                <a
                  href="https://wa.me/5561991311283"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryButton}
                >
                  Solicitar orçamento técnico
                </a>
              </div>

              {/* Cards de estatísticas inferiores */}
              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>+40</span>
                  <p className={styles.statLabel}>anos de mercado</p>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>8</span>
                  <p className={styles.statLabel}>categorias de fornecimento</p>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>B2B</span>
                  <p className={styles.statLabel}>suporte para obras HVAC</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção das Categorias de Produtos */}
        <section className={styles.categoriesSection} id="categorias">
          <div className={styles.container}>
            <div className={`${styles.sectionIntro} ${styles.sectionIntroCentered}`}>
              <h2 className={styles.sectionTitleDark}>Linha Completa de Fornecimento</h2>
              <p className={styles.sectionTextDark}>
                Trabalhamos em parceria com os fabricantes mais consolidados do mercado para garantir a alta performance térmica da sua obra.
              </p>
            </div>

            <div className={styles.categoriesGrid}>
              {categories.map((cat, index) => (
                <div key={index} className={styles.categoryCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIconWrapper}>
                      {cat.icon}
                    </div>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                    <p className={styles.categoryDescription}>{cat.description}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.tagsList}>
                      {cat.tag?.map((t, idx) => (
                        <span key={idx} className={styles.tagBadge}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/solucoes/${cat.slug}`}
                      className={styles.cardQuoteButton}
                      title={`Leia mais sobre ${cat.title}`}
                    >
                      <span>Leia mais</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.buttonArrow}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
