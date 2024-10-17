import styles from "./blog.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
import Cta from "../components/cta";
import Main from "../components/main";
import Tag from "../components/tag";
import Link from "next/link";
import ArticleCard from "../components/articleCard";

export default function Blog() {

  return (
    <div className={styles.page}>
      <Navbar activeTab="blog" />
      <Main>
        <Tag text="Saúde" />
        <Link className={styles.emphasis} href="/blog/3">
          Como as queimadas afetam a sua saúde, mesmo a quilômetros de distância.
        </Link>
        <div className={styles.articleDetails}>
          <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="36" height="36" />
          <span className={styles.authorName}>
            Patrick Galletti
          </span>
          <span className={styles.date}>
            26/09/2024
          </span>
        </div>
      </Main>

      <section className={styles.articles}>
        <div className={styles.content}>
          <ArticleCard 
            imgSrc="/blog/thumb1.jpg"
            imgAlt="Sala de Aula"
            title="Climatização nas escolas."
            lead="Qualidade do ar afeta até a sonolência, mas ambientes bem projetados podem ajudar a contornar isso."
            author="Patrick Galletti"
            path="1"
          />
          <ArticleCard 
            imgSrc="/blog/thumb2.jpg"
            imgAlt="Ambiente de Trabalho"
            title="Climatização no ambiente de trabalho."
            lead="Como a qualidade do ar influencia na performance das equipes e na produtividade no trabalho."
            author="Patrick Galletti"
            path="2"
          />
          <ArticleCard 
            imgSrc="/blog/thumb3.jpg"
            imgAlt="Queimadas"
            title="Queimadas e Saúde."
            lead="As queimadas afetam a sua saúde mesmo a quilômetros de distância, aprenda a se proteger."
            author="Patrick Galletti"
            path="3"
          />
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
