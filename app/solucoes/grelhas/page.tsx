import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "./grelhas.module.scss";
import TechnicalSpecsAccordion from "../../components/technicalSpecsAccordion";

export const metadata: Metadata = {
    title: "Grelhas de ventilação | RETEC",
    description: 
    "Grelhas para insuflamento, retorno, exaustão e captação de ar em sistemas HVAC comerciais, corporativos e residenciais."
};

const produtos = [
  {
    nome: "Grelha TROX AT-AG",
    tipo: "Insuflamento",
    descricao:
      "Grelha em alumínio para distribuição de ar em sistemas de climatização e ventilação, com configuração adequada ao direcionamento e controle do fluxo.",
    aplicacao:
      "Escritórios, salas de reunião, hotéis, residências e ambientes climatizados.",
    imagem:
      "/solucoes/grelhas/grelha_trox_at_ag.png",

    technicalSpecs: [
      {
        label: "Tamanhos nominais",
        value: "Diversas dimensões conforme o projeto",
      },
      {
        label: "Material",
        value: "Alumínio",
      },
      {
        label: "Função",
        value: "Insuflamento e distribuição de ar",
      },
      {
        label: "Regulagem",
        value: "Registro para controle do fluxo de ar",
      },
      {
        label: "Instalação",
        value: "Parede, teto ou rede de dutos",
      },
      {
        label: "Acabamento",
        value: "Anodizado ou pintura conforme especificação",
      },
    ],
  },

  {
    nome: "Grelha TROX AR-A",
    tipo: "Retorno",
    descricao:
      "Grelha de retorno em alumínio com aletas horizontais fixas, desenvolvida para captação eficiente do ar de retorno ou exaustão.",
    aplicacao:
      "Sistemas de ar-condicionado, escritórios, ambientes comerciais e áreas comuns.",
    imagem:
      "/solucoes/grelhas/grelha_trox_ar_a.png",

    technicalSpecs: [
      {
        label: "Tamanhos nominais",
        value: "Diversas dimensões conforme o projeto",
      },
      {
        label: "Material",
        value: "Perfis de alumínio",
      },
      {
        label: "Aletas",
        value: "Horizontais fixas",
      },
      {
        label: "Função",
        value: "Retorno ou exaustão de ar",
      },
      {
        label: "Regulagem",
        value: "Sem registro na configuração A",
      },
      {
        label: "Acabamento",
        value: "Alumínio anodizado ou pintura especificada",
      },
    ],
  },

  {
    nome: "Grelha TROX AR-AG",
    tipo: "Retorno com regulagem",
    descricao:
      "Grelha de retorno em alumínio com aletas horizontais fixas e registro posterior, permitindo ajuste da passagem de ar e apoio ao balanceamento do sistema.",
    aplicacao:
      "Hotéis, edifícios comerciais, hospitais e instalações HVAC com controle de vazão.",
    imagem:
      "/solucoes/grelhas/grelha_trox_ar_ag.png",

    technicalSpecs: [
      {
        label: "Tamanhos nominais",
        value: "Diversas dimensões conforme o projeto",
      },
      {
        label: "Material",
        value: "Perfis de alumínio",
      },
      {
        label: "Aletas",
        value: "Horizontais fixas",
      },
      {
        label: "Função",
        value: "Retorno ou exaustão de ar",
      },
      {
        label: "Regulagem",
        value: "Registro posterior para controle de vazão",
      },
      {
        label: "Acabamento",
        value: "Alumínio anodizado ou pintura especificada",
      },
    ],
  },

  {
    nome: "Veneziana TROX AWK",
    tipo: "Captação e renovação",
    descricao:
      "Veneziana exterior projetada para fechamento de aberturas de sistemas de ventilação e climatização, reduzindo a entrada direta de chuva, folhas e pássaros.",
    aplicacao:
      "Fachadas, salas de máquinas, áreas técnicas e sistemas de tomada ou renovação de ar.",
    imagem:
      "/solucoes/grelhas/grelha_trox_awk.png",

    technicalSpecs: [
      {
        label: "Tipo",
        value: "Veneziana exterior",
      },
      {
        label: "Material",
        value: "Alumínio",
      },
      {
        label: "Aletas",
        value: "Fixas",
      },
      {
        label: "Função",
        value: "Captação, renovação e proteção de aberturas externas",
      },
      {
        label: "Proteção",
        value: "Contra entrada direta de chuva, folhas e pássaros",
      },
      {
        label: "Dimensões",
        value: "Diversos tamanhos e medidas intermediárias",
      },
    ],
  },
];

const productColumns = [0, 1, 2].map((columnIndex) =>
  produtos.filter((_, index) => index % 3 === columnIndex)
);

const aplicacoes = [
    {
        titulo: "Insuflamento",
        texto:
            "Distribuição do ar climatizado para o ambiente, com opções de direcionamento do fluxo conforme a necessidade do projeto.",
    },
    {
        titulo: "Retorno e exaustão",
        texto:
            "Captação do ar do ambiente para retorno ao sistema ou para exaustão, contribuindo para o correto funcionamento da rede HVAC.",
    },
];

