"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { produtosPorCategoria } from "./dadosProdutos";
import styles from "./detalhe.module.scss";

// Informações detalhadas para cada linha de fornecimento
const solutionsData: Record<string, {
  title: string;
  description: string;
  tags: string[];
  details: string;
  features: string[];
  imageUrl: string;
  ctaTitle?: string;
  ctaText?: string;
  ctaWhatsAppText?: string;
}> = {
  "expansao-direta": {
    title: "Expansão Direta",
    description: "Máquinas, evaporadoras, condensadoras, fancoletes e sistemas VRV/VRF para projetos comerciais e técnicos.",
    tags: ["Evaporadoras", "Condensadoras", "Fancoletes", "VRV/VRF", "Daikin"],
    details: "Oferecemos uma linha completa de soluções para climatização e controle de temperatura. Nossos equipamentos atendem desde escritórios comerciais até indústrias e hospitais, garantindo eficiência energética, controle de umidade e alta vazão. Trabalhamos em parceria com marcas líderes de mercado como Daikin, Trox, Midea e outras referências em sistemas VRV/VRF e Fancoils.",
    features: [
      "Sistemas VRV/VRF inteligentes e de alta eficiência",
      "Evaporadoras de embutir, cassetes e hi-walls modernos",
      "Condensadoras compactas com tecnologia Inverter",
      "Fancoletes e cassetes hidrônicos de alto desempenho"
    ],
    imageUrl: "/about/empty-office.webp",
    ctaTitle: "Climatize seu espaço com máxima eficiência e economia",
    ctaText: "Evite erros de dimensionamento e gastos excessivos com energia. Fale com nossos engenheiros para definir os equipamentos ideais (VRV/Fancoils) para o seu projeto.",
    ctaWhatsAppText: "Olá! Preciso de ajuda para dimensionar equipamentos de climatização (VRV/Fancoils) para o meu projeto."
  },
  "agua-gelada-e-rejeicao-de-calor": {
    title: "Água Gelada e Rejeição de Calor",
    description: "Chillers, mini chillers, torres de resfriamento e sistemas hidrônicos para aplicações críticas.",
    tags: ["Refrigeração", "Chillers", "Mini Chilers", "Trox"],
    details: "Sistemas de refrigeração industrial e comercial projetados para operar continuamente em condições críticas de temperatura. Nossas soluções de expansão indireta (Chillers e Fancoils) garantem alta performance térmica e economia operacional para shoppings, indústrias farmacêuticas e hospitais.",
    features: [
      "Chillers de condensação a ar ou água",
      "Torres de resfriamento de alta capacidade e durabilidade",
      "Sistemas hidrônicos completos com controle inteligente",
      "Suporte e dimensionamento de engenharia especializado"
    ],
    imageUrl: "/about/office-inside.webp",
    ctaTitle: "Evite paradas críticas no seu sistema de água gelada",
    ctaText: "Garanta estabilidade térmica absoluta para sua indústria, hospital ou shopping. Solicite uma cotação de Chillers Daikin e receba suporte de engenharia especializado.",
    ctaWhatsAppText: "Olá! Gostaria de falar com um especialista em Refrigeração de Alta Performance e Chillers."
  },
  "exaustao-e-ventilacao": {
    title: "Exaustão e Ventilação",
    description: "Exaustores, ventiladores e gabinetes para renovação, insuflamento e extração de ar.",
    tags: ["Exaustão", "Ventilação", "Exaustores", "Ventiladores", "Gabinetes", "Trox"],
    details: "Sistemas de ventilação mecânica projetados para garantir a qualidade do ar interno (QAI) e o conforto térmico. Atendemos normas técnicas rigorosas de renovação e filtragem de ar, essenciais para cozinhas industriais, galpões e edifícios comerciais.",
    features: [
      "Exaustores axiais e centrífugos robustos",
      "Ventiladores de alto desempenho para dutos",
      "Gabinetes de ventilação com atenuação acústica",
      "Sistemas integrados de insuflamento e extração"
    ],
    imageUrl: "/about/about2.jpg",
    ctaTitle: "Adequado às normas e livre de ar viciado?",
    ctaText: "Evite multas e garanta a qualidade do ar interno. Nossos técnicos ajudam você a dimensionar exaustores e gabinetes de renovação dentro das normas NBR/Anvisa.",
    ctaWhatsAppText: "Olá! Preciso de auxílio técnico para dimensionar um sistema de exaustão e renovação de ar dentro das normas."
  },
  "difusao-e-controle-de-ar": {
    title: "Difusão e Controle de Ar",
    description: "Grelhas, difusores, venezianas e dampers para distribuição e balanceamento do fluxo de ar.",
    tags: ["Difusão", "Controle de Ar", "Grelhas", "Difusores", "Venezianas", "Dampers", "Trox"],
    details: "Componentes essenciais para a distribuição uniforme e controle do fluxo de ar nos ambientes. Nossos difusores, grelhas e dampers permitem o balanceamento preciso da vazão de ar, eliminando correntes de vento desconfortáveis e garantindo a eficiência térmica.",
    features: [
      "Grelhas de insuflamento e retorno ajustáveis",
      "Difusores lineares e rotacionais estéticos",
      "Dampers de regulagem e controle de vazão",
      "Venezianas de captação externa resistentes a intempéries"
    ],
    imageUrl: "/home/new-facade.webp",
    ctaTitle: "Elimine correntes de ar frio e ruídos incômodos",
    ctaText: "Obtenha um fluxo de ar uniforme, silencioso e balanceado. Encontre as grelhas, difusores e dampers reguladores ideais para sua obra comercial ou residencial.",
    ctaWhatsAppText: "Olá! Gostaria de solicitar cotação e especificações para grelhas, difusores ou dampers."
  },
  "dutos-e-rede-de-ar": {
    title: "Dutos e Rede de Ar",
    description: "Dutos flexíveis, semi-rígidos, isolados e adaptadores para condução de ar em sistemas HVAC.",
    tags: ["Dutos", "Conexões", "Flexíveis", "Semi-rígidos", "Isolados", "Adaptadores", "Sicflux"],
    details: "Fornecimento de dutos e conexões técnicas para a condução do fluxo de ar com mínima perda de carga e máxima estanqueidade. Trabalhamos com soluções em chapa galvanizada, painéis pré-isolados e linhas completas de dutos flexíveis.",
    features: [
      "Dutos de chapa de alta resistência e estanqueidade",
      "Dutos pré-isolados leves de montagem rápida",
      "Dutos flexíveis aluminizados com ou sem isolamento",
      "Acessórios e adaptadores para conexões estanques"
    ],
    imageUrl: "/about/about1.jpeg",
    ctaTitle: "Máxima estanqueidade e fluxo de ar garantido",
    ctaText: "Evite desperdício de energia e quedas de pressão na sua rede. Fornecemos dutos flexíveis, semi-rígidos e conexões com encaixe perfeito para montagem rápida.",
    ctaWhatsAppText: "Olá! Gostaria de orçar dutos e conexões para a minha rede de distribuição de ar."
  },
  "isolamento-termico-e-acustico": {
    title: "Isolamento Térmico e Acústico",
    description: "Mantas, tubos, fitas e adesivos para eficiência térmica, acabamento e controle de condensação.",
    tags: ["Isolamento", "Vedação", "Térmica", "Armacell"],
    details: "Mantas e tubos isolantes de borracha elastomérica e lãs térmicas de alta qualidade. Essenciais para evitar a condensação em linhas de água gelada ou fluido refrigerante e para reduzir perdas de calor, garantindo a eficiência do sistema HVAC.",
    features: [
      "Tubos e mantas em borracha elastomérica flexível",
      "Isolamentos acústicos e térmicos em lã mineral",
      "Fitas adesivas de vedação e acabamento de alta aderência",
      "Adesivos especiais resistentes a temperaturas extremas"
    ],
    imageUrl: "/about/empty-office.webp",
    ctaTitle: "Acabe com o gotejamento e a perda térmica",
    ctaText: "Previna a condensação e garanta a máxima eficiência de energia na sua linha de frio. Conheça nossa linha completa de mantas e tubos isolantes Armaflex.",
    ctaWhatsAppText: "Olá! Preciso de soluções de isolamento térmico e vedação para evitar condensação/perda térmica."
  },
  "filtragem-e-qualidade-do-ar": {
    title: "Filtragem e Qualidade do Ar",
    description: "Caixas de filtragem, filtros e soluções para renovação e tratamento do ar interno.",
    tags: ["Filtragem", "Qualidade do Ar", "Renovação", "Sicflux"],
    details: "Filtros grossos, médios, finos e absolutos HEPA para tratamento do ar e controle de contaminantes em suspensão. Soluções essenciais para salas limpas, áreas hospitalares, salas de cirurgia e escritórios corporativos preocupados com a saúde ocupacional.",
    features: [
      "Filtros absolutos HEPA de alta eficiência",
      "Filtros grossos (G4) e finos (F8) padrão",
      "Caixas de filtragem completas para dutos",
      "Renovação de ar para atendimento às exigências da ANVISA"
    ],
    imageUrl: "/about/office-inside.webp",
    ctaTitle: "Proteja a saúde de quem respira no seu ambiente",
    ctaText: "Garanta ar purificado e livre de contaminantes de acordo com a ANVISA. Fornecemos filtros plissados, absolutos HEPA e caixas de filtragem estanques.",
    ctaWhatsAppText: "Olá! Gostaria de orçar filtros e caixas de filtragem para melhorar a qualidade do ar interno."
  },
  "suporte-fixacao-e-instalacao": {
    title: "Suportes, Fixação e Instalação",
    description: "Fitas, adesivos, vedantes e componentes auxiliares para montagem e manutenção HVAC.",
    tags: ["Instalação", "Vedação", "Fixação", "Armaflex", "Retec"],
    details: "Componentes e acessórios indispensáveis para a fixação mecânica, vedação de juntas e acabamento de instalações de ar condicionado e ventilação. Garantem a durabilidade e a segurança física do sistema montado.",
    features: [
      "Suportes e fixadores metálicos de alta resistência",
      "Vedantes de silicone e PU para vedações de dutos",
      "Fitas aluminizadas e emborrachadas de alta fixação",
      "Ferramental auxiliar e consumíveis de instalação"
    ],
    imageUrl: "/home/new-facade.webp",
    ctaTitle: "Segurança estrutural e precisão na sua instalação",
    ctaText: "Evite acidentes, ruídos de vibração e leituras de pressão imprecisas. Oferecemos suportes reforçados, fitas técnicas de fixação e manômetros de alta precisão.",
    ctaWhatsAppText: "Olá! Gostaria de cotar acessórios de fixação, manômetros ou consumíveis para instalação de HVAC."
  }
};

