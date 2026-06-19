"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import vrvFitImg from "../../produtos/climatizacao-equipamentos/vrv-fit.webp";
import vrv6Img from "../../produtos/climatizacao-equipamentos/vrv6_1.webp";
import vrvwImg from "../../produtos/climatizacao-equipamentos/vrv-w.webp";
import vrvInovaImg from "../../produtos/climatizacao-equipamentos/vrv-inova.webp";
import vrvSImg from "../../produtos/climatizacao-equipamentos/vrv-s.webp";
import fancoleteImg from "../../produtos/climatizacao-equipamentos/fancolete-duto-fww.webp";
import fancoleteFwcImg from "../../produtos/climatizacao-equipamentos/fancolete-duto-fwc.webp";
import fancoleteFwdhImg from "../../produtos/climatizacao-equipamentos/fancolete-hospitalar-fwdh.webp";
import casseteImg from "../../produtos/climatizacao-equipamentos/cassete.webp";
import cassete1viaImg from "../../produtos/climatizacao-equipamentos/cassete-1via.webp";
import casseteRoundFlowImg from "../../produtos/climatizacao-equipamentos/cassete-round-flow.webp";
import hiWallImg from "../../produtos/climatizacao-equipamentos/hi-wall.webp";
import chillerParafusoImg from "../../produtos/refrigeracao-alta-perfomace/chiller-parafuso.webp";
import chillerUalImg from "../../produtos/refrigeracao-alta-perfomace/chiller-ual.webp";
import miniChillerDaikinImg from "../../produtos/refrigeracao-alta-perfomace/mini-chiller-daikin.webp";
import exaustorAci250Img from "../../produtos/exaustao-e-ventilacao/exaustor_aci_250_sicflux.webp";
import exaustorSonora18Img from "../../produtos/exaustao-e-ventilacao/exaustor_banheiro_sicflux_sonora_18_silencioso_bivolt.webp";
import exaustorMega34Img from "../../produtos/exaustao-e-ventilacao/exaustor_sicflux_mega_34_bivolt_silencioso_para_banheiro.webp";
import exaustorMaxx100Img from "../../produtos/exaustao-e-ventilacao/exaustor-axial-in-line-maxx_100_sicflux.webp";
import gabineteFh315Img from "../../produtos/exaustao-e-ventilacao/gabinete_de_ventilacao_sicflux_fh_315_com_filtros_g4_m5_220v.webp";
import damperRgBImg from "../../produtos/difusao-controle-ar/damper_de_regulagem_leve_com_aletas_convergentes_rg_b.webp";
import grelhaMultivac100Img from "../../produtos/difusao-controle-ar/grelha_com_aletas_fixas_100_multivac_com_tela_anti_inseto.webp";
import grelhaTroxAtAgImg from "../../produtos/difusao-controle-ar/grelha_de_insuflamento_trox_at_ag.webp";
import grelhaTroxVatDgImg from "../../produtos/difusao-controle-ar/grelha_de_insuflamento_trox_vat_dg.webp";
import grelhaTroxArAImg from "../../produtos/difusao-controle-ar/grelha_de_retorno_trox_ar_a.webp";
import grelhaTroxArAgImg from "../../produtos/difusao-controle-ar/grelha_de_retorno_trox_ar_ag.webp";
import grelhaSicfluxGvaf125Img from "../../produtos/difusao-controle-ar/grelha_de_saida_de_ar_auto_fechante_gvaf_125_sicflux.webp";
import grelhaSicfluxGfmT200Img from "../../produtos/difusao-controle-ar/grelha_metalica_fixa_sicflux_gfm_t_200_com_tela_anti_inseto_4_furos.webp";
import grelhaSicfluxGfmC150Img from "../../produtos/difusao-controle-ar/grelha_metalica_sicflux_gfm_c_150_com_colarinho.webp";
import grelhaSicfluxS2525Img from "../../produtos/difusao-controle-ar/grelha_quadrada_de_sobrepor_s2525_sicflux_abs_e_anti_uv_teto_parede.webp";
import grelhaSicfluxRedondaImg from "../../produtos/difusao-controle-ar/grelha_redonda_fixa_com_colarinho_sicflux.webp";
import grelhaTroxAwkImg from "../../produtos/difusao-controle-ar/grelha_veneziana_de_retorno_trox_awk.webp";
import reguladorSicfluxRva200Img from "../../produtos/difusao-controle-ar/regulador_de_vazao_de_ar_rva_200_sicflux_para_instalacao_em_teto_plastico_abs_encaixe_ajustavel.webp";
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
    details: "Oferecemos uma linha completa de soluções para climatização e controle de temperatura. Nossos equipamentos atendem desde escritórios comerciais até indústrias e hospitais, garantindo eficiência energética, controle de umidade e alta vazão. Trabalhamos em parceria com marcas líderes de mercado como Daikin, Trox, Midea e outras referências em sistemas VRV/VRF e Fancoils.",
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
  const [selectedCategory, setSelectedCategory] = useState<
    | "VRV"
    | "Fancolete"
    | "Cassete"
    | "Hi-Wall"
    | "Exaustor"
    | "Gabinete de Ventilação"
    | "Grelhas Trox"
    | "Grelhas de Ventilação"
    | "Dampers e Reguladores"
  >(() => {
    if (params.slug === "exaustao-e-ventilacao") {
      return "Exaustor";
    }
    if (params.slug === "difusao-e-controle-de-ar") {
      return "Grelhas Trox";
    }
    return "VRV";
  });

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
              <h3 className={styles.subTitle}>
                {params.slug === "exaustao-e-ventilacao"
                  ? "Linha de Exaustão e Ventilação que distribuímos:"
                  : "Linha de Climatização e Equipamentos que distribuímos:"}
              </h3>

              {params.slug === "climatizacao-e-equipamentos" && (
                <>
                  <div className={styles.filterContainer}>
                    {(["VRV", "Fancolete", "Cassete", "Hi-Wall"] as const).map((category) => (
                      <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""
                          }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* VRV Category Products */}
                  {selectedCategory === "VRV" && (
                    <div className={styles.productFadeIn}>
                      {/* VRV Fit */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O VRV Fit Daikin representa a sofisticação que você merece, aliada à constante inovação da maior empresa de ar-condicionado do mundo.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Lojas, escritórios e residências de alto padrão
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={vrvFitImg}
                            alt="Daikin VRV Fit"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* VRV 6 */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={vrv6Img}
                            alt="Daikin VRV 6"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O VRV 6 Daikin combina alta eficiência, confiabilidade e flexibilidade de instalação, oferecendo uma solução avançada para projetos de climatização comercial e corporativa.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Proprietários, projetistas, instaladores e gestores prediais.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* VRV W */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O VRV-W Daikin é uma solução de climatização ideal para projetos com pouca ou nenhuma área externa disponível. Seu sistema utiliza água para rejeição de calor, oferecendo maior flexibilidade de instalação, eficiência operacional e adaptação a diferentes tipos de edifícios.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Comércios, hospitais, shoppings e prédios.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={vrvwImg}
                            alt="Daikin VRV W"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* VRV Nova Geração */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={vrvInovaImg}
                            alt="Daikin VRV Nova Geração"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A solução VRV Daikin de nova geração (Inova) da Daikin foi projetada para climatização central com alta eficiência, flexibilidade e controle por zonas.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Casas de alto padrão, edifícios comerciais, hotéis e hospitais.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* VRV S */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O VRV-S Daikin combina alta eficiência energética, conforto e instalação flexível em um sistema compacto para diferentes tipos de projeto.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Lojas, escritórios e casas de alto padrão.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={vrvSImg}
                            alt="Daikin VRV S"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Fancolete Category Products */}
                  {selectedCategory === "Fancolete" && (
                    <div className={styles.productFadeIn}>
                      {/* Fancolete Slim FWW */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Fancolete de Slim FWW (Duto) Daikin oferece climatização extremamente silenciosa e discreta. Projetado para instalação acima do gesso, garante distribuição uniforme de ar e alta durabilidade.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Hotéis, escritórios corporativos, hospitais e salas de reunião.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={fancoleteImg}
                            alt="Fancolete de Embutir Daikin FWW"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Fancolete FWC */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={fancoleteFwcImg}
                            alt="Fancolete Daikin FWC"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            Fancolete FWC Daikin dutado com operação padrão ou 100% ar externo, ideal para climatização eficiente em ambientes comerciais, hotéis, hospitais e grandes empreendimentos.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Shoppings, hotéis, hospitais, edifícios comerciais e ambientes com pé-direito alto ou necessidade de distribuição de ar por dutos.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Fancolete Hospitalar FWDH */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            Fancolete hospitalar FWDH Daikin desenvolvido para qualidade do ar em ambientes críticos, com dupla ou tripla filtragem e controle preciso para aplicações de saúde.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Hospitais, clínicas, laboratórios, centros cirúrgicos, salas limpas e ambientes que precisam de maior controle de qualidade do ar, filtragem e segurança operacional.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={fancoleteFwdhImg}
                            alt="Fancolete Hospitalar Daikin FWDH"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cassete Category Products */}
                  {selectedCategory === "Cassete" && (
                    <div className={styles.productFadeIn}>
                      {/* Cassete Daikin 4 Vias */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Cassete Daikin de 4 Vias proporciona excelente distribuição de fluxo de ar em quatro direções, ideal para climatizar salas amplas com controle inteligente de aletas.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Escritórios, lojas comerciais, clínicas e salas de reunião.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={casseteImg}
                            alt="Cassete Daikin 4 Vias"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Cassete Daikin 1 Via */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={cassete1viaImg}
                            alt="Cassete Daikin 1 Via"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Cassete Daikin de 1 Via possui design ultra slim de perfil baixo, perfeito para instalação em gessos com espaço de entreforro reduzido, garantindo sofisticação e funcionamento extremamente silencioso.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Apartamentos residenciais, dormitórios de alto padrão e pequenos escritórios.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Cassete Daikin Round Flow (360°) */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Cassete Daikin Round Flow oferece distribuição de ar em 360° com fluxo de ar circular uniforme para eliminar correntes frias e pontos sem climatização. Conta com sensores inteligentes de presença e de piso.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Lojas de varejo, restaurantes, auditórios, recepções e escritórios corporativos de conceito aberto.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={casseteRoundFlowImg}
                            alt="Cassete Daikin Round Flow"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hi-Wall Category Products */}
                  {selectedCategory === "Hi-Wall" && (
                    <div className={styles.productFadeIn}>
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O evaporador Hi-Wall Daikin oferece alto conforto térmico com tecnologia avançada de filtragem de ar, baixo consumo elétrico e funcionamento ultra silencioso.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Quartos, salas de estar residenciais, pequenos escritórios e consultórios.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={hiWallImg}
                            alt="Hi-Wall Daikin Inverter"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {params.slug === "refrigeracao-de-alta-performance" && (
                <>
                  {/* Chiller Parafuso */}
                  <div className={styles.vrvFitSection}>
                    <div className={styles.vrvFitContent}>
                      <h3 className={styles.vrvFitTitle}>
                        Chillers com compressor parafuso Daikin oferecem alta eficiência e confiabilidade no resfriamento de água para sistemas de grande porte. Possuem controle preciso de capacidade e baixo nível de ruído, sendo a solução ideal para processos industriais e grandes edificações.
                      </h3>
                      <div className={styles.vrvFitUsage}>
                        <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                        <blockquote className={styles.vrvFitUsageBlockquote}>
                          Indústrias farmacêuticas, químicas, shoppings centers, grandes edifícios comerciais e hospitais.
                        </blockquote>
                      </div>
                    </div>
                    <div className={styles.vrvFitImageWrapper}>
                      <Image
                        src={chillerParafusoImg}
                        alt="Chiller Parafuso Daikin"
                        className={styles.vrvFitImage}
                        placeholder="blur"
                      />
                    </div>
                  </div>

                  {/* Chiller UAL */}
                  <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                    <div className={styles.vrvFitImageWrapper}>
                      <Image
                        src={chillerUalImg}
                        alt="Chiller Modular UAL Daikin"
                        className={styles.vrvFitImage}
                        placeholder="blur"
                      />
                    </div>
                    <div className={styles.vrvFitContent}>
                      <h3 className={styles.vrvFitTitle}>
                        O Chiller Modular UAL Daikin é uma solução flexível e altamente eficiente com condensação a ar. Seu design modular permite o acoplamento de múltiplas unidades para expansão do sistema conforme a necessidade da obra, garantindo facilidade de manutenção e economia.
                      </h3>
                      <div className={styles.vrvFitUsage}>
                        <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                        <blockquote className={styles.vrvFitUsageBlockquote}>
                          Hotéis, hospitais, prédios comerciais de médio e grande porte, indústrias e projetos com necessidade de expansão modular.
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  {/* Mini Chiller Daikin */}
                  <div className={styles.vrvFitSection}>
                    <div className={styles.vrvFitContent}>
                      <h3 className={styles.vrvFitTitle}>
                        O Mini Chiller Inverter Daikin oferece alto desempenho e eficiência térmica em um design extremamente compacto. Ideal para residências e comércios de pequeno a médio porte, utiliza tecnologia inverter para otimizar o consumo de energia de forma silenciosa.
                      </h3>
                      <div className={styles.vrvFitUsage}>
                        <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                        <blockquote className={styles.vrvFitUsageBlockquote}>
                          Residências de alto padrão, clínicas, escritórios, consultórios e projetos com restrição de espaço externo.
                        </blockquote>
                      </div>
                    </div>
                    <div className={styles.vrvFitImageWrapper}>
                      <Image
                        src={miniChillerDaikinImg}
                        alt="Mini Chiller Inverter Daikin"
                        className={styles.vrvFitImage}
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </>
              )}

              {params.slug === "exaustao-e-ventilacao" && (
                <>
                  <div className={styles.filterContainer}>
                    {(["Exaustor", "Gabinete de Ventilação"] as const).map((category) => (
                      <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""
                          }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Exaustor Category Products */}
                  {selectedCategory === "Exaustor" && (
                    <div className={styles.productFadeIn}>
                      {/* Exaustor ACI 250 */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O exaustor centrífugo in-line ACI 250 Sicflux é ideal para instalação em redes de dutos de ventilação de médio porte. Desenvolvido para oferecer alta vazão e pressão com baixo nível de ruído, conta com motor de rolamento e carcaça metálica resistente.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Escritórios, comércios, banheiros públicos, salas de reunião e instalações industriais leves.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={exaustorAci250Img}
                            alt="Exaustor Centrífugo ACI 250 Sicflux"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Exaustor Sonora 18 */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={exaustorSonora18Img}
                            alt="Exaustor de Banheiro Sicflux Sonora 18"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O exaustor de banheiro Sicflux Sonora 18 oferece exaustão eficiente e extremamente silenciosa para banheiros residenciais. Conta com veneziana traseira antirretorno e funcionamento bivolt.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Banheiros residenciais, suítes, lavabos e pequenos ambientes sem ventilação natural.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Exaustor Mega 34 */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O exaustor Sicflux Mega 34 é uma solução robusta e super silenciosa para a exaustão de banheiros maiores ou comerciais. Com vazão otimizada e fácil instalação, garante a eliminação eficaz de odores e umidade.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Banheiros de hotéis, escritórios comerciais, consultórios e vestiários de médio porte.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={exaustorMega34Img}
                            alt="Exaustor Sicflux Mega 34"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Exaustor Maxx 100 */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={exaustorMaxx100Img}
                            alt="Exaustor Axial In-Line Maxx 100 Sicflux"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O exaustor axial in-line Maxx 100 Sicflux é projetado para instalação intermediária em dutos de ventilação, funcionando como reforço de linha. Extremamente compacto e silencioso.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Sistemas de exaustão residenciais, reforço de fluxo em dutos, escritórios de pequeno porte e lavabos.
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gabinete de Ventilação Category Products */}
                  {selectedCategory === "Gabinete de Ventilação" && (
                    <div className={styles.productFadeIn}>
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Gabinete de Ventilação Sicflux FH 315 com filtros G4+M5 é uma solução de alta performance desenvolvida para insuflamento, renovação e filtragem de ar comercial e corporativo. Sua estrutura robusta garante atenuação acústica e facilidade de manutenção de seus filtros modulares, ideal para garantir a Qualidade do Ar Interno (QAI).
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Escritórios, salas de aula, clínicas, consultórios, galpões e edifícios comerciais com foco em renovação de ar limpo.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={gabineteFh315Img}
                            alt="Gabinete de Ventilação Sicflux FH 315"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {params.slug === "difusao-e-controle-de-ar" && (
                <>
                  <div className={styles.filterContainer}>
                    {(["Grelhas Trox", "Grelhas de Ventilação", "Dampers e Reguladores"] as const).map((category) => (
                      <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""
                          }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Grelhas Trox Category Products */}
                  {selectedCategory === "Grelhas Trox" && (
                    <div className={styles.productFadeIn}>
                      {/* Grelha Trox AT-AG */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Trox AT-AG (Insuflamento) é fabricada em perfis de alumínio extrudado, equipada com aletas horizontais e verticais individualmente ajustáveis para controle preciso da direção do fluxo de ar no ambiente.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Escritórios comerciais, salas de reunião, hotéis, residências e ambientes que demandam distribuição uniforme e direcionamento do ar climatizado.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaTroxAtAgImg}
                            alt="Grelha Trox AT-AG"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Grelha Trox VAT-DG */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaTroxVatDgImg}
                            alt="Grelha Trox VAT-DG"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Trox VAT-DG (Insuflamento Vertical) conta com aletas duplas defletoras ajustáveis, oferecendo excelente controle do jato de ar. Possui registro de regulagem de vazão acoplado para balanceamento perfeito.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Ambientes corporativos, lojas de departamento, auditórios e locais com pé-direito médio a alto que necessitam de distribuição vertical do fluxo.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Grelha Trox AR-A */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Trox AR-A (Retorno) é produzida em alumínio anodizado com aletas horizontais fixas inclinadas a 45°. Desenvolvida para captação de ar de retorno ou exaustão, proporcionando baixa perda de carga e excelente acabamento estético.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Retorno de sistemas de ar condicionado central, exaustão de ar em escritórios, salas comerciais e áreas comuns.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaTroxArAImg}
                            alt="Grelha Trox AR-A"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Grelha Trox AR-AG */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaTroxArAgImg}
                            alt="Grelha Trox AR-AG"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Trox AR-AG (Retorno com Registro) é construída em alumínio com aletas fixas defletoras a 45° e registro de regulagem de lâminas opostas integrado, facilitando o balanceamento preciso da vazão do sistema.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Balanceamento de redes de retorno em sistemas HVAC centrais de escritórios, hotéis, hospitais e edifícios comerciais.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Grelha Veneziana Trox AWK */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Veneziana Trox AWK possui aletas fixas horizontais curvas, projetada para captação externa ou interna de ar. Evita a visualização do interior do duto e reduz a entrada de água em captações de ar externo.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Fachadas de edifícios, salas de máquinas, captações externas de ar de renovação e portas de salas técnicas.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaTroxAwkImg}
                            alt="Grelha Veneziana Trox AWK"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Grelhas de Ventilação Category Products */}
                  {selectedCategory === "Grelhas de Ventilação" && (
                    <div className={styles.productFadeIn}>
                      {/* Grelha Multivac 100 com Tela */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Multivac com Tela Anti-Inseto é uma grelha circular com aletas fixas de diversos tamanhos. Produzida em plástico de alta resistência e equipada com tela integrada para impedir o acesso de insetos e pequenos detritos.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Ventilação natural ou mecânica de banheiros, copas, despensas e saídas de ar externas residenciais.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaMultivac100Img}
                            alt="Grelha Multivac 100 com Tela"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Grelha Auto-fechante GVAF 125 Sicflux */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaSicfluxGvaf125Img}
                            alt="Grelha Auto-fechante Sicflux GVAF 125"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Auto-fechante GVAF Sicflux conta com aletas móveis gravidade/auto-fechantes de diversos tamanhos. Abrem-se com a pressão da exaustão do ar e fecham-se automaticamente quando o exaustor desliga, impedindo retornos e insetos.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Terminações externas de exaustores de banheiro, cozinhas residenciais e redes de dutos de exaustão em apartamentos.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Grelha Metálica Sicflux GFM T-200 */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Metálica Sicflux GFM T é uma grelha metálica plana com tela integrada e aletas fixas, disponível em diversos tamanhos. Conta com furação nos quatro cantos para fixação rápida e durabilidade extrema.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Ambientes que exigem alta resistência mecânica, como indústrias, garagens comerciais, depósitos e áreas técnicas.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaSicfluxGfmT200Img}
                            alt="Grelha Metálica Sicflux GFM T-200"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Grelha Metálica Sicflux GFM C-150 com Colarinho */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaSicfluxGfmC150Img}
                            alt="Grelha Metálica Sicflux GFM C-150 com Colarinho"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Metálica Sicflux GFM C com Colarinho possui diversos tamanhos com acabamento premium e colarinho traseiro integrado para encaixe direto em dutos flexíveis ou rígidos.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Conexão direta em dutos flexíveis de exaustores de banheiro, coifas residenciais e sistemas de renovação de ar.
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Grelha de Sobrepor Sicflux S2525 ABS */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha de Sobrepor Sicflux S2525 ABS é uma grelha quadrada de sobrepor em plástico ABS com proteção anti-UV. Apresenta design de perfil baixo para aplicação em teto ou parede com fino acabamento.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Acabamento estético de pontos de insuflamento ou exaustão em apartamentos, escritórios, consultórios e residências.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaSicfluxS2525Img}
                            alt="Grelha de Sobrepor Sicflux S2525 ABS"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Grelha Redonda Fixa Sicflux com Colarinho */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={grelhaSicfluxRedondaImg}
                            alt="Grelha Redonda Fixa Sicflux"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            A Grelha Redonda Fixa Sicflux com Colarinho é circular e projetada com colarinho traseiro integrado para encaixe simples. Fabricada em plástico de alta engenharia para excelente custo-benefício.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Terminações de redes de dutos de ventilação mecânica, exaustores axiais e renovadores de ar residenciais.
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dampers e Reguladores Category Products */}
                  {selectedCategory === "Dampers e Reguladores" && (
                    <div className={styles.productFadeIn}>
                      {/* Damper de Regulagem Trox RG-B */}
                      <div className={styles.vrvFitSection}>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Damper de Regulagem Trox RG-B oferece regulagem de vazão leve com acionamento manual e aletas convergentes. Estrutura robusta ideal para controle e balanceamento preciso do fluxo em redes de dutos retangulares.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Instalação em dutos retangulares para balanceamento de ar condicionado central, ventilação mecânica e isolamento de ramais.
                            </blockquote>
                          </div>
                        </div>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={damperRgBImg}
                            alt="Damper de Regulagem Trox RG-B"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Regulador de Vazão Sicflux RVA 200 ABS */}
                      <div className={`${styles.vrvFitSection} ${styles.reversed}`}>
                        <div className={styles.vrvFitImageWrapper}>
                          <Image
                            src={reguladorSicfluxRva200Img}
                            alt="Regulador de Vazão Sicflux RVA 200"
                            className={styles.vrvFitImage}
                            placeholder="blur"
                          />
                        </div>
                        <div className={styles.vrvFitContent}>
                          <h3 className={styles.vrvFitTitle}>
                            O Regulador de Vazão Sicflux RVA ABS permite ajustar manualmente a vazão de ar do ambiente de forma simples e direta. Fabricado em plástico ABS com encaixe ajustável.
                          </h3>
                          <div className={styles.vrvFitUsage}>
                            <h4 className={styles.vrvFitUsageTitle}>excelente para:</h4>
                            <blockquote className={styles.vrvFitUsageBlockquote}>
                              Instalação em gesso/teto para controle e balanceamento da vazão de ramais residenciais e comerciais de pequeno porte.
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
