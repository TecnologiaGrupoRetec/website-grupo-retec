import styles from "../blog.module.scss";
import BlogBanner from "../../components/blogBanner";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from '../../components/footer';
import Cta from "../../components/cta";
import Tag from "../../components/tag";
import Link from "next/link";
import React from "react";
import Pannel from "@/app/components/pannel";

export default function Article() {

  return (
    <React.Fragment>
      <Pannel />
      <div className={styles.page}>
        <Navbar activeTab="blog" />
        <main className={styles.articleContainer}>
          <section className={styles.article}>
            <Link className={styles.back} href="/blog">
              <Image src="/blog/arrow.png" alt="Voltar" width="60" height="60" />
            </Link>
            <article className={styles.content}>
              <header className={styles.header}>
                <Tag text="Saúde" />
                <h1 className={styles.title}>
                  Fumaça das queimadas longe dos focos: como conter o impacto em ambientes internos.
                </h1>
                <div className={styles.articleDetails}>
                  <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="28" height="28" />
                  <span className={styles.authorName}>
                    Patrick Galletti
                  </span>
                  <span className={styles.date}>
                    12/05/2026
                  </span>
                </div>
              </header>
              <Image className={styles.img} src="/blog/escritorio.webp" alt="Escritório" width="800" height="462" />
              <hr style={{ height: '3px', background: '#0f2854', border: 'none' }} />
              <div className={styles.articleBodyRow}>
                {/* Coluna Esquerda: Índice Sticky */}
                <aside className={styles.tocSidebar}>
                  <div className={styles.tableOfContents}>
                    <h4>Confira neste artigo:</h4>
                    <ul>
                      <li>
                        <a href="#sub-0-como-a-fumaca-se-desloca">Como a fumaça se desloca</a>
                      </li>
                      <li>
                        <a href="#sub-1-por-que-ambientes-internos-nao-sao-automaticamente-seguros">Por que ambientes internos não são automaticamente seguros</a>
                      </li>
                      <li>
                        <a href="#sub-2-o-que-considerar-em-ambientes-residenciais">O que considerar em ambientes residenciais</a>
                      </li>
                      <li>
                        <a href="#sub-3-o-que-considerar-em-obras-corporativas-e-ambientes-de-alta-ocupacao">O que considerar em obras corporativas e ambientes de alta ocupação</a>
                      </li>
                      <li>
                        <a href="#sub-4-verificacoes-praticas-para-o-periodo-de-queimadas">Verificações práticas para o período de queimadas</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div className={styles.mainText}>
                  <p className={styles.text}>
                    Quem mora em cidades a centenas ou milhares de quilômetros das frentes de incêndio convive com a mesma fumaça que cobre Cerrado, Amazônia e Pantanal nos meses mais secos. Em 2024, segundo o INPE, o Brasil registrou mais de 80 mil focos de queimadas apenas em setembro, com nuvens de fuligem documentadas atravessando o Sudeste e chegando a episódios como a chuva escura registrada em Porto Alegre. A poluição atmosférica gerada pelo fogo não fica restrita à origem do incêndio.
                  </p>
                  <h3 id="sub-0-como-a-fumaca-se-desloca" className={styles.subtitle}>Como a fumaça se desloca</h3>
                  <p className={styles.text}>
                    As partículas geradas pela combustão de vegetação seca, especialmente o material particulado fino conhecido como MP 2.5, são leves o suficiente para permanecer em suspensão por longos períodos e percorrer trajetos atmosféricos extensos. Estudos do MapBiomas e do IPAM mostraram que, em 2024, a fumaça concentrada na Amazônia chegou ao Centro-Oeste, ao Sudeste e ao Sul, comprometendo a qualidade do ar em capitais distantes dos focos. Em períodos de seca prolongada, o solo seco e a vegetação ressecada potencializam a propagação dos incêndios e a quantidade de poluentes liberada.
                  </p>
                  <p className={styles.text}>
                    Para quem está fora da zona de fogo, o problema chega pela atmosfera. As partículas penetram em ambientes internos por aberturas, fendas, sistemas de ventilação mal vedados e tomadas de ar exterior dos equipamentos de climatização.
                  </p>
                  <h3 id="sub-1-por-que-ambientes-internos-nao-sao-automaticamente-seguros" className={styles.subtitle}>Por que ambientes internos não são automaticamente seguros</h3>
                  <p className={styles.text}>
                    Existe uma ideia frequente de que fechar portas e janelas resolve. A realidade é mais complexa. Em edificações com infiltração natural elevada, vedação deficiente ou sistemas de ar-condicionado que captam ar externo sem tratamento, o ambiente interno acompanha a piora do ar externo com uma defasagem pequena. Em ambientes corporativos e residenciais com baixa renovação, o problema muda de natureza: o CO₂ se acumula, a sensação de cansaço aumenta e o ar passa a ser desconfortável.
                  </p>
                  <p className={styles.text}>
                    O equilíbrio entre vedação e renovação é o ponto técnico central. Fechar tudo reduz a entrada de fumaça, mas piora o ar interno por outras razões. Renovar sem filtragem traz o problema externo para dentro. A saída está em renovar com tratamento.
                  </p>
                  <h3 id="sub-2-o-que-considerar-em-ambientes-residenciais" className={styles.subtitle}>O que considerar em ambientes residenciais</h3>
                  <p className={styles.text}>
                    Em residências, equipamentos como purificadores de ar com filtragem HEPA reduzem a concentração de material particulado no ambiente. A escolha do modelo precisa observar a vazão de ar tratado em relação ao volume do cômodo. Equipamentos pequenos instalados em salas amplas têm efeito limitado. Splits com filtragem complementar ajudam, mas não substituem um purificador adequado quando o objetivo é controlar particulado fino.
                  </p>
                  <p className={styles.text}>
                    Patrick Galletti, engenheiro de climatização e CEO do Grupo RETEC, lembra que, em períodos de fumaça intensa, a recomendação técnica combina três frentes: reduzir a exposição ao ar externo nos horários mais críticos, manter a hidratação corporal e usar equipamentos de purificação ou climatização com filtragem adequada nos ambientes onde se permanece por mais tempo.
                  </p>
                  <h3 id="sub-3-o-que-considerar-em-obras-corporativas-e-ambientes-de-alta-ocupacao" className={styles.subtitle}>O que considerar em obras corporativas e ambientes de alta ocupação</h3>
                  <p className={styles.text}>
                    Em edifícios comerciais, hospitais, escolas e centros logísticos, a resposta está no projeto de climatização e ventilação. Sistemas que combinam unidades de tratamento de ar com filtragem F7, F9 ou HEPA, dampers motorizados nas tomadas de ar exterior e sensores de qualidade do ar permitem regular o quanto de ar externo entra durante eventos atmosféricos críticos. Em hospitais, essa cadeia técnica já é parte da operação cotidiana. Em escritórios e ambientes corporativos, ela ganhou relevância nos últimos anos.
                  </p>
                  <p className={styles.text}>
                    A escolha correta dos componentes depende da carga térmica, da ocupação, do uso do espaço e das exigências normativas. Filtros de alta eficiência em sistemas mal dimensionados perdem desempenho. Renovação alta em ambientes sem filtragem adequada apenas multiplica o problema.
                  </p>
                  <h3 id="sub-4-verificacoes-praticas-para-o-periodo-de-queimadas" className={styles.subtitle}>Verificações práticas para o período de queimadas</h3>
                  <ul>
                    <li>&nbsp;- Conferir o estado e a classe dos filtros do sistema HVAC.</li>
                    <li>&nbsp;- Verificar a vedação de janelas, portas e dutos em ambientes sensíveis.</li>
                    <li>&nbsp;- Avaliar o posicionamento das tomadas de ar exterior em relação a fontes de poluição.</li>
                    <li>&nbsp;- Em locais com alta ocupação, monitorar CO₂ e MP 2.5 com sensores.</li>
                    <li>&nbsp;- Verificar a conformidade com o PMOC e a frequência da manutenção preventiva.</li>
                  </ul>
                  <p className={styles.text}>
                    A RETEC fornece soluções para climatização, ventilação, exaustão e tratamento de ar em obras de médio e grande porte. Para definições técnicas alinhadas à aplicação, fale com a equipe comercial.
                  </p>
                  <p className={`${styles.text} ${styles.articleNote}`}>
                    Participamos de uma matéria sobre esse tema no Casa e Jardim (Editora Globo). O tema dos riscos das queimadas para quem está distante dos focos foi tratado em matéria com participação de Patrick Galletti, CEO do Grupo RETEC. Leia em: https://revistacasaejardim.globo.com/comportamento/bem-estar-e-saude/noticia/2024/09/queimadas-os-perigos-mesmo-para-quem-esta-longe-de-focos-e-como-se-proteger.ghtml
                  </p>
                </div>

                {/* Coluna Direita: Sidebar Banner */}
                <aside className={styles.sidebar}>
                  <BlogBanner />
                </aside>
              </div>
            </article>
            <Link className={styles.up} href="#">
              <Image src="/blog/arrow.png" alt="Voltar" width="60" height="60" />
            </Link>
          </section>
        </main>
        <Cta />
        <Footer />
      </div>
    </React.Fragment>
  );
}
