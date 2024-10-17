import styles from "../blog.module.scss";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from '../../components/footer';
import Cta from "../../components/cta";
import Tag from "../../components/tag";
import Link from "next/link";

export default function Article() {

  return (
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
                Como as Queimadas Afetam Sua Saúde, Mesmo a Quilômetros de Distância
              </h1>
              <div className={styles.articleDetails}>
                <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="28" height="28" />
                <span className={styles.authorName}>
                  Patrick Galletti
                </span>
                <span className={styles.date}>
                  26/09/2024
                </span>
              </div>
            </header>
            <Image className={styles.img} src="/blog/thumb3.jpg" alt="Bombeiro em Queimada" width="800" height="462" />
            <p className={styles.text}>
              As queimadas, infelizmente, são um fenômeno recorrente em várias regiões do Brasil e do mundo. Além de causarem graves danos ambientais, essas ocorrências afetam diretamente a nossa saúde, mesmo que estejamos longe das áreas atingidas. A poluição gerada por incêndios florestais pode percorrer grandes distâncias, prejudicando a qualidade do ar e trazendo sérios riscos à nossa saúde respiratória. Neste artigo, vamos entender como as queimadas impactam nossa saúde e apresentar soluções para minimizar seus efeitos, especialmente no ambiente doméstico.
            </p>
            <h3 className={styles.subtitle}>
              Como fica a sua saúde?
            </h3>
            <p className={styles.text}>
              As queimadas liberam grandes quantidades de fumaça, que contém gases tóxicos, como monóxido de carbono, dióxido de carbono e óxidos de nitrogênio, além de partículas finas, chamadas PM2,5, que são extremamente prejudiciais à saúde. Essas partículas são tão pequenas que conseguem penetrar profundamente no sistema respiratório, alcançando os pulmões e até a corrente sanguínea.
            </p>
            <p className={styles.text}>
              Mesmo a quilômetros de distância, as queimadas podem agravar doenças respiratórias pré-existentes, como asma, bronquite e rinite, além de aumentar o risco de doenças cardiovasculares. Pessoas saudáveis também podem apresentar sintomas como tosse, falta de ar, irritação nos olhos, garganta e nariz, além de cansaço excessivo.
            </p>
            <h3 className={styles.subtitle}>
              Quem é mais vulnerável?
            </h3>
            <p className={styles.text}>
              Alguns grupos são mais vulneráveis aos efeitos da poluição causada pelas queimadas, como:
            </p>
            <ul>
              <li><b>- Crianças:</b>&nbsp;Os pulmões das crianças ainda estão em desenvolvimento, tornando-as mais suscetíveis a problemas respiratórios.</li>
              <li><b>- Idosos:</b>&nbsp;Pessoas mais velhas, especialmente aquelas com doenças crônicas, como doenças cardíacas ou pulmonares, sofrem mais com a má qualidade do ar.</li>
              <li><b>- Gestantes:</b>&nbsp;A poluição pode afetar não só a saúde da mãe, mas também do bebê em desenvolvimento, aumentando o risco de complicações.</li>
              <li><b>- Pessoas com doenças respiratórias:</b>&nbsp;Aqueles que já sofrem com doenças respiratórias, como asma, enfisema ou bronquite, tendem a ter seus sintomas agravados.</li>
            </ul>
            <Image className={styles.img} src="/blog/meio3.jpg" alt="Queimadas" width="800" height="462" />
            <h3 className={styles.subtitle}>
              Soluções para proteger sua saúde
            </h3>
            <p className={styles.text}>
              Embora não seja possível controlar as queimadas, há algumas medidas que você pode adotar para reduzir os impactos na sua saúde, mesmo que esteja longe dos focos de incêndio. Uma das mais eficazes envolve a proteção do ambiente interno, onde passamos a maior parte do tempo.
            </p>
            <p className={styles.text}>
              <b>1. Mantenha os Ambientes Climatizados</b><br/>
              O uso de ar-condicionado pode ser uma solução eficiente para manter o ar interno em boas condições. Muitos modelos modernos possuem filtros que eliminam partículas poluentes do ambiente. É importante, no entanto, realizar a manutenção regular do aparelho, limpando os filtros para garantir a eficácia da filtragem do ar.
            </p>
            <p className={styles.text}>
              <b>2. Invista em Purificadores de Ar</b><br/>
              Os purificadores de ar são excelentes aliados para melhorar a qualidade do ar em ambientes fechados, principalmente em áreas com alto índice de poluição devido a queimadas. Eles possuem filtros HEPA (High Efficiency Particulate Air) que são altamente eficientes na remoção de partículas finas, como as liberadas pelas queimadas. Além disso, muitos modelos também eliminam bactérias, vírus e alérgenos do ar, promovendo um ambiente mais saudável.
            </p>
            <p className={styles.text}>
              <b>3. Evite Ventiladores em Dias de Poluição Alta</b><br/>
              Em dias de alta concentração de fumaça e poluição, o uso de ventiladores pode piorar a situação, já que eles podem dispersar ainda mais as partículas nocivas no ar. Se possível, mantenha as janelas e portas fechadas para impedir que a poluição entre em sua casa.
            </p>
            <p className={styles.text}>
              <b>4. Monitore a Qualidade do Ar</b><br/>
              Existem aplicativos e sites que fornecem dados sobre a qualidade do ar em tempo real, como o AirVisual ou o Climatempo. Ficar atento a essas informações pode te ajudar a saber quando é seguro sair de casa e quando é melhor permanecer em ambientes fechados e climatizados.
            </p>
            <p className={styles.text}>
              <b>5. Hidrate-se e Use Máscaras Adequadas</b><br/>
              A hidratação é essencial para ajudar o corpo a eliminar as toxinas inaladas. Além disso, em dias de poluição extrema, usar máscaras adequadas, como as do tipo PFF2/N95, pode proteger seu sistema respiratório ao bloquear a entrada de partículas perigosas.
            </p>
            <h3 className={styles.subtitle}>
              O ambiente interno é seu refúgio
            </h3>
            <p className={styles.text}>
              A qualidade do ar no interior de casa ou no trabalho se torna ainda mais importante em tempos de queimadas. Manter ambientes climatizados, com a ajuda de purificadores e filtros de ar, é essencial para garantir que você e sua família respirem ar limpo e seguro.
            </p>
            <p className={styles.text}>
              Investir em um ambiente interno saudável, por meio de ar-condicionado, purificadores de ar e monitoramento constante da qualidade do ar, é uma medida essencial para proteger sua saúde e a de sua família. Nós da <b>RETEC</b> estamos empenhados em melhorar o ar que as pessoas respiram, entre em contato.
            </p>
            <p className={styles.text}>
              Além disso, estar atento aos sinais do corpo e procurar atendimento médico em casos de agravamento dos sintomas respiratórios é fundamental. A prevenção, com o uso de soluções tecnológicas e mudanças de hábitos, pode evitar complicações mais sérias.
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
  );
}
