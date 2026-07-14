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
                  Temperatura, umidade e qualidade do ar: o que define um quarto bem climatizado para dormir
                </h1>
                <div className={styles.articleDetails}>
                  <Image className={styles.authorImg} src="/blog/sistema-climatizacao-daikin.webp" alt="Sistema Climatização Daikin" width="28" height="28" />
                  <span className={styles.authorName}>
                    Patrick Galletti
                  </span>
                  <span className={styles.date}>
                    12/05/2026
                  </span>
                </div>
              </header>
              <Image className={styles.img} src="/blog/thumb3.jpg" alt="Bombeiro em Queimada" width="800" height="462" />
              <hr style={{ height: '3px', background: '#0f2854', border: 'none' }} />
              <div className={styles.articleBodyRow}>
                {/* Coluna Esquerda: Índice Sticky */}
                <aside className={styles.tocSidebar}>
                  <div className={styles.tableOfContents}>
                    <h4>Confira neste artigo:</h4>
                    <ul>
                      <li>
                        <a href="#sub-0-temperatura-e-ciclos-do-sono">Temperatura e ciclos do sono</a>
                      </li>
                      <li>
                        <a href="#sub-1-umidade-relativa-e-conforto-respiratorio">Umidade relativa e conforto respiratório</a>
                      </li>
                      <li>
                        <a href="#sub-2-qualidade-do-ar-no-quarto">Qualidade do ar no quarto</a>
                      </li>
                      <li>
                        <a href="#sub-3-manutencao-e-operacao">Manutenção e operação</a>
                      </li>
                      <li>
                        <a href="#sub-4-pontos-praticos-para-o-quarto">Pontos práticos para o quarto</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div className={styles.mainText}>
                  <p className={styles.text}>
                    O sono reparador depende do ambiente em que o corpo descansa. Um estudo publicado no Journal of Physiological Anthropology aponta a faixa entre 16 °C e 20 °C como referência para temperatura ambiente durante o sono, com impacto direto nas fases mais profundas do ciclo. Fora desse intervalo, o organismo trabalha para compensar a variação térmica, o que reduz a eficiência do descanso. Quando o assunto é climatização do quarto, a temperatura é o ponto de partida, mas não o único.
                  </p>
                  <h3 id="sub-0-temperatura-e-ciclos-do-sono" className={styles.subtitle}>Temperatura e ciclos do sono</h3>
                  <p className={styles.text}>
                    A temperatura corporal cai naturalmente nas horas que antecedem o sono. Esse mecanismo fisiológico sinaliza ao organismo que é hora de descansar. Em ambientes muito quentes, o corpo precisa transpirar para regular a temperatura interna, o que provoca despertares frequentes. Em ambientes excessivamente frios, há gasto energético adicional para manter o aquecimento corporal, o que reduz o relaxamento.
                  </p>
                  <p className={styles.text}>
                    Em residências, o ajuste do ar-condicionado para a faixa adequada precisa considerar o tamanho do quarto, a ocupação, a presença de eletrônicos em uso noturno e o isolamento térmico das paredes e janelas. Aparelhos com modo silencioso e função sleep ajudam a manter o ambiente em temperatura estável sem desconforto sonoro.
                  </p>
                  <h3 id="sub-1-umidade-relativa-e-conforto-respiratorio" className={styles.subtitle}>Umidade relativa e conforto respiratório</h3>
                  <p className={styles.text}>
                    Em regiões como o Centro-Oeste, a umidade relativa cai a níveis muito baixos durante a estação seca. Em quartos climatizados, o ar-condicionado tende a reduzir ainda mais essa umidade, intensificando o ressecamento das vias aéreas. Patrick Galletti, engenheiro de climatização e CEO do Grupo RETEC, lembra que a climatização do ambiente exige atenção combinada a temperatura, umidade e renovação do ar.
                  </p>
                  <p className={styles.text}>
                    A faixa de umidade relativa recomendada pela OMS para ambientes internos fica entre 40% e 70%. Em condições muito secas, o uso de umidificadores em quartos ou de sistemas de climatização com controle de umidade torna o ambiente compatível com um sono confortável e protege as vias respiratórias durante a noite.
                  </p>
                  <h3 id="sub-2-qualidade-do-ar-no-quarto" className={styles.subtitle}>Qualidade do ar no quarto</h3>
                  <p className={styles.text}>
                    A renovação do ar e a filtragem têm efeito direto sobre a sensação ao acordar. Em quartos com baixa renovação, o nível de dióxido de carbono se eleva ao longo da noite, contribuindo para a sensação de cansaço pela manhã mesmo após oito horas de sono. Em ambientes urbanos, particulado fino e poluentes externos também afetam o ar interno quando a vedação é deficiente ou quando o sistema de climatização não inclui filtragem adequada.
                  </p>
                  <p className={styles.text}>
                    Modelos mais recentes de ar-condicionado incorporam filtros de maior eficiência e, em alguns casos, ionizadores. Em ambientes residenciais com pessoas sensíveis ou pacientes com condições respiratórias crônicas, a combinação de climatização adequada com purificação complementar oferece controle mais consistente sobre a qualidade do ar.
                  </p>
                  <h3 id="sub-3-manutencao-e-operacao" className={styles.subtitle}>Manutenção e operação</h3>
                  <p className={styles.text}>
                    Equipamentos sem manutenção preventiva têm efeito oposto ao esperado. Filtros saturados, serpentinas com acúmulo de sujeira e condensados sem escoamento adequado favorecem a proliferação de fungos e bactérias. A higienização periódica e a troca de filtros conforme a recomendação do fabricante são parte do desempenho do equipamento, não um detalhe complementar.
                  </p>
                  <p className={styles.text}>
                    Em ambientes corporativos e hotéis, a definição correta do sistema considera ocupação variável, períodos de uso e exigências normativas para qualidade do ar interno. Em residências, o cuidado básico com manutenção e o ajuste correto da operação já entregam ganho significativo.
                  </p>
                  <h3 id="sub-4-pontos-praticos-para-o-quarto" className={styles.subtitle}>Pontos práticos para o quarto</h3>
                  <ul>
                    <li>&nbsp;- Ajustar a temperatura para a faixa de conforto compatível com o uso noturno, considerando o isolamento do ambiente.</li>
                    <li>&nbsp;- Verificar a umidade relativa em estações secas e avaliar uso de umidificador quando necessário.</li>
                    <li>&nbsp;- Manter a manutenção preventiva do ar-condicionado em dia, com limpeza periódica dos filtros.</li>
                    <li>&nbsp;- Considerar equipamentos com filtragem adequada quando houver pessoas sensíveis a alérgenos.</li>
                    <li>&nbsp;- Reduzir fontes internas de poluentes no quarto, como produtos químicos voláteis e umidade excessiva em banheiros próximos.</li>
                  </ul>
                  <p className={styles.text}>
                    A RETEC fornece soluções para climatização residencial e comercial, com atendimento especializado para projetos que exigem controle preciso de temperatura, umidade e qualidade do ar. Fale com a equipe comercial para definições técnicas adequadas a cada ambiente.
                  </p>
                  <p className={`${styles.text} ${styles.articleNote}`}>
                    Participamos de uma matéria sobre esse tema no Mundo do Ar Condicionado e da Refrigeração. O tema da relação entre climatização e qualidade do sono foi abordado em matéria com participação de Patrick Galletti, CEO do Grupo RETEC. Leia em: https://mundodoaredarefrigeracao.com.br/produto/temperatura-e-qualidade-do-ar-sao-determinantes-para-noites-mais-tranquilas-e-reparadoras/
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
