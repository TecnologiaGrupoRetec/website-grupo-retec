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
          Há mais de 40 anos, o Grupo RETEC participa da evolução da climatização no Distrito Federal, conectando empresas, engenheiros e instaladores às principais soluções em ar-condicionado, ventilação, exaustão e refrigeração.
        </span>
      </Main>

      <section className={styles.about}>
        <div className={styles.content}>
          <div className={styles.description}>
            <h3 className={styles.subtitle}>
              Nossa História
            </h3>
            <p className={styles.text}>
              O Grupo Retec abriu em 1982 com o objetivo de representar na região do Distrito Federal e de Goiás as melhores marcas de produtos para instalações de ar condicionado, ventilação/exaustão e refrigeração do mercado, sendo a primeira empresa da região a oferecer tais produtos.
              <br /><br />
              A experiência adquirida ao longo dos anos e a constante busca por parceiros de alto nível, torna o Grupo Retec referência, não só para quem instala, mas também para quem busca soluções ideais aos seus projetos.
              <br /><br />
              Hoje, com mais de +40 anos de mercado, mantém a liderança na distribuição na área de HVAC, com produtos para ar condicionado, difusão de ar, dutos, equipamentos, filtros, isolamentos, ventilação e exaustão, no Distrito Federal e em todo estado de Goiás.
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
                  <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M288 144a112 112 0 1 0 0 224 112 112 0 1 0 0-224zm0 176c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm0-240C152.9 80 47 169.1 0 256c47 86.9 152.9 176 288 176s241-89.1 288-176C529 169.1 423.1 80 288 80z" />
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
