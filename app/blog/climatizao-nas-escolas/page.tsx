import styles from "../blog.module.scss";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from '../../components/footer';
import Cta from "../../components/cta";
import Tag from "../../components/tag";
import Link from "next/link";
import Pannel from "@/app/components/pannel";
import React from "react";

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
                  Climatização adequada nas escolas reduz doenças respiratórias e melhora o desempenho dos alunos
                </h1>
                <div className={styles.articleDetails}>
                  <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="28" height="28" />
                  <span className={styles.authorName}>
                    Patrick Galletti
                  </span>
                  <span className={styles.date}>
                    20/08/2024
                  </span>
                </div>
              </header>
              <Image className={styles.img} src="/blog/climatizacao-escola2.webp" alt="Climatização em escola" width="800" height="462" />
              <p className={styles.text}>
                A climatização correta em escolas tem impacto direto no bem-estar e na concentração das crianças. O que muitas instituições de ensino não se dão conta é que pequenos ajustes no controle de temperatura e qualidade do ar no ambiente previnem doenças e melhoram a produtividade dos alunos.
              </p>
              <p className={styles.text}>
                A ligação entre a qualidade do ar e o aprendizado vem sendo embasada por dados de estudos da Harvard T.H. Chan School of Public Health. A pesquisa mostrou que ambientes com boa ventilação e controle de temperatura reduzem a incidência de doenças respiratórias e melhoram a concentração. Estudos também mostram que a exposição ao calor sem ar-condicionado prejudica o aprendizado, com quedas no desempenho cognitivo e na atenção. Cada aumento de meio grau celsius na temperatura pode reduzir o aprendizado em até 1%.
              </p>
              <p className={styles.text}>
                <b>Patrick Galletti</b>, engenheiro de climatização e CEO do <b>Grupo RETEC</b>, reforça a necessidade de investimentos em sistemas de climatização para garantir um ambiente escolar saudável e produtivo. “A climatização é muito mais do que conforto térmico. A qualidade do ar que as crianças respiram no ambiente escolar pode evitar uma série de doenças respiratórias, como bronquites e resfriados frequentes, que, por sua vez, afetam o desempenho escolar”, afirma o especialista.
              </p>
              <h3 className={styles.subtitle}>
                Impacto direto no aprendizado
              </h3>
              <p className={styles.text}>
                O acúmulo de dióxido de carbono (CO2) em salas de aula com ventilação inadequada pode levar à sonolência e à fadiga, prejudicando o aprendizado e a concentração dos alunos. O ar-condicionado, quando aliado a sistemas de ventilação eficientes, mantém a temperatura agradável e renova o ar, diminuindo a concentração de CO2 e melhorando a qualidade do ambiente escolar. Com as mudanças climáticas aumentando a frequência de ondas de calor, é cada vez mais importante que as escolas adotem essas soluções para diminuir os efeitos de temperaturas extremas e garantir um ambiente saudável para os estudantes.
              </p>
              <p className={styles.text}>
                Galletti lembra que um sistema de climatização adequado deve incluir trocadores de ar que garantam a renovação constante do ar ambiente. “Isso mantém a temperatura confortável e reduz os níveis de dióxido de carbono acumulado. Quando bem projetado, o sistema garante que o ar externo seja filtrado e tratado antes de ser introduzido, ajudando a prevenir a sonolência e a fadiga associadas à alta concentração de CO2”, aponta o especialista.
              </p>
              <Image className={styles.img} src="/blog/meio1.jpg" alt="Alunos" width="800" height="462" />
              <h3 className={styles.subtitle}>
                O que as escolas podem fazer
              </h3>
              <p className={styles.text}>
                Para garantir um ambiente saudável, é essencial que as escolas sigam algumas práticas. A manutenção regular dos equipamentos de climatização, como ar-condicionado e ventiladores, é primordial para evitar o acúmulo de poeira e ácaros. Segundo Patrick Galletti, a frequência ideal de manutenção deve ser trimestral.
              </p>
              <p className={styles.text}>
                Além disso, em vez de depender exclusivamente de ventilação natural, que pode trazer impurezas e não garantir uma troca constante de ar, as escolas devem focar em sistemas de climatização completos. “Um sistema de climatização eficiente inclui ar-condicionado, exaustão e ventilação, criando a renovação de ar necessária, além da umidificação e filtragem, garantindo a temperatura e a umidade ideais para a saúde e bem-estar dos alunos”, explica Galletti.
              </p>
              <p className={styles.text}>
                O engenheiro ainda ressalta a importância de considerar a climatização no planejamento de novos edifícios escolares. “O ar condicionado, aliado à renovação de ar filtrado e controlado, é a única maneira de garantir a qualidade do ar e evitar problemas relacionados a poluentes e variações climáticas”, conclui.
              </p>
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