export default function SolucaoDetalhePage({ params }: { params: { slug: string } }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (params.slug === "exaustao-e-ventilacao") {
      return "Exaustor";
    }
    if (params.slug === "difusao-e-controle-de-ar") {
      return "Grelhas Trox";
    }
    if (params.slug === "isolamento-termico-e-acustico") {
      return "Isolamento Térmico e Acústico";
    }
    if (params.slug === "suporte-fixacao-e-instalacao") {
      return "Suportes e Fixação";
    }
    return "VRV";
  });

  const segmentTitles: Record<string, string> = {
    "industrias-farmaceuticas-e-processos": "Indústrias Farmacêuticas e Processos",
    "hospitais-e-clinicas": "Hospitais, Centros Clínicos e Clínicas",
    "data-centers-e-missao-critica": "Data Centers e Missão Crítica",
    "shopping-centers": "Shopping Centers",
    "hoteis-e-resort-complexes": "Hotéis e Resort Complexes",
    "predios-comerciais-e-offices": "Prédios Comerciais e Offices",
    "governamental-e-institucional": "Governamental e Institucional",
    "instaladoras-e-construtoras": "Instaladoras e Construtoras",
    "escolas-e-centros-de-ensino": "Escolas e Centros de Ensino",
    "academias-e-centros-fitness": "Academias e Centros Fitness",
    "residencial-de-alto-padrao": "Residencial de Alto Padrão",
    "restaurantes-e-alimentacao": "Restaurantes e Alimentação"
  };

  if (segmentTitles[params.slug]) {
    const title = segmentTitles[params.slug];
    return (
      <div className={styles.page}>
        <Navbar activeTab="solucoes" />
        <main style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f2854', color: '#fff', padding: '120px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#3AA0DB', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
              Segmento de Atuação
            </span>
            <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.25rem)', fontWeight: '700', color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              {title}
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
              Estamos preparando conteúdos detalhados, especificações técnicas e cases de sucesso do Grupo RETEC para este setor. Em breve, esta página estará repleta de informações completas!
            </p>
            <Link 
              href="/solucoes" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                backgroundColor: '#3AA0DB', 
                color: '#fff', 
                padding: '14px 32px', 
                borderRadius: '30px', 
                fontWeight: '600', 
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(58, 160, 219, 0.3)',
                transition: 'all 200ms ease'
              }}
            >
              Voltar para Soluções
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const data = solutionsData[params.slug];
  const catData = produtosPorCategoria[params.slug];

  if (!data) {
    notFound();
  }

  // Identifica a lista de produtos a ser exibida
  const produtosExibidos = catData
    ? catData.tabs
      ? catData.tabs.find((t) => t.nome === selectedCategory)?.produtos
      : catData.produtos
    : [];

  return (
    <div className={styles.page}>
      <Navbar activeTab="solucoes" />

      {/* Banner Principal */}
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src={data.imageUrl}
          alt={data.title}
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Link href="/solucoes" className={styles.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.backIcon}>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Voltar para Soluções</span>
            </Link>
            <p className={styles.eyebrow}>Linha de Fornecimento</p>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroText}>{data.description}</p>
          </div>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.detailsLayout}>
            {/* Coluna Principal */}
            <div className={styles.mainContent}>
              <h2 className={styles.sectionTitle}>Visão Geral</h2>
              <p className={styles.descriptionText}>{data.details}</p>

              <h3 className={styles.subTitle}>Principais Aplicações e Vantagens</h3>
              <ul className={styles.featuresList}>
                {data.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.checkIcon}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {produtosExibidos && produtosExibidos.length > 0 && (
                <>
                  <h3 className={styles.subTitle}>
                    {`Linha de ${data.title} que distribuímos:`}
                  </h3>

                  {/* Seletor de Categorias por Abas (caso existam abas definidas) */}
                  {catData?.tabs && (
                    <div className={styles.filterContainer}>
                      {catData.tabs.map((tab) => (
                        <button
                          key={tab.nome}
                          className={`${styles.filterButton} ${selectedCategory === tab.nome ? styles.active : ""
                            }`}
                          onClick={() => setSelectedCategory(tab.nome)}
                        >
                          {tab.nome}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Listagem dos Cards dos Produtos com Layout Alternado */}
                  <div className={styles.productFadeIn}>
                    {produtosExibidos.map((produto, index) => (
                      <div
                        key={produto.titulo}
                        className={`${styles.vrvFitSection} ${index % 2 === 1 ? styles.reversed : ""
                          }`}
                      >
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>{produto.descricao}</h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              {produto.excelentePara}
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={produto.imagem}
                            alt={produto.titulo}
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className={styles.tagsContainer}>
                <h4 className={styles.tagsTitle}>Tags Relacionadas:</h4>
                <div className={styles.tagsList}>
                  {data.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagBadge}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Lateral (Sidebar CTA) */}
            <div className={styles.sidebar}>
              <div className={styles.ctaCard}>
                <h3 className={styles.ctaTitle}>
                  {data.ctaTitle || "Solicite um Orçamento Técnico"}
                </h3>
                <p className={styles.ctaText}>
                  {data.ctaText || "Precisa de suporte no dimensionamento ou fornecimento de materiais para esta linha em sua obra? Fale diretamente com nossa equipe."}
                </p>
                <a
                  href={`https://wa.me/5561991311283?text=${encodeURIComponent(
                    data.ctaWhatsAppText || `Olá! Gostaria de solicitar um orçamento e saber mais informações sobre a linha de fornecimento: ${data.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <span>Falar com Especialista</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.buttonArrow}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
