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
                  Climatização inteligente valoriza imóveis em até 30% e acelera a velocidade de venda
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
              <Image className={styles.img} src="/blog/climatizao-residencial.webp" alt="climatizacao residencial" width="800" height="462" />
              <hr style={{ height: '3px', background: '#0f2854', border: 'none' }} />
              <div className={styles.articleBodyRow}>
                {/* Coluna Esquerda: Índice Sticky */}
                <aside className={styles.tocSidebar}>
                  <div className={styles.tableOfContents}>
                    <h4>Confira neste artigo:</h4>
                    <ul>
                      <li>
                        <a href="#sub-0-o-que-mudou-na-percepcao-de-valor">O que mudou na percepção de valor</a>
                      </li>
                      <li>
                        <a href="#sub-1-o-que-entra-na-definicao-de-climatizacao-inteligente">O que entra na definição de climatização inteligente</a>
                      </li>
                      <li>
                        <a href="#sub-2-retrofit-a-porta-de-entrada-para-ativos-existentes">Retrofit: a porta de entrada para ativos existentes</a>
                      </li>
                      <li>
                        <a href="#sub-3-certificacoes-ambientais-e-ocupacao-corporativa">Certificações ambientais e ocupação corporativa</a>
                      </li>
                      <li>
                        <a href="#sub-4-o-que-considerar-em-decisoes-de-investimento">O que considerar em decisões de investimento</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div className={styles.mainText}>
                  <p className={styles.text}>
                    Imóveis que incorporam sistemas inteligentes de climatização podem alcançar valorização de até 30% e apresentam maior liquidez no momento da venda ou da locação, segundo especialistas do setor. A leitura técnica do comprador mudou. Custo total de operação ao longo do tempo, desempenho energético e qualidade do ar interno entraram na decisão de compra, especialmente em segmentos corporativos e de alto padrão residencial.
                  </p>
                  <h3 id="sub-0-o-que-mudou-na-percepcao-de-valor" className={styles.subtitle}>O que mudou na percepção de valor</h3>
                  <p className={styles.text}>
                    Patrick Galletti, engenheiro mecatrônico e CEO do Grupo RETEC, observa que o comprador está mais atento ao custo do imóvel ao longo do tempo. Um sistema de climatização eficiente reduz despesas mensais com energia, evita falhas operacionais e torna o ativo mais competitivo no mercado. Isso impacta diretamente o preço final e a velocidade com que o imóvel é negociado.
                  </p>
                  <p className={styles.text}>
                    A mudança acompanha uma transformação estrutural no mercado imobiliário. Em projetos corporativos, indicadores como consumo energético, desempenho operacional e qualidade do ar entraram nas planilhas de avaliação dos ativos. Em projetos residenciais de alto padrão, o conforto contínuo e a previsibilidade de operação passaram a integrar a decisão dos compradores.
                  </p>
                  <h3 id="sub-1-o-que-entra-na-definicao-de-climatizacao-inteligente" className={styles.subtitle}>O que entra na definição de climatização inteligente</h3>
                  <p className={styles.text}>
                    Sistemas inteligentes utilizam sensores de ocupação, automação, controle por zonas térmicas e integração com plataformas de gestão predial. A operação ajusta o funcionamento dos equipamentos conforme a demanda real do espaço. Em vez de operar o dia inteiro como se o ambiente estivesse em ocupação máxima, o sistema lê o uso real e responde com economia e estabilidade térmica.
                  </p>
                  <p className={styles.text}>
                    A integração com iluminação, segurança e sistemas de gestão predial completa o conceito. Monitoramento em tempo real, ajustes automáticos e manutenção preditiva ampliam o controle sobre o desempenho do ativo. Isso reduz falhas, prolonga a vida útil dos equipamentos e mantém o imóvel competitivo ao longo do tempo.
                  </p>
                  <h3 id="sub-2-retrofit-a-porta-de-entrada-para-ativos-existentes" className={styles.subtitle}>Retrofit: a porta de entrada para ativos existentes</h3>
                  <p className={styles.text}>
                    A modernização de edifícios antigos por meio de retrofit tem sido um vetor importante dessa transformação. Projetos que incorporam climatização inteligente em ativos já construídos permitem reposicionar imóveis defasados no mercado. Patrick Galletti explica que o retrofit recupera valor de imóveis que perderam competitividade, com investimento controlado e ganho percebido pelo comprador ou inquilino.
                  </p>
                  <p className={styles.text}>
                    Em edifícios corporativos, o retrofit de sistemas de climatização tem efeito direto sobre ocupação, vacância e atratividade para empresas com metas ESG. Em prédios residenciais, a modernização do sistema central de climatização entrega previsibilidade de operação, redução de custos e ganho de valor no metro quadrado.
                  </p>
                  <h3 id="sub-3-certificacoes-ambientais-e-ocupacao-corporativa" className={styles.subtitle}>Certificações ambientais e ocupação corporativa</h3>
                  <p className={styles.text}>
                    Certificações ambientais como LEED e AQUA consideram o desempenho da climatização entre os critérios relevantes de avaliação. Em edifícios corporativos, isso influencia a atratividade para empresas alinhadas a compromissos ambientais. Em paralelo, condições inadequadas de ventilação e temperatura têm efeito sobre desempenho cognitivo e produtividade das equipes, segundo estudos da Harvard T.H. Chan School of Public Health, o que reforça a leitura técnica do ativo.
                  </p>
                  <p className={styles.text}>
                    Imóveis com climatização inteligente reduzem o tempo de vacância, atraem inquilinos qualificados e sustentam valor ao longo do tempo. A climatização deixou de ser acessório operacional e passou a ser componente estratégico na composição do valor do imóvel.
                  </p>
                  <h3 id="sub-4-o-que-considerar-em-decisoes-de-investimento" className={styles.subtitle}>O que considerar em decisões de investimento</h3>
                  <ul>
                    <li>&nbsp;- Avaliar o estado dos sistemas de climatização em imóveis em análise, incluindo idade, eficiência e plano de manutenção.</li>
                    <li>&nbsp;- Considerar o custo do retrofit em ativos existentes como vetor de reposicionamento no mercado.</li>
                    <li>&nbsp;- Em projetos novos, especificar climatização inteligente desde a concepção, integrada à automação predial.</li>
                    <li>&nbsp;- Analisar o impacto da climatização nas certificações ambientais visadas pelo empreendimento.</li>
                    <li>&nbsp;- Verificar a conformidade com o PMOC e a previsibilidade da operação ao longo do ciclo de vida do ativo.</li>
                  </ul>
                  <p className={styles.text}>
                    A RETEC fornece soluções para climatização, ventilação, exaustão e tratamento de ar em projetos imobiliários residenciais e corporativos, incluindo obras de retrofit. Para definições técnicas alinhadas a cada tipo de ativo, fale com a equipe comercial.
                  </p>
                  <p className={`${styles.text} ${styles.articleNote}`}>
                    Participamos de uma matéria sobre esse tema no Portal Radar Imobiliário. O tema da valorização de imóveis a partir da climatização inteligente foi abordado em matéria com participação de Patrick Galletti, CEO do Grupo RETEC. Leia em: https://portalradarimobiliario.com.br/noticia/8291/climatizacao-inteligente-valoriza-imoveis-em-ate-30-e-acelera-velocidade-de-venda
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
