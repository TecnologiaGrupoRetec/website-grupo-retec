import styles from "./sobre.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
//import Cta from "../components/cta";
import Main from "../components/main";
import VerticalTimeline from "../components/verticalTimeline";

const timelineItems = [
  {
    year: "1982",
    description:
      "Fundada em 1982, a RETEC nasceu com o objetivo de ser referência em climatização para construções de médio e grande porte.",
    image: "/about/about1.jpeg",
    alt: "Primeira sede do Grupo RETEC",
  },
  {
    year: "2000",
    description:
      "Com o crescimento da empresa e a ampliação do portfólio de clientes, demos um passo importante com a mudança para o SAAN.",
    image: "/about/about2.jpg",
    alt: "Momento de expansão da RETEC",
  },
  {
    year: "2021 a 2024",
    description:
      "Em busca de melhores condições de atendimento técnico e comercial, iniciamos a transição estratégica para o SIA.",
    image: "/home/new-facade.webp",
    alt: "Fachada da RETEC no SIA",
  },
  {
    year: "2024",
    description:
      "Inauguramos o showroom no SIA para proporcionar uma experiência mais completa aos nossos clientes e parceiros.",
    image: "/about/empty-office.webp",
    alt: "Showroom da RETEC",
  },
  {
    year: "Hoje",
    description:
      "Seguimos evoluindo nossa operação com foco em soluções térmicas, atendimento consultivo e suporte técnico de ponta a ponta.",
    image: "/about/office-inside.webp",
    alt: "Atuação atual do Grupo RETEC",
  },
];

export default function Home() {

  return (
    <div className={styles.page}>
      <Navbar activeTab="about" />
      <Main
        subtitle="desde 1982"
        bgImage="/about/empty-office.webp"
        className={styles.aboutHero}
      >
        <span className={styles.detail}>
          Há mais de 40 anos o Grupo RETEC acompanha a climatização no Distrito Federal, conectando empresas e instaladores às principais soluções em ar-condicionado, ventilação, exaustão e refrigeração.
        </span>
      </Main>

      <section className={styles.about}>
        <div className={styles.content}>
          <div className={styles.description}>
            <h3 className={styles.subtitle}>
              Nossa História
            </h3>
            <p className={styles.text}>
              O Grupo RETEC inaugurou em 1982 para representar no Distrito Federal e em Goiás as melhores marcas de produtos para instalações de ar-condicionado, ventilação, exaustão e refrigeração, sendo a primeira empresa da região a oferecer esses produtos.
              <br /><br />
              A experiência acumulada e a busca constante por bons parceiros tornaram o Grupo RETEC referência tanto para quem instala quanto para quem procura a solução certa para o projeto.
              <br /><br />
              Hoje, com mais de 40 anos de mercado, mantém a liderança na distribuição de HVAC no Distrito Federal e em todo o estado de Goiás, com produtos para ar-condicionado, difusão de ar, dutos, filtros, isolamentos, ventilação e exaustão.
            </p>
            <a className={styles.contact} href="https://wa.me/5561991311283">
              Fale com a gente
            </a>
          </div>
          <div className={styles.images}>
            <Image className={styles.img} src={`/about/about1.jpeg`} alt="Logo Grupo RETEC" width="298" height="298" />
            <Image className={styles.img} src={`/about/about2.jpg`} alt="Logo Grupo RETEC" width="298" height="298" />
          </div>
        </div>
      </section>

      <VerticalTimeline items={timelineItems} />

      <section className={styles.principles}>
        <div className={styles.principlesContent}>
          <h2 className={styles.principlesTitle}>
            Nossos Pilares
          </h2>
          <h3 className={styles.principlesSubtitle}>
            Missão, Visão e Valores
          </h3>

          <div className={styles.principlesContainer}>
            <div style={{ "--r": -15 } as React.CSSProperties} className={styles.glassCard}>
              <div className={styles.glassCardInner}>
                <div className={styles.glassIcon}>
                  <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm0 40c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216S375.3 40 256 40zm0 80c75.1 0 136 60.9 136 136s-60.9 136-136 136-136-60.9-136-136 60.9-136 136-136zm0 40c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" />
                  </svg>
                </div>
                <h4 className={styles.glassTitle}>Missão</h4>
                <p className={styles.glassText}>
                  Melhorar o mundo e a vida das pessoas através da qualidade do ar.
                </p>
              </div>
            </div>

            <div style={{ "--r": 5 } as React.CSSProperties} className={styles.glassCard}>
              <div className={styles.glassCardInner}>
                <div className={styles.glassIcon}>
                  <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
                      <path d="M2315 4074 c-614 -63 -1146 -277 -1602 -645 -183 -148 -408 -387 -550 -584 -81 -114 -163 -256 -163 -284 0 -49 149 -278 296 -456 100 -121 297 -317 417 -414 418 -337 900 -546 1452 -628 185 -27 630 -25 820 5 511 80 945 263 1354 569 138 105 372 329 486 468 147 179 295 407 295 455 0 48 -148 276 -295 455 -115 140 -348 363 -490 470 -329 248 -677 414 -1070 511 -240 59 -378 75 -660 79 -137 2 -268 1 -290 -1z m472 -215 c816 -68 1565 -505 2024 -1181 l80 -118 -80 -117 c-391 -577 -997 -984 -1681 -1131 -206 -45 -324 -56 -575 -56 -195 1 -266 5 -380 22 -606 94 -1108 345 -1531 767 -161 160 -245 260 -350 417 l-65 98 62 93 c209 311 509 604 824 801 493 310 1089 454 1672 405z" />
                      <path d="M2428 3510 c-213 -34 -396 -126 -544 -274 -124 -124 -214 -283 -256 -452 -31 -125 -31 -323 0 -448 90 -361 375 -635 747 -717 97 -21 303 -17 409 9 361 89 635 375 717 747 21 97 17 303 -9 409 -42 168 -132 327 -256 452 -123 123 -284 214 -447 254 -96 23 -277 33 -361 20z m316 -231 c328 -79 557 -375 557 -719 0 -415 -326 -741 -741 -741 -416 0 -741 325 -741 741 0 434 357 769 791 742 30 -2 91 -12 134 -23z" />
                    </g>
                  </svg>
                </div>
                <h4 className={styles.glassTitle}>Visão</h4>
                <p className={styles.glassText}>
                  Ser referência no fornecimento de tecnologias térmicas no Brasil.
                </p>
              </div>
            </div>

            <div style={{ "--r": 25 } as React.CSSProperties} className={styles.glassCard}>
              <div className={styles.glassCardInner}>
                <div className={styles.glassIcon}>
                  <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 34.3 31.9 34.3 55.7v101.9c0 154.2-106.3 246.5-224.2 270.3-7.7 1.6-15.7 1.6-23.4 0C126.3 486.9 20 394.6 20 240.4V138.5c0-23.8 12.3-46.4 34.3-55.7L242.6 2.9C246.8 1 251.4 0 256 0zm0 460.3c103.5-22.1 180-103.2 180-219.9v-94.8c0-4.8-2.5-9.3-6.9-11.2L256 47.9V460.3z" />
                  </svg>
                </div>
                <h4 className={styles.glassTitle}>Valores</h4>
                <p className={styles.glassText}>
                  Confiança e Parceria, Qualidade, Servir com Excelência, Integridade e Comprometimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
