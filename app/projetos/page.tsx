'use client'
import { useState } from "react";
import styles from "./projetos.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
import Cta from "../components/cta";
import Main from "../components/main";
import { projects, tags } from "./projetos";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const tagNames = Object.values(tags);

  return (
    <div className={styles.page}>
      <Navbar activeTab="projects" />
      <Main
        title="Explore Nossos Projetos"
        subtitle="Nosso Trabalho"
      >
        <p className={styles.mainText}>Comprometidos com a excelência e a inovação, nossa atuação abrange desde o fornecimento de produtos de alto desempenho até o desenvolvimento de soluções sob medida para projetos de diferentes portes.</p>
      </Main>

      <section className={styles.projects}>
        <div className={styles.content}>
          <div className={styles.categories}>
            <a 
              className={selectedCategory === 'all' ? styles.active : ''}
              onClick={() => setSelectedCategory('all')}
            >
              Todos
            </a>
            { tagNames.map(tag => (
              <a 
                className={selectedCategory === tag ? styles.active : ''}
                onClick={() => setSelectedCategory(tag)}
                key={tag.toLowerCase()}
              >
                { tag }
              </a>
            )) }
          </div>
          <div className={styles.cards}>
            { projects.map(project => project.tags.includes(selectedCategory) || selectedCategory === 'all' ? (
              <div className={styles.card} key={project.name.toLowerCase()}>
                <Image className={styles.img} src={`/projects/${project.img}`} alt={project.name} width="360" height="467" />
                { project.tags.map(tag => (
                  <div className={styles.tag} key={tag}>
                    { tag }
                  </div>
                )) }
                <h4 className={styles.name}>
                  { project.name }
                </h4>
              </div>              
            ) : null) }
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
