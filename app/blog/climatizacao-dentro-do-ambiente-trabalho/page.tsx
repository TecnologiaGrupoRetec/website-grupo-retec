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
                <Tag text="Corporativo" />
                <h1 className={styles.title}>
                  Como a Qualidade do Ar Influencia na Performance das Equipes e na Produtividade no Trabalho
                </h1>
                <div className={styles.articleDetails}>
                  <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="28" height="28" />
                  <span className={styles.authorName}>
                    Patrick Galletti
                  </span>
                  <span className={styles.date}>
                    19/07/2024
                  </span>
                </div>
              </header>
              <Image className={styles.img} src="/blog/climatizacao-trabalho2.webp" alt="Ambiente de trabalho" width="800" height="462" />
              <hr style={{ height: '3px', background: '#0f2854', border: 'none' }} />
              <div className={styles.articleBodyRow}>
                {/* Coluna Esquerda: Índice Sticky */}
                <aside className={styles.tocSidebar}>
                  <div className={styles.tableOfContents}>
                    <h4>Confira neste artigo:</h4>
                    <ul>
                      <li>
                        <a href="#sub-0-o-impacto-da-qualidade-do-ar-na-produtividade">O impacto da qualidade do ar na produtividade</a>
                      </li>
                      <li>
                        <a href="#sub-1-fatores-de-risco-para-a-qualidade-do-ar">Fatores de risco para a qualidade do ar</a>
                      </li>
                      <li>
                        <a href="#sub-2-como-melhorar-a-qualidade-do-ar-no-ambiente-de-trabalho">Como melhorar a qualidade do ar no ambiente de trabalho?</a>
                      </li>
                      <li>
                        <a href="#sub-3-a-importância-de-ambientes-climatizados-para-o-bem-estar-no-trabalho">A importância de ambientes climatizados para o bem-estar no trabalho</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div className={styles.mainText}>
                  <p className={styles.text}>
                    A produtividade no ambiente de trabalho é influenciada por diversos fatores: a gestão eficiente, o clima organizacional, a motivação dos colaboradores e, muitas vezes negligenciado, a qualidade do ar. Embora invisível, a qualidade do ar tem um impacto direto no bem-estar, na saúde e no desempenho dos colaboradores, influenciando a capacidade de concentração, criatividade e até o humor. Trabalhar em um ambiente com ar contaminado pode levar à redução do rendimento e ao aumento de problemas de saúde, como alergias, fadiga e dores de cabeça.
                  </p>
                  <p className={styles.text}>
                    Neste artigo, vamos explorar como a qualidade do ar afeta a performance das equipes e apresentar soluções para criar um ambiente de trabalho saudável, utilizando tecnologias como ar-condicionado, purificadores e sistemas de climatização eficazes.
                  </p>
                  <h3 id="sub-0-o-impacto-da-qualidade-do-ar-na-produtividade" className={styles.subtitle}>O impacto da qualidade do ar na produtividade</h3>
                  <p className={styles.text}>
                    Pesquisas apontam que a má qualidade do ar pode prejudicar diretamente a capacidade de concentração e produtividade. Isso se deve principalmente à presença de poluentes e ao acúmulo de dióxido de carbono (CO2) em ambientes fechados. Quando a concentração de CO2 é alta, por exemplo, o ar fica &quot;pesado&quot;, o que pode causar sintomas como sonolência, cansaço, dificuldade para focar em tarefas complexas e até queda no desempenho cognitivo.
                  </p>
                  <h3 id="sub-1-fatores-de-risco-para-a-qualidade-do-ar" className={styles.subtitle}>Fatores de risco para a qualidade do ar</h3>
                  <p className={styles.text}>
                    Ambientes corporativos, especialmente escritórios fechados e salas de reunião, costumam ter circulação limitada de ar fresco, o que pode contribuir para a má qualidade do ar. Entre os principais poluentes que afetam o ar em espaços de trabalho estão:
                  </p>
                  <ul>
                    <li><b>- Dióxido de carbono (CO2):</b>&nbsp;Acumula-se rapidamente em ambientes fechados, especialmente com várias pessoas no mesmo espaço, reduzindo a oxigenação cerebral.</li>
                    <li><b>- Compostos orgânicos voláteis (COVs):</b>&nbsp;São liberados por materiais de escritório, tintas, carpetes e produtos de limpeza. Eles podem causar irritação nos olhos, nariz e garganta, além de prejudicar a saúde a longo prazo.</li>
                    <li><b>- Partículas suspensas:</b>&nbsp; Incluem poeira, fumaça, poluentes externos que entram pelas janelas e partículas liberadas pelo uso de equipamentos como impressoras e copiadoras.</li>
                  </ul>
                  <h3 id="sub-2-como-melhorar-a-qualidade-do-ar-no-ambiente-de-trabalho" className={styles.subtitle}>Como melhorar a qualidade do ar no ambiente de trabalho?</h3>
                  <p className={styles.text}>
                    Melhorar a qualidade do ar no escritório é um investimento que traz benefícios para a saúde dos colaboradores e para o aumento da produtividade. A seguir, estão algumas soluções eficazes:
                  </p>
                  <p className={styles.text}>
                    <b>1. Instale Sistemas de Ar-Condicionado de Qualidade</b><br />
                    O ar-condicionado é uma das soluções mais eficazes para controlar a qualidade do ar em ambientes fechados. Além de manter a temperatura agradável, muitos sistemas modernos contam com filtros que removem impurezas do ar, como poeira, poluição e até microrganismos. Certifique-se de realizar manutenções regulares e trocar os filtros periodicamente para garantir que o ar que circula no ambiente esteja sempre limpo.
                  </p>
                  <p className={styles.text}>
                    <b>2. Utilize Purificadores de Ar</b><br />
                    Os purificadores de ar são fundamentais em ambientes onde há grande circulação de pessoas ou pouca ventilação natural. Equipados com filtros HEPA, eles removem partículas ultrafinas, como poluentes e alérgenos, melhorando significativamente a qualidade do ar. Em escritórios onde há uso intensivo de impressoras, copiadoras e outros equipamentos, o uso de purificadores pode minimizar os danos causados pelos poluentes liberados por esses dispositivos.
                  </p>
                  <p className={styles.text}>
                    <b>3. Invista em Sistemas de Exaustão</b><br />
                    Os sistemas de exaustão são ideais para ambientes de trabalho onde há pouca ventilação natural e alta concentração de poluentes no ar. Eles ajudam a remover ar quente, dióxido de carbono e outras partículas contaminantes, promovendo a troca por ar renovado de forma mais eficiente. Isso é especialmente útil em áreas como cozinhas industriais, laboratórios, ou até escritórios que utilizam muitos equipamentos eletrônicos.
                  </p>
                  <p className={styles.text}>
                    <b>4. Monitore a Qualidade do Ar Interno</b><br />
                    Uma maneira eficaz de garantir a boa qualidade do ar no ambiente de trabalho é utilizar sensores e aparelhos de monitoramento de CO2 e poluentes. Esses dispositivos permitem que você acompanhe a concentração de gases nocivos no ambiente em tempo real, tomando medidas corretivas quando necessário.
                  </p>
                  <p className={styles.text}>
                    <b>5. Higienize Regularmente o Ambiente de Trabalho</b><br />
                    Manter o ambiente limpo é essencial para evitar o acúmulo de poeira, ácaros e outros que afetam a qualidade do ar. Além disso, é importante utilizar produtos de limpeza que não contenham compostos orgânicos voláteis (COVs), que podem prejudicar a saúde respiratória.
                  </p>
                  <h3 id="sub-3-a-importância-de-ambientes-climatizados-para-o-bem-estar-no-trabalho" className={styles.subtitle}>A importância de ambientes climatizados para o bem-estar no trabalho</h3>
                  <p className={styles.text}>
                    Ambientes de trabalho climatizados não apenas proporcionam conforto térmico, mas também contribuem para o aumento da produtividade ao garantir a circulação de ar limpo e saudável. Ambientes com controle de temperatura e qualidade do ar estão diretamente ligados ao bem-estar dos colaboradores, resultando em maior satisfação e desempenho.
                  </p>
                  <p className={styles.text}>
                    Criar um ambiente climatizado e limpo é uma estratégia inteligente para aumentar o rendimento e promover a saúde a longo prazo. Isso resulta em equipes mais engajadas, produtivas e felizes, impactando positivamente os resultados da empresa.
                  </p>
                  <p className={styles.text}>
                    Além disso, a boa qualidade do ar ajuda a reduzir o estresse e a melhorar a saúde geral dos colaboradores, reduzindo o número de ausências por problemas respiratórios ou outras complicações relacionadas à poluição do ar.
                  </p>
                  <p className={styles.text}>
                    Aqui na <b>RETEC</b> você encontra <b>TUDO</b> para a climatização da sua empresa. Entre em contato que nossa equipe encontrará a melhor solução para você.
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
