"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import styles from "./solucoes.module.scss";
import SegmentoCardsCarousel from "../components/segmentoCardsCarousel";

const suppliedCompanies = [
  { src: "/home/empresas_fornecidas/logo_ache.webp", alt: "Aché", link: "https://www.ache.com.br/" },
  { src: "/home/empresas_fornecidas/logo_anchieta.webp", alt: "Anchieta", link: "https://www.hospitalanchieta.com.br/" },
  { src: "/home/empresas_fornecidas/logo_brasal.webp", alt: "Brasal", link: "https://www.brasal.com.br/" },
  { src: "/home/empresas_fornecidas/logo_cifarma.webp", alt: "Cifarma", link: "https://www.cifarma.com.br/" },
  { src: "/home/empresas_fornecidas/logo_cimed.webp", alt: "Cimed", link: "https://www.cimed.com.br/" },
  { src: "/home/empresas_fornecidas/ecap-logo.webp", alt: "ECAP", link: "https://www.ecap.com.br/" },
  { src: "/home/empresas_fornecidas/logo_ebm.webp", alt: "EBM", link: "https://www.ebm.com.br/" },
  { src: "/home/empresas_fornecidas/logo_ems.webp", alt: "EMS", link: "https://www.ems.com.br/" },
  { src: "/home/empresas_fornecidas/logo_fio-cruz.webp", alt: "Fiocruz", link: "https://www.fio.cru.org.br/" },
  { src: "/home/empresas_fornecidas/logo_grupo-acelerador.webp", alt: "Grupo Acelerador", link: "https://www.grupoacelerador.com.br/" },
  { src: "/home/empresas_fornecidas/logo_hospital-albert-einsten.webp", alt: "Hospital Albert Einstein", link: "https://www.einstein.br/" },
  { src: "/home/empresas_fornecidas/logo_paulooctavio.webp", alt: "Paulo Octávio", link: "https://www.pauloctavio.com.br/" },
  { src: "/home/empresas_fornecidas/logo_sabin.webp", alt: "Sabin", link: "https://www.sabin.com.br/" },
  { src: "/home/empresas_fornecidas/logo_terral.webp", alt: "Terral", link: "https://www.terral.com.br/" },
  { src: "/home/empresas_fornecidas/logo_villela-carvalho.webp", alt: "Villela Carvalho", link: "https://www.villela.com.br/" },
];

const categories = [
  {
    title: "Expansão Direta",
    slug: "expansao-direta",
    description: "Máquinas, evaporadoras, condensadoras, fancoletes e sistemas VRV/VRF para projetos comerciais e técnicos.",
    tag: ["Evaporadoras", "Condensadoras", "Fancoletes", "VRV/VRF", "Daikin"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}><path d="M16 12v4" /><path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 14h20" /><path d="M8 12v4" /></svg>
    )
  },
  {
    title: "Água Gelada e Rejeição de Calor",
    slug: "agua-gelada-e-rejeicao-de-calor",
    description: "Chillers, mini chillers, torres de resfriamento e sistemas hidrônicos para aplicações críticas.",
    tag: ["Refrigeração", "Chillers", "Mini Chilers", "Trox"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}><path d="M10 2v8" /><path d="M12.8 21.6A2 2 0 1 0 14 18H2" /><path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" /><path d="m6 6 4 4 4-4" /></svg>
    )
  },
  {
    title: "Exaustão e Ventilação",
    slug: "exaustao-e-ventilacao",
    description: "Exaustores, ventiladores e gabinetes para renovação e extração de ar.",
    tag: ["Exaustão", "Ventilação", "Exaustores", "Ventiladores", "Gabinetes", "Trox"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" /><path d="M12 12v.01" /></svg>
    )
  },
  {
    title: "Difusão e Controle de Ar",
    slug: "difusao-e-controle-de-ar",
    description: "Grelhas, difusores, venezianas e dampers para distribuição e balanceamento do fluxo de ar.",
    tag: ["Difusão", "Controle de Ar", "Grelhas", "Difusores", "Venezianas", "Dampers", "Trox"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" /><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 8h12" /><path d="M6.6 15.572A2 2 0 1 0 10 17v-5" /></svg>
    )
  },
  {
    title: "Dutos e Rede de Ar",
    slug: "dutos-e-rede-de-ar",
    description: "Dutos flexíveis, semi-rígidos, isolados e adaptadores para condução de ar em sistemas HVAC.",
    tag: ["Dutos", "Conexões", "Flexíveis", "Semi-rígidos", "Isolados", "Adaptadores", "Sicflux"],
    icon: (
      <img src="../../icons/duto.svg" alt="Dutos" width={30} height={30} />
    )
  },
  {
    title: "Isolamento Térmico e Acústico",
    slug: "isolamento-termico-e-acustico",
    description: "Mantas, tubos, fitas e adesivos para eficiência térmica e controle de condensação.",
    tag: ["Isolamento", "Vedação", "Térmica", "Armacell"],
    icon: (
      <img src="../../icons/fita.svg" alt="Fita" width={30} height={30} />
    )
  },
  {
    title: "Filtragem e Qualidade do Ar",
    slug: "filtragem-e-qualidade-do-ar",
    description: "Caixas de filtragem, filtros e soluções para renovação e tratamento do ar interno.",
    tag: ["Filtragem", "Qualidade do Ar", "Renovação", "Sicflux"],
    icon: (
      <img src="../../icons/filtro.svg" alt="Filtro" width={30} height={30} />
    )
  },
  {
    title: "Suportes, Fixação e Instalação",
    slug: "suporte-fixacao-e-instalacao",
    description: "Fitas, adesivos, vedantes e componentes auxiliares para montagem e manutenção HVAC.",
    tag: ["Instalação", "Vedação", "Fixação", "Armaflex", "Retec"],
    icon: (
      <img src="../../icons/acessorios.svg" alt="Acessórios" width={30} height={30} />
    )
  }
];

