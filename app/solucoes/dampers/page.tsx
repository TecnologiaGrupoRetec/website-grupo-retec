import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TechnicalSpecsAccordion from "../../components/technicalSpecsAccordion";
import styles from "./dampers.module.scss";

export const metadata: Metadata = {
  title: "Dampers corta-fogo | RETEC",
  description:
    "Dampers corta-fogo para compartimentação de sistemas de ventilação e climatização, com opções retangulares e redondas para diferentes classes de resistência ao fogo.",
};

const produtos = [
  {
    ordem: 1,
    nome: "TROX FKA-TI-BR-60",
    tipo: "Retangular · 60 minutos",
    descricao:
      "Damper corta-fogo para fechamento automático de setores de proteção contra incêndio em instalações de ventilação e ar-condicionado.",
    aplicacao:
      "Redes HVAC com passagem por paredes ou lajes e requisito de resistência ao fogo de 60 minutos.",
    imagem: "/solucoes/dampers/damper_trox_retangular.png",
    imagemAlt:
      "Damper corta-fogo retangular TROX, imagem ilustrativa da linha FKA",

    technicalSpecs: [
      {
        label: "Formato",
        value: "Quadrado ou retangular",
      },
      {
        label: "Resistência ao fogo",
        value: "60 minutos",
      },
      {
        label: "Dimensões de referência",
        value: "Largura de 200 a 1500 mm e altura de 200 a 800 mm",
      },
      {
        label: "Carcaça",
        value:
          "Chapa de aço zincada conforme NBR 7008 ZC, revestimento B",
      },
      {
        label: "Aleta",
        value:
          "Silicato de cálcio, material termo isolante isento de fibras de amianto",
      },
      {
        label: "Instalação",
        value:
          "Paredes ou lajes, conforme requisitos e orientações de montagem",
      },
    ],
  },

  {
    ordem: 2,
    nome: "TROX FKA-TA-BR-90",
    tipo: "Retangular · 90 minutos",
    descricao:
      "Damper corta-fogo quadrado ou retangular desenvolvido para fechamento automático de redes HVAC em setores de compartimentação contra incêndio.",
    aplicacao:
      "Instalações de ventilação e climatização que exijam resistência ao fogo de 90 minutos.",
    imagem: "/solucoes/dampers/damper_trox_retangular.png",
    imagemAlt:
      "Damper corta-fogo retangular TROX, imagem ilustrativa da linha FKA",

    technicalSpecs: [
      {
        label: "Formato",
        value: "Quadrado ou retangular",
      },
      {
        label: "Resistência ao fogo",
        value: "90 minutos",
      },
      {
        label: "Aplicação",
        value:
          "Fechamento automático em setores de proteção contra incêndio em instalações HVAC",
      },
      {
        label: "Carcaça",
        value: "Chapa de aço zincada",
      },
      {
        label: "Aleta",
        value: "Material termo isolante especial",
      },
      {
        label: "Instalação",
        value: "Adequado para instalação em paredes e lajes",
      },
    ],
  },

  {
    ordem: 3,
    nome: "TROX FKA-TI-BR-120",
    tipo: "Retangular · 120 minutos",
    descricao:
      "Versão da linha FKA indicada para projetos que exigem maior tempo de resistência ao fogo e fechamento automático da rede de ventilação.",
    aplicacao:
      "Projetos HVAC com compartimentação de maior exigência e resistência ao fogo de 120 minutos.",
    imagem: "/solucoes/dampers/damper_trox_retangular.png",
    imagemAlt:
      "Damper corta-fogo retangular TROX, imagem ilustrativa da linha FKA",

    technicalSpecs: [
      {
        label: "Formato",
        value: "Quadrado ou retangular",
      },
      {
        label: "Resistência ao fogo",
        value: "120 minutos",
      },
      {
        label: "Dimensões de referência",
        value: "Largura de 200 a 1500 mm e altura de 200 a 800 mm",
      },
      {
        label: "Carcaça",
        value:
          "Chapa de aço zincada conforme NBR 7008 ZC, revestimento B",
      },
      {
        label: "Aleta",
        value:
          "Silicato de cálcio, com 60 mm de espessura na configuração indicada em catálogo",
      },
      {
        label: "Instalação",
        value:
          "Paredes ou lajes, conforme requisitos e orientações de montagem",
      },
    ],
  },

  {
    ordem: 4,
    nome: "TROX FKR-D-BR-60",
    tipo: "Redondo · 60 minutos",
    descricao:
      "Damper corta-fogo redondo da linha FKR-D-BR, desenvolvido para interromper a propagação de fogo pela rede de ventilação.",
    aplicacao:
      "Dutos circulares em instalações HVAC com requisito de resistência ao fogo de 60 minutos.",
    imagem: "/solucoes/dampers/damper_trox_redondo.png",
    imagemAlt:
      "Dampers corta-fogo redondos TROX, imagem ilustrativa das linhas FKR e TNR",

    technicalSpecs: [
      {
        label: "Formato",
        value: "Redondo",
      },
      {
        label: "Resistência ao fogo",
        value: "60 minutos",
      },
      {
        label: "Faixa nominal indicada",
        value: "Diâmetros de 355 a 630 mm",
      },
      {
        label: "Aleta",
        value:
          "Material refratário à base de silicato de cálcio, isento de fibras de amianto",
      },
      {
        label: "Acionamento térmico",
        value: "Elemento fusível com disparo a aproximadamente 72 °C",
      },
      {
        label: "Ensaio",
        value: "Linha testada conforme ABNT NBR 6479/1992",
      },
    ],
  },

  {
    ordem: 5,
    nome: "TROX TNR-F-BR-90",
    tipo: "Redondo · 90 minutos",
    descricao:
      "Damper corta-fogo redondo para isolamento de trechos da rede de ventilação, com resistência ao fogo de 90 minutos.",
    aplicacao:
      "Dutos circulares e setores de proteção contra incêndio em sistemas de ventilação e ar-condicionado.",
    imagem: "/solucoes/dampers/damper_trox_redondo.png",
    imagemAlt:
      "Dampers corta-fogo redondos TROX, imagem ilustrativa das linhas FKR e TNR",

    technicalSpecs: [
      {
        label: "Formato",
        value: "Redondo",
      },
      {
        label: "Resistência ao fogo",
        value: "90 minutos",
      },
      {
        label: "Pressão de referência",
        value: "1500 Pa conforme catálogo da série",
      },
      {
        label: "Carcaça",
        value:
          "Chapa de aço zincada conforme NBR 7008 ZC, classe B",
      },
      {
        label: "Aleta",
        value:
          "Material termo isolante à base de silicato de cálcio",
      },
      {
        label: "Acionamento térmico",
        value: "Elemento fusível com disparo a aproximadamente 72 °C",
      },
    ],
  },

  {
    ordem: 6,
    nome: "TROX TNR-F-BR-120",
    tipo: "Redondo · 120 minutos",
    descricao:
      "Versão da série TNR-F-BR destinada a instalações com exigência de resistência ao fogo de até 120 minutos.",
    aplicacao:
      "Redes circulares em áreas compartimentadas e instalações HVAC com maior requisito de proteção contra incêndio.",
    imagem: "/solucoes/dampers/damper_trox_redondo.png",
    imagemAlt:
      "Dampers corta-fogo redondos TROX, imagem ilustrativa das linhas FKR e TNR",

    technicalSpecs: [
      {
        label: "Formato",
        value: "Redondo",
      },
      {
        label: "Resistência ao fogo",
        value: "120 minutos",
      },
      {
        label: "Pressão de referência",
        value: "1500 Pa conforme catálogo da série",
      },
      {
        label: "Carcaça",
        value:
          "Chapa de aço zincada conforme NBR 7008 ZC, classe B",
      },
      {
        label: "Aleta",
        value:
          "Material termo isolante à base de silicato de cálcio",
      },
      {
        label: "Acionamento térmico",
        value: "Elemento fusível com disparo a aproximadamente 72 °C",
      },
    ],
  },
];

