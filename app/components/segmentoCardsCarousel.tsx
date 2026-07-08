"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/apple-cards-carousel.module.scss";

type Segment = {
  title: string;
  category: string;
  img: string;
  description: string;
  paragraphs: string[];
  slug: string;
};

const segments: Segment[] = [
  {
    title: "Indústrias Farmacêuticas e Processos",
    category: "Indústria & Processos",
    img: "/projects/brainfarma.jpg",
    description: "Controle estrito de contaminação, temperatura e umidade para processos industriais exigentes.",
    paragraphs: [
      "Nas indústrias farmacêuticas, de cosméticos e químicas, o controle térmico e de qualidade do ar não é apenas uma questão de conforto, mas um requisito regulatório crítico (Anvisa, GMP) para garantir a integridade dos produtos e a segurança dos processos.",
      "O Grupo RETEC fornece filtros HEPA absolutos, difusores de fluxo laminar, dampers de controle estanque de vazão, além de dutos e isolamentos térmicos específicos para salas limpas, áreas limpas e laboratórios de alta classificação.",
      "Nossas soluções de climatização garantem a manutenção constante da pressão diferencial, controle de umidade relativa e filtragem do ar nos níveis mais exigentes do mercado industrial."
    ],
    slug: "industrias-farmaceuticas-processos-industriais"
  },
  {
    title: "Hospitais, Centros Clínicos e Clínicas",
    category: "Saúde & Hospitais",
    img: "/projects/df-star.jpg",
    description: "Sistemas de filtragem absoluta e controle de pressão para ambientes cirúrgicos e de internação.",
    paragraphs: [
      "Ambientes de saúde demandam soluções de climatização que previnam a infecção hospitalar e promovam o bem-estar de pacientes e profissionais. Áreas críticas como UTIs, salas de cirurgia e isolamento necessitam de controle absoluto.",
      "Trabalhamos com marcas de referência mundial para fornecer centrais de tratamento de ar (AHUs), fancoletes hospitalares, grelhas de exaustão e filtros absolutos em conformidade estrita com a norma ABNT NBR 7256.",
      "Garantimos a estanqueidade dos dutos, isolamento térmico eficiente e sistemas de renovação de ar projetados para diluir e remover contaminantes aéreos de forma segura e ininterrupta."
    ],
    slug: "hospitais-clinicas"
  },
  {
    title: "Data Centers e Missão Crítica",
    category: "Tecnologia & Infraestrutura",
    img: "/projects/multibrasil.jpg",
    description: "Climatização de precisão com alta confiabilidade e redundância para proteção de dados.",
    paragraphs: [
      "Data centers operam 24/7 e dependem do controle térmico absoluto para evitar superaquecimento de servidores e paralisação dos serviços. Nesses ambientes, a eficiência energética e a redundância são fundamentais.",
      "O Grupo RETEC fornece soluções de climatização de precisão, chillers robustos e sistemas de distribuição de ar otimizados que garantem a dissipação do calor de forma homogênea e com baixo consumo elétrico.",
      "Trabalhamos com equipamentos de alta tecnologia e controle automatizado de umidade e temperatura para garantir a segurança operacional de bancos de dados e salas elétricas críticas."
    ],
    slug: "data-centers-missao-critica"
  },
  {
    title: "Shopping Centers",
    category: "Varejo & Grandes Áreas",
    img: "/projects/orion-complex.jpg",
    description: "Sistemas robustos de expansão indireta com foco em conforto térmico e eficiência de fluxo.",
    paragraphs: [
      "Shopping centers reúnem alta densidade de público e cargas térmicas muito variáveis ao longo do dia. A climatização deve garantir conforto térmico em grandes áreas comuns e flexibilidade para as lojas satélites.",
      "Fornecemos chillers centrífugos e de parafuso, torres de resfriamento, fancoils de alta capacidade e grelhas decorativas que se integram perfeitamente à arquitetura do empreendimento.",
      "Nosso foco é otimizar o custo operacional (OPEX) do condomínio por meio de sistemas eficientes e dimensionamento inteligente para a distribuição de água gelada (chilled water) e fluxo de ar."
    ],
    slug: "shopping-centers"
  },
  {
    title: "Hotéis e Resort Complexes",
    category: "Turismo & Lazer",
    img: "/projects/castros-hotel.jpg",
    description: "Controle individual de conforto, silêncio e renovação de ar para excelência em hospitalidade.",
    paragraphs: [
      "Na hotelaria, o conforto acústico (silêncio) e o controle individual de temperatura em cada quarto são os fatores mais importantes para a satisfação dos hóspedes.",
      "Fornecemos sistemas do tipo VRV/VRF silenciosos, fancoletes individuais com baixo nível de ruído, isolamento termoacústico Armacell e sistemas de renovação de ar dedicados para manter a qualidade do ar em ambientes internos.",
      "Ajudamos hotéis a reduzirem seus custos de energia através de sistemas inteligentes de recuperação de calor e automação integrada, garantindo climatização apenas quando os quartos estiverem ocupados."
    ],
    slug: "hoteis"
  },
  {
    title: "Prédios Comerciais e Offices",
    category: "Corporativo",
    img: "/projects/po-700.jpg",
    description: "Sistemas modulares com alta flexibilidade de zoneamento e baixo custo operacional.",
    paragraphs: [
      "Edifícios comerciais de escritórios exigem sistemas de HVAC flexíveis que permitam o zoneamento térmico por laje ou sala corporativa, garantindo o conforto de equipes diversas.",
      "Oferecemos soluções em VRF Daikin de última geração, dutos pré-isolados de fácil instalação e grelhas de difusão que evitam correntes de ar incômodas (drafts) sobre os postos de trabalho.",
      "Nossos sistemas auxiliam na obtenção de certificações ambientais (como LEED e AQUA) através da redução do consumo energético dos prédios comerciais e monitoramento de ar de renovação."
    ],
    slug: "predios-comerciais"
  },
  {
    title: "Governamental e Institucional",
    category: "Público & Institucional",
    img: "/projects/senado.jpg",
    description: "Conformidade com normas de qualidade do ar e alta durabilidade de equipamentos.",
    paragraphs: [
      "Órgãos governamentais e instituições públicas demandam sistemas robustos, de alta durabilidade e em total conformidade com o PMOC (Plano de Manutenção, Operação e Controle) para a saúde dos servidores e visitantes.",
      "Fornecemos fancoils, chillers e componentes homologados com facilidade de manutenção preventiva, excelente acabamento e alta resistência operacional.",
      "Nossas soluções de ventilação mecânica e renovação de ar garantem a conformidade regulatória exigida pelos órgãos de fiscalização sanitária, além da longa vida útil do portfólio."
    ],
    slug: "governamental-institucional"
  },
  {
    title: "Instaladoras e Construtoras",
    category: "B2B & Engenharia",
    img: "/about/about1.jpeg",
    description: "Suporte logístico, agilidade comercial e leitura consultiva de projetos de engenharia.",
    paragraphs: [
      "Para instaladoras e construtoras de sistemas de HVAC-R, a RETEC atua como um parceiro de fornecimento strategic, garantindo preços competitivos, agilidade comercial e precisão técnica.",
      "Oferecemos suporte na compatibilização de projetos, seleção de equipamentos alternativos equivalentes de alta performance e fornecimento ágil de dutos, isolantes térmicos, dampers, grelhas e acessórios.",
      "Nosso compromisso é com o cronograma da obra física, fornecendo atendimento pós-venda direto e entrega assistida para assegurar o start-up tranquilo dos sistemas."
    ],
    slug: "instaladoras-construtoras"
  },
  {
    title: "Escolas e Centros de Ensino",
    category: "Educação",
    img: "/projects/academia-pf.jpg",
    description: "Renovação constante de ar e conforto acústico para melhor concentração e rendimento escolar.",
    paragraphs: [
      "Estudos comprovam que a qualidade do ar interior (IAQ) e o conforto térmico nas salas de aula afetam diretamente o rendimento acadêmico e a taxa de concentração dos estudantes.",
      "Fornecemos exaustores silenciosos de renovação de ar, ventiladores de gabinete, isolantes acústicos e difusores que garantem a correta circulação de ar sem poluição sonora.",
      "Nossas soluções de climatização e ventilação atendem às exigências de renovação de ar por aluno (NBR 16401) minimizando a proliferação de vírus e bactérias nas escolas."
    ],
    slug: "escolas-centros-ensino"
  },
  {
    title: "Academias e Centros Fitness",
    category: "Bem-estar & Esportes",
    img: "/projects/canpack.jpg",
    description: "Alta renovação de ar e controle de umidade para ambientes com alta taxa de transpiração.",
    paragraphs: [
      "Academias de ginástica e centros fitness possuem carga térmica elevada devido à atividade física intensa dos alunos. A umidade elevada e o odor corporal exigem alta taxa de renovação e exaustão de ar.",
      "O Grupo RETEC fornece exaustores axiais e centrífugos robustos, caixas de filtragem e dutos de distribuição de ar de alta velocidade para manter o ambiente fresco e livre de odores.",
      "Projetamos a circulação de ar para evitar bolsões de ar úmido e quente, garantindo o conforto necessário para a alta performance física dos frequentadores."
    ],
    slug: "academias-centros-fitness"
  },
  {
    title: "Residencial de Alto Padrão",
    category: "Residencial Premium",
    img: "/about/about2.jpg",
    description: "Design integrado à decoração, operation silenciosa e máxima eficiência energética.",
    paragraphs: [
      "Residências de luxo e alto padrão exigem climatização invisível: equipamentos ocultos em sancas de gesso, dutos embutidos e grelhas lineares de design minimalista que complementam o projeto de arquitetura de interiores.",
      "Trabalhamos com sistemas VRF residenciais (Daikin Multi-Split e VRV Fit), que operam com altíssimo silêncio e oferecem controle independente para cada suíte e ambiente social.",
      "Garantimos o isolamento térmico perfeito das tubulações com produtos de alta gama da Armacell, evitando condensação indesejada e preservando o gesso e a decoração de luxo."
    ],
    slug: "residencial-alto-padrao"
  },
  {
    title: "Restaurantes e Alimentação",
    category: "Alimentação & Lazer",
    img: "/about/office-inside.webp",
    description: "Exaustão profissional de cozinhas e climatização confortável para salão de clientes.",
    paragraphs: [
      "Restaurantes exigem um balanço térmico preciso: o salão de clientes precisa de climatização confortável e silenciosa, enquanto a cozinha necessita de sistemas de exaustão e captação de gordura extremamente potentes.",
      "O Grupo RETEC fornece exaustores industriais, filtros metálicos laváveis para coifas, dampers de segurança corta-fogo, além de fancoletes e cassetes lineares silenciosos para a área dos clientes.",
      "Nossos sistemas evitam que a fumaça e o cheiro da cozinha migrem para o salão, mantendo a pressurização adequada em cada setor do restaurante."
    ],
    slug: "restaurantes"
  }
];

