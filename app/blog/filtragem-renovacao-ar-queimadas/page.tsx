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
                  Filtragem e renovação de ar em períodos de queimadas: o que muda nos ambientes internos.
                </h1>
                <div className={styles.articleDetails}>
                  <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="28" height="28" />
                  <span className={styles.authorName}>
                    Patrick Galletti
                  </span>
                  <span className={styles.date}>
                    11/05/2026
                  </span>
                </div>
              </header>
              <Image className={styles.img} src="/blog/filtro-arcondicionado.webp" alt="Filtro de ar-condicionado" width="800" height="462" />
              <hr style={{ height: '3px', background: '#0f2854', border: 'none' }} />
              <div className={styles.articleBodyRow}>
                {/* Coluna Esquerda: Índice Sticky */}
                <aside className={styles.tocSidebar}>
                  <div className={styles.tableOfContents}>
                    <h4>Confira neste artigo:</h4>
                    <ul>
                      <li>
                        <a href="#sub-0-por-que-o-ar-dentro-dos-predios-tambem-piora">Por que o ar dentro dos prédios também piora</a>
                      </li>
                      <li>
                        <a href="#sub-1-o-papel-da-filtragem-em-sistemas-de-climatizacao">O papel da filtragem em sistemas de climatização</a>
                      </li>
                      <li>
                        <a href="#sub-2-renovacao-de-ar-e-o-equilibrio-com-a-filtragem">Renovação de ar e o equilíbrio com a filtragem</a>
                      </li>
                      <li>
                        <a href="#sub-3-quando-o-purificador-resolve-e-quando-nao-resolve">Quando o purificador resolve e quando não resolve</a>
                      </li>
                      <li>
                        <a href="#sub-4-o-que-considerar-antes-da-proxima-temporada">O que considerar antes da próxima temporada</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div className={styles.mainText}>
                  <p className={styles.text}>
                    Durante o pico das queimadas no Brasil, a concentração de material particulado fino na atmosfera atinge níveis que comprometem ambientes internos mesmo em cidades distantes dos focos de incêndio. Em 2024, a Organização Mundial da Saúde já apontava que mais de 99% da população mundial respira ar fora dos limites recomendados de poluição, com 7 milhões de mortes prematuras por ano associadas a esse fator. Em temporadas como a do segundo semestre, quando o Centro-Oeste convive com baixa umidade e elevada incidência de queimadas, a leitura sobre o ar interno deixa de ser questão de conforto e entra no campo da operação técnica.
                  </p>
                  <h3 id="sub-0-por-que-o-ar-dentro-dos-predios-tambem-piora" className={styles.subtitle}>Por que o ar dentro dos prédios também piora</h3>
                  <p className={styles.text}>
                    Quando a fumaça externa cresce, o ar que entra pelas infiltrações naturais e pelas tomadas de ar exterior dos sistemas de climatização traz consigo o mesmo material particulado que está suspenso lá fora. As partículas com diâmetro inferior a 2,5 micrômetros, classificadas como MP 2.5, atravessam o trato respiratório, alcançam os alvéolos pulmonares e entram na corrente sanguínea.
                  </p>
                  <p className={styles.text}>
                    Em edificações com sistemas HVAC mal projetados ou com manutenção atrasada, a situação se agrava. Filtros saturados perdem eficiência, dutos com vedação deficiente permitem entrada de ar não tratado e tomadas de ar exterior posicionadas próximas a fontes de poluição puxam justamente o que se quer evitar.
                  </p>
                  <h3 id="sub-1-o-papel-da-filtragem-em-sistemas-de-climatizacao" className={styles.subtitle}>O papel da filtragem em sistemas de climatização</h3>
                  <p className={styles.text}>
                    A filtragem é a primeira barreira contra material particulado. Em sistemas comerciais e residenciais de médio porte, o uso de filtros classe G4 isolados costuma ser insuficiente para reter partículas finas. A combinação de pré-filtros com filtros F7, F9 ou HEPA, especificada conforme a aplicação, eleva a retenção de partículas para faixas adequadas a ambientes que exigem qualidade do ar interno controlada. Hospitais, laboratórios, salas-limpas e ambientes corporativos de alta ocupação são exemplos em que essa cadeia de filtragem deixa de ser opcional.
                  </p>
                  <p className={styles.text}>
                    Patrick Galletti, engenheiro mecatrônico e CEO do Grupo RETEC, costuma destacar que a filtragem precisa ser tratada como parte do sistema, não como acessório. A escolha do filtro está diretamente ligada à pressão estática do equipamento, à velocidade do ar no duto e ao plano de manutenção. Um filtro de alta eficiência instalado em um sistema que não foi dimensionado para sustentá-lo gera queda de vazão, sobrecarga no motor e perda de desempenho.
                  </p>
                  <h3 id="sub-2-renovacao-de-ar-e-o-equilibrio-com-a-filtragem" className={styles.subtitle}>Renovação de ar e o equilíbrio com a filtragem</h3>
                  <p className={styles.text}>
                    Em períodos de queimadas, a renovação de ar passa a ser uma decisão de engenharia, não uma rotina automática. Tomar ar exterior sem tratamento durante o pico de fumaça apenas transporta o problema para dentro do ambiente. A saída técnica está em sistemas de tratamento de ar que combinam renovação controlada com filtragem fina, mantendo o nível de dióxido de carbono interno em faixas seguras sem comprometer a qualidade do ar.
                  </p>
                  <p className={styles.text}>
                    Em obras de médio e grande porte, a especificação correta de unidades de tratamento de ar, dampers motorizados, sensores de qualidade do ar e filtros adequados define o desempenho real do sistema durante eventos atmosféricos críticos. O dimensionamento precisa considerar não apenas a operação em dias comuns, mas a capacidade do sistema de manter o ambiente interno protegido quando o ar externo se deteriora.
                  </p>
                  <p className={styles.text}>
                    Alguns grupos são mais vulneráveis aos efeitos da poluição causada pelas queimadas, como:
                  </p>
                  <h3 id="sub-3-quando-o-purificador-resolve-e-quando-nao-resolve" className={styles.subtitle}>Quando o purificador resolve e quando não resolve</h3>
                  <p className={styles.text}>
                    Purificadores de ar autônomos têm aplicação clara em ambientes residenciais e pequenos espaços comerciais. Modelos com filtragem HEPA reduzem a concentração de partículas finas no volume de ar tratado, contribuindo para a redução de sintomas respiratórios em pessoas mais sensíveis. A limitação aparece quando o equipamento é instalado em ambientes muito superiores à sua vazão de tratamento, em locais com infiltração descontrolada, ou quando substitui a manutenção do sistema central de climatização.
                  </p>
                  <p className={styles.text}>
                    Em construções comerciais, corporativas e hospitalares, a abordagem correta é técnica e centralizada. O purificador pode complementar áreas críticas, mas a base do controle está no sistema HVAC, na filtragem especificada, na renovação dimensionada e na manutenção periódica conforme o PMOC, exigido pela legislação.
                  </p>
                  <h3 id="sub-4-o-que-considerar-antes-da-proxima-temporada" className={styles.subtitle}>O que considerar antes da próxima temporada</h3>
                  <p className={styles.text}>
                    Algumas verificações práticas reduzem o impacto das queimadas nos ambientes internos:
                  </p>
                  <ul>
                    <li>&nbsp;- Avaliar o estado dos filtros instalados e a classe especificada para cada equipamento.</li>
                    <li>&nbsp;- Verificar a vedação dos dutos e o posicionamento das tomadas de ar exterior.</li>
                    <li>&nbsp;- Conferir o cumprimento do Plano de Manutenção, Operação e Controle (PMOC) e a frequência das limpezas.</li>
                    <li>&nbsp;- Em ambientes corporativos e hospitalares, revisar a capacidade do sistema de tratamento de ar para sustentar filtragem fina sem perda de vazão.</li>
                    <li>&nbsp;- Considerar sensores de qualidade do ar para acompanhar concentração de MP 2.5 e CO₂ em tempo real. </li>
                  </ul>
                  <p className={styles.text}>
                    A RETEC fornece soluções para sistemas de climatização, ventilação e tratamento de ar em obras de médio e grande porte, incluindo filtragem, renovação e isolamento térmico. Para decisões técnicas alinhadas a cada aplicação, fale com a nossa equipe.
                  </p>
                  <p className={`${styles.text} ${styles.articleNote}`}>
                    Participamos de uma matéria sobre esse tema no Terra (Vida e Estilo / Saúde). O tema do papel dos purificadores em períodos de queimadas foi abordado em entrevista com Patrick Galletti, CEO do Grupo RETEC. Leia em: https://www.terra.com.br/vida-e-estilo/saude/com-queimadas-purificadores-de-ar-previnem-doencas-respiratorias,abf9f4587c3c58a3d846e475d538d1364tfnxhgf.html
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
