import styles from "../blog.module.scss";
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
                  Climatização e produtividade: o que muda quando o ambiente de trabalho funciona bem
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
              <Image className={styles.img} src="/blog/trabalho-produtividade2.webp" alt="Ambiente de Trabalho Climatizado" width="800" height="462" />
              <p className={styles.text}>
                A climatização do ambiente de trabalho deixou de ser tema apenas de conforto. Em situações de calor ou frio extremo, a produtividade pode cair entre 10% e 15%, segundo dados citados pelo National Center for Biotechnology Information. Em regiões como o Centro-Oeste, onde o inverno combina baixa umidade com temperaturas oscilantes, o desempenho das equipes responde rapidamente ao que está acontecendo dentro do espaço corporativo. A relação entre clima interno e resultado de trabalho é mais direta do que muitos projetos consideram.
              </p>
              <h3 className={styles.subtitle}>
                O que afeta o desempenho cognitivo
              </h3>
              <p className={styles.text}>
                Três fatores estruturam o conforto térmico em ambientes ocupados: temperatura, umidade relativa do ar e renovação. Em escritórios com baixa renovação, o dióxido de carbono se acumula ao longo do dia, com efeitos diretos sobre concentração, raciocínio e cansaço percebido. Estudos da Harvard T.H. Chan School of Public Health já demonstraram que ambientes com ventilação adequada apresentam melhor desempenho cognitivo das equipes.
              </p>
              <p className={styles.text}>
                Em paralelo, o ar muito seco compromete as vias respiratórias e gera desconforto contínuo. A OMS recomenda umidade relativa entre 40% e 60% para ambientes internos. Em estações secas, sem controle ativo, esse índice cai abaixo de 30% em escritórios. O resultado prático aparece em queixas respiratórias, dores de cabeça e queda no engajamento das equipes.
              </p>
              <h3 className={styles.subtitle}>
                O peso da climatização no consumo elétrico
              </h3>
              <p className={styles.text}>
                Dados da Empresa de Pesquisa Energética indicam que a climatização pode representar cerca de 47% do consumo elétrico em edifícios comerciais brasileiros. Em momentos de pico, esse percentual sobe. Sistemas mal dimensionados ou sem manutenção operam fora da faixa de eficiência, com custo elevado e desempenho irregular.
              </p>
              <p className={styles.text}>
                Patrick Galletti, engenheiro mecatrônico e CEO do Grupo RETEC, observa que filtros sujos, fluido refrigerante em níveis inadequados e sensores descalibrados fazem o sistema trabalhar em esforço desnecessário. Isso eleva o consumo de energia e compromete a qualidade do ar entregue ao ambiente. Manutenção preventiva, nesse contexto, deixa de ser despesa e passa a ser parte da operação do negócio.
              </p>
              <h3 className={styles.subtitle}>
                Tecnologias acessíveis para ganho imediato
              </h3>
              <p className={styles.text}>
                Sensores de presença, termostatos programáveis e sistemas inverter ajustam automaticamente a potência dos equipamentos conforme a ocupação real do ambiente. Estudos publicados na revista Millenium indicam que esses ajustes podem reduzir em até 30% o consumo de energia, sem perda de conforto. Em edifícios corporativos, a operação por zonas térmicas evita climatizar áreas vazias com a mesma intensidade dos espaços ocupados.
              </p>
              <p className={styles.text}>
                Em obras de médio e grande porte, sistemas como VRV (Volume de Refrigerante Variável) e centrais de água gelada com automação inteligente permitem controle preciso e operação eficiente. Em escritórios menores, a combinação de equipamentos inverter com sensores e programação já entrega ganho significativo.
              </p>
              <h3 className={styles.subtitle}>
                Renovação de ar e qualidade percebida
              </h3>
              <p className={styles.text}>
                A renovação adequada do ar não aparece nos indicadores tradicionais de conforto térmico, mas tem efeito direto sobre absenteísmo, queixas respiratórias e fadiga. Em ambientes corporativos com alta ocupação, unidades de tratamento de ar com filtragem fina mantêm a concentração de CO₂ dentro de faixa adequada e protegem contra particulado externo durante eventos como queimadas e poluição urbana intensa.
              </p>
              <p className={styles.text}>
                Em hospitais, escolas e laboratórios, a renovação é parte do projeto. Em escritórios, ganhou relevância nos últimos anos. O equilíbrio entre vedação, renovação e filtragem define a qualidade do ar percebida pelos ocupantes.
              </p>
              <h3 className={styles.subtitle}>
                O que considerar em projetos corporativos
              </h3>
              <ul>
                <li>&nbsp;- Dimensionar a carga térmica considerando ocupação real e variação ao longo do dia.</li>
                <li>&nbsp;- Especificar equipamentos com tecnologia inverter e selo de eficiência A do Inmetro.</li>
                <li>&nbsp;- Integrar sensores de ocupação, termostatos programáveis e controle por zonas.</li>
                <li>&nbsp;- Garantir filtragem e renovação compatíveis com o uso do espaço.</li>
                <li>&nbsp;- Manter o PMOC ativo e a manutenção preventiva em dia.</li>
              </ul>
              <p className={styles.text}>
                A RETEC fornece soluções para climatização corporativa em obras de médio e grande porte, com atendimento técnico e foco em desempenho operacional. Para projetos que combinam eficiência energética e conforto térmico, fale com a equipe comercial.
              </p>
              <p className={`${styles.text} ${styles.articleNote}`}>
                Participamos de uma matéria sobre esse tema no Portal Mundo do Ar Condicionado e da Refrigeração. O tema do conforto térmico e da produtividade no ambiente de trabalho foi abordado em artigo assinado por Patrick Galletti, CEO do Grupo RETEC. Leia em: https://mundodoaredarefrigeracao.com.br/produto/artigo-climatizacao-e-produtividade-a-importancia-do-conforto-termico-no-ambiente-de-trabalho-por-patrick-galletti/
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