export default function GrelhasPage() {
    const whatsappmessage = encodeURIComponent(
        "Olá! Gostaria de solicitar informações e orçamento para grelhas de ventilação",
    );

    return (
        <div className={styles.page}>
            <Navbar activeTab="solucoes" />
            <main>  
                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.container}>

                        <div className={styles.heroGrid}>

                            <div className={styles.heroContent}>
                                <Link href="/solucoes" className={styles.backLink}>
                                    <span aria-hidden="true">&larr;</span> 
                                    Voltar para Soluções
                                </Link>
                                <p className={styles.eyebrow}>
                                    Difusão e controle de ar
                                </p>
                                <h1> Grelhas de ventilação</h1>
                                <p className={styles.heroText}>
                                    Soluções para insuflamento, retorno, exaustão e
                                    captação de ar, com opções para diferentes necessidades
                                    de distribuição e balanceamento do fluxo em sistemas HVAC.
                                </p>


                                <div className={styles.heroActions}>
                                    <a
                                        href="#modelos"
                                        className={styles.primaryButton}
                                    >
                                        Ver modelos
                                    </a>

                                    <a
                                        href={`https://wa.me/5561998904494?text=${whatsappmessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.secondaryButton}
                                    >
                                        Solicitar orçamento
                                    </a>
                                </div>

                            </div>

                            <div className={styles.heroImageWrapper}>
                                <Image
                                    src="/solucoes/grelhas/grelha_trox_at_ag.png"
                                    alt="Grelha TROX AT-AG para insuflamento de ar"
                                    fill
                                    priority
                                    sizes="(max-width: 900px) 100vw, 520px"
                                    className={styles.heroImage}
                                />
                            </div>

                        </div>

                    </div>

                </section>

                {/* APLICAÇÕES */}
                <section className={styles.introSection}>

                    <div className={styles.container}>

                        <div className={styles.sectionHeading}>
                            <p className={styles.eyebrowDark}>
                                Aplicações
                            </p>

                            <h2>
                                Distribuição de ar com controle e acabamento
                            </h2>

                            <p>
                                A escolha da grelha depende da função do ponto de ar,
                                da vazão prevista, da direção desejada para o fluxo e
                                das características arquitetônicas do ambiente.
                            </p>
                        </div>

                        <div className={styles.applicationGrid}>
                            {aplicacoes.map((item) => (
                                <article
                                    key={item.titulo}
                                    className={styles.applicationCard}
                                    >
                                        <div className={styles.cardIcon}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                            >
                                                <path d="M4 12h16" />
                                                <path d="m14 6 6 6-6 6" />
                                                </svg>
                                        </div>

                                        <h3>{item.titulo}</h3>
                                        
                                        <p>{item.texto}</p>
                                    </article>
                            ))}
                        </div>

                    </div>

                </section>

                {/* PRODUTOS */}
                <section
                    className={styles.modelsSection}
                    id="modelos"
                    >
                        <div className={styles.container}>

                            <div className={styles.sectionHeading}>
                                <p className={styles.eyebrowDark}>
                                    Portfólio de produtos
                                </p>

                                <h2> Alguns modelos disponíveis</h2>

                                <p>
                                    A RETEC trabalha com diferentes configurações de
                                    grelhas para atender projetos de climatização,
                                    ventilação e renovação de ar.
                                </p>
                            </div>

                            <div className={styles.productGrid}>
                                {productColumns.map((column, columnIndex) => (
                                    <div
                                    className={styles.productColumn}
                                    key={columnIndex}
                                    >
                                    {column.map((produto) => (
                                        <article
                                        key={produto.nome}
                                        className={styles.productCard}
                                        >
                                        <div className={styles.productImageWrapper}>
                                            <Image
                                            src={produto.imagem}
                                            alt={produto.nome}
                                            fill
                                            sizes="
                                                (max-width: 700px) 100vw,
                                                (max-width: 1100px) 50vw,
                                                33vw
                                            "
                                            className={styles.productImage}
                                            />
                                        </div>

                                        <div className={styles.productContent}>
                                            <span className={styles.productType}>
                                            {produto.tipo}
                                            </span>

                                            <h3>{produto.nome}</h3>

                                            <p>{produto.descricao}</p>

                                            <div className={styles.applicationText}>
                                            <strong>Indicado para:</strong>
                                            <span>{produto.aplicacao}</span>
                                            </div>

                                            <TechnicalSpecsAccordion
                                            specs={produto.technicalSpecs}
                                            />
                                        </div>
                                        </article>
                                    ))}
                                    </div>
                                ))}
                                </div>

                        </div>

                    </section>

                    {/* INFO TECNICA */}
                    <section className={styles.infoSection}>
                        
                        <div className={styles.container}>

                            <div className={styles.infoGrid}>

                                <div>
                                    <p className={styles.eyebrowDark}>
                                        Especificações
                                    </p>
                                    <h2>
                                        O modelo correto depende do projeto
                                    </h2>
                                </div>

                                <div className={styles.infoText}>
                                    <p>
                                        Além do acabamento, a seleção deve considerar
                                        vazão de ar, posição de instalação, insuflamento
                                        ou retorno e necessidade de regulagem.

                                        A equipe RETEC pode apoiar a especificação e o
                                        fornecimento dos componentes adequados para cada
                                        aplicação.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </section>

                    {/* CTA */}
                    <section className={styles.ctaSection}>

                        <div className={styles.container}>

                            <div className={styles.ctaCard}>

                                <div>
                                    <p className={styles.ctaEyebrow}>
                                        Atendimento técnico
                                    </p>

                                    <h2>
                                        Precisa de grelhas para sua obra?
                                    </h2>

                                    <p>
                                        Envie as informações do projeto ou sua lista de
                                        materiais e consulte disponibilidade, modelos
                                        e especificações.
                                    </p>
                                </div>

                                <a
                                    href={`https://wa.me/5561998904494?text=${whatsappmessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.ctaButton}
                                >
                                    Falar com a RETEC
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>

                        </div>

                    </section>
            </main>
            <Footer />
        </div>
    );
}