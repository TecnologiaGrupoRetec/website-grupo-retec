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
                  Doenças respiratórias no DF e o papel da climatização inteligente nos ambientes internos 
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
              <Image className={styles.img} src="/blog/thumb3.jpg" alt="Bombeiro em Queimada" width="800" height="462" />
              <p className={styles.text}>
                Em períodos de baixa umidade, o Distrito Federal registra alta consistente nos atendimentos por doenças respiratórias. A combinação entre ar seco, poluição urbana e fumaça de queimadas amplia a circulação de vírus respiratórios, agrava quadros crônicos como asma e bronquite e pressiona os atendimentos de pronto-socorro. A vacinação segue como medida de saúde pública prioritária, mas o ambiente interno em que as pessoas passam a maior parte do tempo também influencia o quadro respiratório de forma direta.  
              </p>
              <h3 className={styles.subtitle}>
                Por que o ambiente interno entrou na equação   
              </h3>
              <p className={styles.text}>
                Estudos da Agência Nacional de Vigilância Sanitária indicam que sistemas de climatização sem manutenção adequada favorecem a proliferação de microrganismos, principalmente quando há acúmulo de umidade e sujeira em filtros e dutos. Dados da Organização Mundial da Saúde apontam que até 60% das doenças respiratórias agudas estão associadas à exposição a poluentes do ar, problema que se intensifica em espaços internos com ventilação deficiente e filtragem inadequada.  
              </p>
              <p className={styles.text}>
                Em paralelo, a Associação Brasileira de Refrigeração, Ar Condicionado, Ventilação e Aquecimento (Abrava) estima que cerca de 40% das falhas em sistemas de climatização poderiam ser evitadas com manutenção preventiva, reduzindo afastamentos por problemas respiratórios. A leitura é técnica: ambiente interno mal climatizado deixa de proteger e passa a contribuir para o problema.   
              </p>
              <h3 className={styles.subtitle}>
                O que a climatização inteligente entrega    
              </h3>
              <p className={styles.text}>
                Climatização inteligente combina três elementos que respondem direto ao problema respiratório: filtragem fina compatível com o ambiente, renovação de ar dimensionada para a ocupação real e controle automático de temperatura e umidade. Sensores de qualidade do ar, presença e ocupação ajustam a operação dos equipamentos conforme a demanda, evitando desperdício e mantendo o ambiente em faixa segura.   
              </p>
              <p className={styles.text}>
                Patrick Galletti, engenheiro mecatrônico e CEO do Grupo RETEC, explica que o problema raramente está no uso do ar-condicionado em si, mas na forma como os sistemas são projetados e operados. Ambientes com filtros sujos, baixa renovação e umidade descontrolada acumulam particulado, bioaerossóis e dióxido de carbono. Sistemas bem dimensionados, com manutenção em dia e tecnologia adequada, fazem o caminho oposto.    
              </p>
              <h3 className={styles.subtitle}>
                Aplicações por tipo de ambiente    
              </h3>
              <p className={styles.text}>
                Em escolas, a climatização adequada reduz a sonolência ligada ao acúmulo de CO₂, controla a temperatura em períodos de calor intenso e reduz a exposição a alérgenos. Estudos da Harvard T.H. Chan School of Public Health mostram que ambientes com ventilação e temperatura controladas reduzem a incidência de doenças respiratórias e melhoram a concentração das crianças.   
              </p>
              <p className={styles.text}>
                Em hospitais e clínicas, o controle da qualidade do ar interno é parte da operação cotidiana. Filtragem HEPA, renovação dimensionada para cada tipo de ambiente e controle de umidade integram o projeto técnico exigido por norma. Em escritórios e ambientes corporativos, a operação adequada do sistema reduz absenteísmo e queixas respiratórias, com impacto direto sobre produtividade.   
              </p>
              <h3 className={styles.subtitle}>
                O que considerar nos próximos meses    
              </h3>
              <ul>
                <li>&nbsp;- Verificar o estado dos filtros e a frequência da manutenção preventiva conforme o PMOC.</li>
                <li>&nbsp;- Conferir a vedação dos dutos e o posicionamento das tomadas de ar exterior.</li>
                <li>&nbsp;- Avaliar a capacidade do sistema para sustentar filtragem fina em períodos de queimadas.</li>
                <li>&nbsp;- Considerar sensores de qualidade do ar (CO₂, MP 2.5, umidade) em ambientes de alta ocupação.</li>
                <li>&nbsp;- Em projetos novos, especificar climatização inteligente desde a concepção, integrada à automação predial.</li>
              </ul>
              <p className={styles.text}>
                A RETEC fornece soluções para climatização, ventilação e tratamento de ar em escolas, hospitais, clínicas, edifícios corporativos e obras de médio e grande porte. Para projetos com exigência técnica de qualidade do ar interno, fale com a equipe comercial.   
              </p>
              <p className={`${styles.text} ${styles.articleNote}`}>
                Participamos de uma matéria sobre esse tema no Jornal de Brasília (coluna de Kátia Flávia). O tema do aumento das doenças respiratórias no DF e o papel da climatização inteligente foi abordado em matéria com participação de Patrick Galletti, CEO do Grupo RETEC. Leia em: https://jornaldebrasilia.com.br/entretenimento/katia-flavia/doencas-respiratorias-crescem-no-df-e-especialista-alerta-que-climatizacao-inteligente-e-tao-essencial-quanto-vacinacao/  
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