export default function SegmentCardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSegment, setActiveSegment] = useState<Segment | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSegment(null);
      }
    };

    if (activeSegment) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeSegment]);

  return (
    <section className={styles.section} style={{ padding: '48px 0 112px' }}>
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <div className={styles.introLeft}>
            <p className={styles.eyebrow}>Onde Atuamos</p>
            <h2 className={styles.sectionTitle}>Soluções por Nicho</h2>
            <p className={styles.sectionText}>
              Entregamos o dimensionamento técnico e os materiais corretos para cada aplicação e complexidade da sua obra.
            </p>
          </div>
          <div className={styles.controls}>
            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className={styles.arrowBtn}
              aria-label="Rolar para esquerda"
            >
              &#8592;
            </button>
            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className={styles.arrowBtn}
              aria-label="Rolar para direita"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.scrollTrack} ref={scrollRef}>
            {segments.map((segment, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => setActiveSegment(segment)}
              >
                <div className={styles.cardOverlay} />
                <Image
                  className={styles.cardImage}
                  src={segment.img}
                  alt={segment.title}
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{segment.category}</span>
                  <h3 className={styles.cardTitle}>{segment.title}</h3>
                  <Link
                    href={`/solucoes/${segment.slug}`}
                    className={styles.cardLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Saiba mais &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeSegment && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveSegment(null)}
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSegment(null)}
              className={styles.closeBtn}
              aria-label="Fechar modal"
            >
              &#10005;
            </button>

            <div className={styles.modalImageWrapper}>
              <div className={styles.modalOverlayGradient} />
              <Image
                className={styles.modalImage}
                src={activeSegment.img}
                alt={activeSegment.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.modalHeaderContent}>
                <span className={styles.modalCategory}>
                  {activeSegment.category}
                </span>
                <h3 className={styles.modalTitle}>{activeSegment.title}</h3>
              </div>
            </div>

            <div className={styles.modalBody}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0f2854', marginBottom: '16px' }}>
                {activeSegment.description}
              </h4>
              {activeSegment.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
