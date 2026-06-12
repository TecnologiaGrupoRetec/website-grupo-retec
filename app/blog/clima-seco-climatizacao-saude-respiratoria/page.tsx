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
                  Clima seco e climatização: como preservar a saúde respiratória
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
              <Image className={styles.img} src="/blog/saude-respiratoria2.webp" alt="Climatizacao e Saude Respiratoria" width="800" height="462" />
              <p className={styles.text}>
                Brasília e boa parte do Centro-Oeste enfrentam temporadas em que a umidade relativa do ar cai abaixo dos níveis considerados seguros pela Organização Mundial da Saúde. A OMS recomenda que essa umidade fique entre 40% e 70% para preservar a saúde respiratória. Em estações secas, o Distrito Federal já registrou índices próximos de 9%, abaixo até dos parâmetros de desertos. Quando esse ar entra nas casas, nos escritórios e nos ambientes hospitalares, o impacto se acumula no corpo humano e exige atenção técnica para reduzir efeitos no aparelho respiratório.
              </p>
              <h3 className={styles.subtitle}>
                O que o ar seco provoca no corpo
              </h3>
              <p className={styles.text}>
                A baixa umidade resseca as mucosas das vias aéreas, reduz a eficiência dos cílios responsáveis por filtrar partículas inaladas e facilita a entrada de vírus e bactérias no organismo. Sintomas comuns incluem irritação nasal, garganta seca, tosse persistente, sangramentos nas vias aéreas, agravamento de quadros de asma, rinite e bronquite. Crianças, idosos e pessoas com doenças respiratórias crônicas formam o grupo de maior risco.
              </p>
              <p className={styles.text}>
                Em paralelo, o clima seco potencializa a presença de poeira em suspensão e a sensação de desconforto em ambientes internos. Quando a temporada de queimadas coincide com a estação seca, o quadro piora: material particulado fino soma-se ao ar já desidratado, comprometendo ainda mais a função respiratória.
              </p>
              <h3 className={styles.subtitle}>
                Como a climatização atua nesse cenário
              </h3>
              <p className={styles.text}>
                A climatização adequada vai além do controle de temperatura. Em períodos de baixa umidade, o sistema precisa lidar com três frentes ao mesmo tempo: manter o conforto térmico, controlar a umidade relativa do ar e garantir renovação com filtragem adequada. Patrick Galletti, engenheiro mecatrônico e CEO do Grupo RETEC, observa que tratar o ambiente apenas pela temperatura, sem considerar umidade e renovação, deixa o ar interno tão problemático quanto o externo.
              </p>
              <p className={styles.text}>
                Equipamentos de ar-condicionado convencionais reduzem a umidade do ar durante o resfriamento. Em ambientes que já partem de níveis muito baixos, isso intensifica o problema. Soluções como umidificadores em ambientes específicos, sistemas com controle integrado de umidade e tratamento de ar com filtragem fina entregam respostas mais consistentes do que o equipamento isolado.
              </p>
              <h3 className={styles.subtitle}>
                O que considerar em residências
              </h3>
              <p className={styles.text}>
                Em estações secas, manter umidificadores em quartos e ambientes de permanência prolongada reduz o impacto direto sobre as vias respiratórias. A escolha do equipamento precisa observar a vazão de ar, o volume do cômodo e a manutenção adequada do reservatório de água, já que umidificadores mal higienizados se tornam fonte de fungos e bactérias.
              </p>
              <p className={styles.text}>
                Em paralelo, hábitos como hidratação frequente, lavagem nasal com solução salina e redução da exposição ao ar externo nos horários de maior poluição complementam os ganhos do ambiente climatizado. Nenhum equipamento substitui esses cuidados básicos, mas a soma das frentes reduz o risco de quadros agudos.
              </p>
              <h3 className={styles.subtitle}>
                O que considerar em ambientes corporativos e hospitalares
              </h3>
              <p className={styles.text}>
                Em escritórios, escolas, hospitais e clínicas, o controle preciso de temperatura, umidade e renovação faz parte do projeto de climatização. Sistemas com unidades de tratamento de ar (UTAs) permitem combinar resfriamento, filtragem e ajuste de umidade, mantendo o ambiente interno em faixa adequada mesmo quando o ar externo está extremamente seco. Em hospitais, a exigência é normativa. Em escritórios, a operação adequada do sistema reduz absenteísmo, queda de produtividade e queixas relacionadas à qualidade do ar.
              </p>
              <p className={styles.text}>
                A renovação de ar exige cuidado adicional em períodos de seca combinada com queimadas. O ar externo precisa entrar tratado, com filtragem compatível com o material particulado presente na atmosfera. Sistemas mal dimensionados ou com manutenção atrasada perdem essa capacidade de proteção.
              </p>
              <h3 className={styles.subtitle}>
                Pontos práticos para a temporada seca
              </h3>
              <ul>
                <li>&nbsp;- Verificar a umidade relativa nos ambientes internos com higrômetros, especialmente em residências e escritórios.</li>
                <li>&nbsp;- Avaliar uso de umidificadores compatíveis com o volume do espaço.</li>
                <li>&nbsp;- Conferir filtros e manutenção dos sistemas de climatização.</li>
                <li>&nbsp;- Em obras corporativas e hospitalares, revisar o desempenho das unidades de tratamento de ar e a capacidade de renovação.</li>
                <li>&nbsp;- Em períodos de queimadas, reforçar a filtragem nas tomadas de ar exterior.</li>
              </ul>
              <p className={styles.text}>
                A RETEC fornece soluções para climatização, ventilação, exaustão e tratamento de ar em residências, ambientes corporativos e obras de médio e grande porte. Para projetos com exigência técnica de controle de umidade e qualidade do ar, fale com a equipe comercial.
              </p>
              <p className={`${styles.text} ${styles.articleNote}`}>
                Participamos de uma matéria sobre esse tema no Correio Braziliense (coluna de Fabiano Moraes). O tema dos efeitos do clima seco na saúde respiratória e o papel da climatização foi abordado em matéria com participação de Patrick Galletti, CEO do Grupo RETEC. Leia em: https://www.correiobraziliense.com.br/colunistas/fabiano-moraes/2025/06/7187560-clima-seco-e-climatizacao-como-preservar-a-saude-respiratoria.html
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