const productColumns = [0, 1, 2].map((columnIndex) =>
  produtos.filter((_, index) => index % 3 === columnIndex),
);

const aplicacoes = [
  {
    titulo: "Compartimentação contra incêndio",
    texto:
      "Os dampers interrompem a passagem pela rede de dutos em pontos estratégicos, ajudando a preservar a separação entre setores da edificação.",
  },
  {
    titulo: "Fechamento automático",
    texto:
      "O fechamento pode ser comandado por elemento fusível ou por diferentes dispositivos de acionamento, conforme a configuração prevista para o projeto.",
  },
  {
    titulo: "Integração com sistemas HVAC",
    texto:
      "Existem configurações para dutos retangulares e circulares, permitindo aplicação em redes de ventilação e ar-condicionado com diferentes requisitos de proteção.",
  },
];

export default function DampersPage() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar informações e orçamento para dampers corta-fogo.",
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
                  Proteção contra incêndio
                </p>

                <h1>Dampers corta-fogo</h1>

                <p className={styles.heroText}>
                  Soluções para compartimentação de sistemas de
                  ventilação e climatização, desenvolvidas para
                  limitar a propagação do fogo e da fumaça através
                  da rede de dutos.
                </p>

                <div className={styles.heroActions}>
                  <a
                    href="#modelos"
                    className={styles.primaryButton}
                  >
                    Ver modelos
                  </a>

                  <a
                    href={`https://wa.me/5561998904494?text=${whatsappMessage}`}
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
                  src="/solucoes/dampers/damper_trox_retangular.png"
                  alt="Damper corta-fogo retangular TROX"
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
                Proteção integrada à rede de ventilação
              </h2>

              <p>
                Em uma situação de incêndio, a rede de dutos pode
                criar uma passagem entre áreas da edificação. Os
                dampers corta-fogo são utilizados para fechar esses
                pontos e apoiar a compartimentação prevista no
                projeto.
              </p>
            </div>

            <div className={styles.applicationGrid}>
              {aplicacoes.map((item) => (
                <article
                  key={item.titulo}
                  className={styles.applicationCard}
                >
                  <div
                    className={styles.cardIcon}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 3 5 6v5c0 4.5 2.8 8.3 7 10 4.2-1.7 7-5.5 7-10V6l-7-3Z" />
                      <path d="m9.5 12 1.7 1.7 3.6-3.9" />
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

              <h2>
                Alguns modelos e configurações
              </h2>

              <p>
                A RETEC trabalha com diferentes séries de dampers
                corta-fogo para atender requisitos de formato,
                instalação e resistência ao fogo. Os itens abaixo
                são exemplos de configuração e devem ser confirmados
                de acordo com cada projeto.
              </p>
            </div>

            <div className={styles.productGrid}>
              {productColumns.map(
                (column, columnIndex) => (
                  <div
                    className={styles.productColumn}
                    key={columnIndex}
                  >
                    {column.map((produto) => (
                      <article
                        key={produto.nome}
                        className={styles.productCard}
                        style={{ order: produto.ordem }}
                      >
                        <div
                          className={
                            styles.productImageWrapper
                          }
                        >
                          <Image
                            src={produto.imagem}
                            alt={produto.imagemAlt}
                            fill
                            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                            className={styles.productImage}
                          />
                        </div>

                        <div
                          className={styles.productContent}
                        >
                          <span
                            className={styles.productType}
                          >
                            {produto.tipo}
                          </span>

                          <h3>{produto.nome}</h3>

                          <p>{produto.descricao}</p>

                          <div
                            className={
                              styles.applicationText
                            }
                          >
                            <strong>
                              Indicado para:
                            </strong>
                            <span>
                              {produto.aplicacao}
                            </span>
                          </div>

                          <TechnicalSpecsAccordion
                            specs={
                              produto.technicalSpecs
                            }
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* INFORMAÇÃO TÉCNICA */}
        <section className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div>
                <p className={styles.eyebrowDark}>
                  Especificação
                </p>

                <h2>
                  A seleção correta depende do projeto
                </h2>
              </div>

              <div className={styles.infoText}>
                <p>
                  A escolha do damper deve considerar formato
                  e dimensões da rede, classe de resistência ao
                  fogo, local de instalação, sistema de
                  acionamento e requisitos definidos no projeto
                  de segurança e de climatização.
                </p>

                <p>
                  A equipe RETEC pode apoiar a identificação da
                  configuração adequada e o fornecimento dos
                  componentes compatíveis com a aplicação
                  prevista.
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
                  Precisa de dampers para sua obra?
                </h2>

                <p>
                  Envie sua lista de materiais, memorial ou
                  informações do projeto e consulte
                  disponibilidade, modelos e configurações
                  adequadas para sua aplicação.
                </p>
              </div>

              <a
                href={`https://wa.me/5561998904494?text=${whatsappMessage}`}
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