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
                  Climatização sustentável: o que muda com novos refrigerantes, automação e eficiência energética.
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
                O setor de climatização passa por uma reestruturação técnica e regulatória que afeta toda a cadeia produtiva, da fabricação à manutenção. A ratificação da Emenda de Kigali ao Protocolo de Montreal, incorporada pelo Brasil em 2022, estabeleceu um cronograma para eliminação gradual dos hidrofluorcarbonos (HFCs), gases tradicionalmente usados em equipamentos de ar-condicionado e refrigeração com alto potencial de aquecimento global. O plano nacional prevê congelamento do consumo em 2024 e redução de 80% até 2045 em relação à média de 2020 a 2022.
              </p>
              <p className={styles.text}>
                Em paralelo, o Inmetro revisou os padrões mínimos de eficiência energética por meio da Portaria 234/2020, substituindo o antigo índice EER pelo IDRS (Índice de Desempenho de Refrigeração Sazonal). A classificação vigente desde 2023 exige desempenho mínimo de 5,5 para a classe A, com subida prevista para 7,0 a partir de 2026. 
              </p>
              <h3 className={styles.subtitle}>
                A substituição dos gases refrigerantes  
              </h3>
              <p className={styles.text}>
                Os hidrofluorcarbonos têm potencial de aquecimento global milhares de vezes superior ao do CO₂. A transição em curso aponta para alternativas como o R-32, com GWP menor que o dos HFCs tradicionais, e refrigerantes naturais como o R-290 (propano) e o R-600a (isobutano), com potencial de aquecimento próximo de zero.  
              </p>
              <p className={styles.text}>
                Patrick Galletti, engenheiro mecatrônico e CEO do Grupo RETEC, observa que essa transição combina avanço ambiental e ganho operacional. Sistemas modernos consomem menos energia, exigem manutenção mais previsível e operam com gases de baixo impacto. Cada refrigerante exige equipamentos compatíveis, procedimentos específicos de instalação e manuseio, e capacitação técnica adequada da equipe de instalação. 
              </p>
              <h3 className={styles.subtitle}>
                Eficiência energética em edifícios    
              </h3>
              <p className={styles.text}>
                Levantamentos da Agência Internacional de Energia apontam que sistemas de climatização e refrigeração respondem por cerca de 10% do consumo global de eletricidade. No Brasil, esse percentual chega a faixas mais elevadas em edifícios corporativos e públicos. A escolha de equipamentos com selo de eficiência A do Inmetro, o uso de tecnologias inverter e o dimensionamento correto reduzem o consumo sem comprometer o conforto térmico. 
              </p>
              <p className={styles.text}>
                Em obras de médio e grande porte, sistemas como VRV e centrais de água gelada operam com eficiência superior à de soluções tradicionais quando bem projetados. A leitura correta da ocupação, da carga térmica e dos horários de uso define o ganho real em economia de energia. 
              </p>
              <h3 className={styles.subtitle}>
                Automação e controle inteligente    
              </h3>
              <p className={styles.text}>
                Sensores de presença, sensores de qualidade do ar, termostatos programáveis e plataformas de gestão remota permitem ajustar a operação dos equipamentos conforme a ocupação real do ambiente. A integração via Internet das Coisas amplia as possibilidades de monitoramento e regulagem, com economia de energia e maior previsibilidade na manutenção.  
              </p>
              <p className={styles.text}>
                Em edifícios corporativos, a operação por zonas térmicas evita o desperdício de climatização em áreas vazias. Em ambientes hospitalares, o controle preciso da temperatura, da umidade e da renovação atende a exigências normativas e operacionais. A escolha das ferramentas de automação depende do porte do sistema e dos objetivos do projeto.  
              </p>
              <h3 className={styles.subtitle}>
                Manutenção preventiva e PMOC    
              </h3>
              <p className={styles.text}>
                A Lei 13.589 de 2018 tornou obrigatória a implementação do Plano de Manutenção, Operação e Controle (PMOC) em edificações com sistemas de climatização. Estimativas da Abrava indicam que cerca de 40% das falhas em sistemas de ar-condicionado poderiam ser evitadas com manutenção preventiva adequada. Para além da obrigação legal, o PMOC organiza a operação do sistema, prolonga a vida útil dos equipamentos e mantém o desempenho energético dentro da faixa de projeto. 
              </p>
              <p className={styles.text}>
                Equipamentos sem manutenção operam com consumo elevado, perdem capacidade de refrigeração e elevam o risco de falhas em momentos críticos. Em climatização sustentável, manutenção é parte do projeto, não despesa adicional.   
              </p>
              <h3 className={styles.subtitle}>
                O que considerar nas decisões técnicas   
              </h3>
              <ul>
                <li>&nbsp;- Especificar equipamentos com selo de eficiência A do Inmetro e tecnologia inverter compatível com a aplicação.</li>
                <li>&nbsp;- Optar por refrigerantes com baixo potencial de aquecimento global, como R-32, R-290 e R-600a, conforme a aplicação.</li>
                <li>&nbsp;- Adotar manutenção preventiva conforme o PMOC, com verificação periódica de vazamentos.</li>
                <li>&nbsp;- Integrar sensores e automação para reduzir o consumo em períodos de baixa ocupação.</li>
                <li>&nbsp;- Considerar o ciclo de vida do equipamento, incluindo eficiência operacional, manutenção e desempenho ambiental.</li>
              </ul>
              <p className={styles.text}>
                A RETEC fornece soluções para climatização, ventilação, exaustão e refrigeração com atenção à eficiência energética e à conformidade técnica. Para projetos que combinam desempenho operacional e baixo impacto ambiental, fale com a equipe comercial.   
              </p>
              <p className={`${styles.text} ${styles.articleNote}`}>
                Participamos de uma matéria sobre esse tema no Terra (Planeta / Sustentabilidade / Negócios Sustentáveis). O tema da climatização sustentável foi abordado em matéria com participação de Patrick Galletti, CEO do Grupo RETEC. Leia em: https://www.terra.com.br/planeta/sustentabilidade/negocios-sustentaveis/climatizacao-sustentavel-une-eficiencia-e-baixo-impacto,951893cba53bfa02759e76db0d3db656ss0tdrqa.html   
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
