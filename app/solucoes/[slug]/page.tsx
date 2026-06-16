"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./detalhe.module.scss";

// Informações detalhadas para cada linha de fornecimento
const solutionsData: Record<string, {
  title: string;
  description: string;
  tags: string[];
  details: string;
  features: string[];
  imageUrl: string;
}> = {
  "climatizacao-e-equipamentos": {
    title: "Climatização e Equipamentos",
    description: "Máquinas, evaporadoras, condensadoras, fancoletes e sistemas VRV/VRF para projetos comerciais e técnicos.",
    tags: ["Evaporadoras", "Condensadoras", "Fancoletes", "VRV/VRF", "Daikin"],
    details: "Oferecemos uma linha completa de soluções para climatização e controle de temperatura. Nossos equipamentos atendem desde escritórios comerciais até indústrias e hospitais, garantindo eficiência energética, controle de umidade e alta vazão. Trabalhamos em parceria com marcas líderes de mercado como Daikin, Carrier, Midea e outras referências em sistemas VRV/VRF e Fancoils.",
    features: [
      "Sistemas VRV/VRF inteligentes e de alta eficiência",
      "Evaporadoras de embutir, cassetes e hi-walls modernos",
      "Condensadoras compactas com tecnologia Inverter",
      "Fancoletes e cassetes hidrônicos de alto desempenho"
    ],
    imageUrl: "/about/empty-office.webp"
  },
  "refrigeracao-de-alta-performance": {
    title: "Refrigeração de Alta Performance",
    description: "Chillers, mini chillers, torres de resfriamento e sistemas hidrônicos para aplicações críticas.",
    tags: ["Refrigeração", "Chillers", "Mini Chilers", "Trox"],
    details: "Sistemas de refrigeração industrial e comercial projetados para operar continuamente em condições críticas de temperatura. Nossas soluções de expansão indireta (Chillers e Fancoils) garantem alta performance térmica e economia operacional para shoppings, indústrias farmacêuticas e hospitais.",
    features: [
      "Chillers de condensação a ar ou água",
      "Torres de resfriamento de alta capacidade e durabilidade",
      "Sistemas hidrônicos completos com controle inteligente",
      "Suporte e dimensionamento de engenharia especializado"
    ],
    imageUrl: "/about/office-inside.webp"
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
    imageUrl: "/about/about2.jpg"
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
    imageUrl: "/home/new-facade.webp"
  },
  "dutos-e-conexoes": {
    title: "Dutos e Conexões",
    description: "Dutos flexíveis, semi-rígidos, isolados e adaptadores para condução de ar em sistemas HVAC.",
    tags: ["Dutos", "Conexões", "Flexíveis", "Semi-rígidos", "Isolados", "Adaptadores", "Sicflux"],
    details: "Fornecimento de dutos e conexões técnicas para a condução do fluxo de ar com mínima perda de carga e máxima estanqueidade. Trabalhamos com soluções em chapa galvanizada, painéis pré-isolados e linhas completas de dutos flexíveis.",
    features: [
      "Dutos de chapa de alta resistência e estanqueidade",
      "Dutos pré-isolados leves de montagem rápida",
      "Dutos flexíveis aluminizados com ou sem isolamento",
      "Acessórios e adaptadores para conexões estanques"
    ],
    imageUrl: "/about/about1.jpeg"
  },
  "isolamento-e-vedacao": {
    title: "Isolamento e Vedação",
    description: "Mantas, tubos, fitas e adesivos para eficiência térmica, acabamento e controle de condensação.",
    tags: ["Isolamento", "Vedação", "Térmica", "Armacell"],
    details: "Mantas e tubos isolantes de borracha elastomérica e lãs térmicas de alta qualidade. Essenciais para evitar a condensação em linhas de água gelada ou fluido refrigerante e para reduzir perdas de calor, garantindo a eficiência do sistema HVAC.",
    features: [
      "Tubos e mantas em borracha elastomérica flexível",
      "Isolamentos acústicos e térmicos em lã mineral",
      "Fitas adesivas de vedação e acabamento de alta aderência",
      "Adesivos especiais resistentes a temperaturas extremas"
    ],
    imageUrl: "/about/empty-office.webp"
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
    imageUrl: "/about/office-inside.webp"
  },
  "acessorios-e-fixacao": {
    title: "Acessórios e Fixação",
    description: "Fitas, adesivos, vedantes e componentes auxiliares para montagem e manutenção HVAC.",
    tags: ["Instalação", "Vedação", "Fixação", "Armaflex", "Retec"],
    details: "Componentes e acessórios indispensáveis para a fixação mecânica, vedação de juntas e acabamento de instalações de ar condicionado e ventilação. Garantem a durabilidade e a segurança física do sistema montado.",
    features: [
      "Suportes e fixadores metálicos de alta resistência",
      "Vedantes de silicone e PU para vedações de dutos",
      "Fitas aluminizadas e emborrachadas de alta fixação",
      "Ferramental auxiliar e consumíveis de instalação"
    ],
    imageUrl: "/home/new-facade.webp"
  }
};

export default function SolucaoDetalhePage({ params }: { params: { slug: string } }) {
  const data = solutionsData[params.slug];

  if (!data) {
    notFound();
  }

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
                <h3 className={styles.ctaTitle}>Solicite um Orçamento Técnico</h3>
                <p className={styles.ctaText}>
                  Precisa de suporte no dimensionamento ou fornecimento de materiais para esta linha em sua obra? Fale diretamente com nossa equipe.
                </p>
                <a
                  href={`https://wa.me/5561991311283?text=${encodeURIComponent(
                    `Olá! Gostaria de solicitar um orçamento e saber mais informações sobre a linha de fornecimento: ${data.title}.`
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
