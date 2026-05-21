import styles from "./sobre.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
//import Cta from "../components/cta";
import Main from "../components/main";

export default function Home() {

  return (
    <div className={styles.page}>
      <Navbar activeTab="about" />
      <Main 
        title="Soluções para climatização"
        subtitle="Grupo RETEC"
        bgImage="/about/empty-office.jpg"
      >
        <span className={styles.detail}>
          há +40 anos participando da evolução da climatização
        </span>
      </Main>

      <section className={styles.about}>
        <div className={styles.content}>
          <div className={styles.description}>
            <h2 className={styles.title}>
              Sobre Nós
            </h2>
            <h3 className={styles.subtitle}>
              Nossa História
            </h3>
            <p className={styles.text}>
              O Grupo Retec abriu em 1982 com o objetivo de representar na região do Distrito Federal e de Goiás as melhores marcas de produtos para instalações de ar condicionado, ventilação/exaustão e refrigeração do mercado, sendo a primeira empresa da região a oferecer tais produtos. 
              <br /><br />
              A experiência adquirida ao longo dos anos e a constante busca por parceiros de alto nível, torna o Grupo Retec referência, não só para quem instala, mas também para quem busca soluções ideais aos seus projetos.
              <br /><br />
              Hoje, com mais de 44 anos de mercado, mantém a liderança na distribuição na área de HVAC, com produtos para ar condicionado, difusão de ar, dutos, equipamentos, filtros, isolamentos, ventilação e exaustão, no Distrito Federal e em todo estado de Goiás.
            </p>
            <a className={styles.contact} href="https://wa.me/5561991311283">
              Fale com a gente
            </a>
          </div>
          <div className={styles.images}>
            <Image className={styles.img} src={`/about/about1.jpeg`} alt="Logo Grupo RETEC" width="298" height="298"/>
            <Image className={styles.img} src={`/about/about2.jpg`} alt="Logo Grupo RETEC" width="298" height="298"/>
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.principlesContent}>
          <h2 className={styles.principlesTitle}>
            Nossos Pilares
          </h2>
          <h3 className={styles.principlesSubtitle}>
            Missão, Visão e Valores
          </h3>
          <ul className={styles.bullets}>
            <li className={styles.bullet}>
              <Image className={styles.checkbox} src={`/home/checkbox.png`} alt="checkbox" width="24" height="24"/>
              <span className={styles.bulletText}>
                <b>Missão:</b>&nbsp;Melhorar o mundo e a vida das pessoas através da qualidade do ar.
              </span>
            </li>
            <li className={styles.bullet}>
              <Image className={styles.checkbox} src={`/home/checkbox.png`} alt="checkbox" width="24" height="24"/>
              <span className={styles.bulletText}>
                <b>Visão:</b>&nbsp;Ser referência no fornecimento de tecnologias térmicas no Brasil.
              </span>
            </li>
            <li className={styles.bullet}>
              <Image className={styles.checkbox} src={`/home/checkbox.png`} alt="checkbox" width="24" height="24"/>
              <span className={styles.bulletText}>
                <b>Valores:</b>&nbsp;Confiança e Parceria, Qualidade, Servir com Excelência, Integridade e Comprometimento
              </span>
            </li>
          </ul>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