export default function SolucoesPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        marquee.scrollLeft += 0.8; // scroll speed
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    setIsDragging(true);
    startXRef.current = e.pageX - marquee.offsetLeft;
    scrollLeftRef.current = marquee.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const x = e.pageX - marquee.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // multiplier for drag speed
    marquee.scrollLeft = scrollLeftRef.current - walk;

    // Wrap around for drag scroll as well
    if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
      marquee.scrollLeft = 0;
    } else if (marquee.scrollLeft <= 0) {
      marquee.scrollLeft = marquee.scrollWidth / 2;
    }
  };

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
                  Produtos HVAC para obras que exigem desempenho e prazo confiável.
                </h1>
                <p className={styles.heroText}>
                  A RETEC fornece equipamentos e acessórios de climatização e difusão de ar para sistemas HVAC comerciais, industriais, hospitalares e corporativos.
                </p>
              </div>

              <div className={styles.heroActions}>
                <a href="#categorias" className={styles.primaryButton}>
                  Ver categorias
                </a>
                <a
                  href="#clientes"
                  className={styles.secondaryButton}
                >
                  Ver nichos atendidos
                </a>
              </div>

              {/* Cards de estatísticas inferiores */}
              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>+40</span>
                  <p className={styles.statLabel}>Anos de mercado</p>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>12</span>
                  <p className={styles.statLabel}>Setores atendidos</p>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>B2B</span>
                  <p className={styles.statLabel}>Suporte para obras HVAC</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carrosel de Empresas que Fornecemos Soluções de Climatização */}
        <section className={styles.section} id="clientes">
          <div className={styles.container}>
            <div className={styles.brandSliderSection} style={{ marginTop: 0 }}>
              <div className={styles.brandSliderIntro}>
                <p className={styles.eyebrow}>Grandes empresas</p>
                <h3 className={styles.brandSliderTitle}>
                  Empresas que confiam em nossas soluções de climatização
                </h3>
              </div>

              <div
                ref={marqueeRef}
                className={styles.brandMarquee}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
                style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
              >
                <div className={styles.brandTrack}>
                  {[0, 1].map((groupIndex) => (
                    <div
                      key={groupIndex}
                      className={styles.brandRow}
                      aria-hidden={groupIndex === 1}
                    >
                      {suppliedCompanies.map((company) => (
                        <div className={styles.brandCard} key={`${groupIndex}-${company.alt}`}>
                          <Image
                            className={styles.brandLogo}
                            src={company.src}
                            alt={company.alt}
                            width={220}
                            height={88}
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de soluções por nicho do mercado */}
        <SegmentoCardsCarousel />

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
