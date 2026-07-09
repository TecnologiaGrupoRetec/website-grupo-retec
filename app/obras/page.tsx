'use client'

import { useState } from "react";
import styles from "./projetos.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
import { projects, tags } from "./projetos";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const tagNames = Object.values(tags);

  return (
    <div className={styles.page}>
      <Navbar activeTab="projects" />

      <main>
        {/* Bloco Hero (Banner Principal) */}
        <section className={styles.hero}>
          <Image
            className={styles.heroImage}
            src="/projects/office-inside.jpg"
            alt="Explore Nossas Obras"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>Explore Nossas Obras</h1>
                <p className={styles.heroText}>
                  Fornecemos produtos de alto desempenho e desenvolvemos soluções sob medida para obras de diferentes portes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Cases / Projetos */}
        <section className={styles.projects}>
          <div className={styles.container}>
            <div className={`${styles.sectionIntro} ${styles.sectionIntroCentered}`}>
              <p className={styles.eyebrow}>Portfólio</p>
              <h2 className={styles.sectionTitle}>Nossos Cases</h2>
              <p className={styles.sectionText}>
                Conheça alguns dos principais projetos executados com produtos do Grupo RETEC.
              </p>
            </div>

            <div className={styles.categories}>
              <a
                className={selectedCategory === 'all' ? styles.active : ''}
                onClick={() => setSelectedCategory('all')}
              >
                Todos
              </a>
              {tagNames.map((tag) => (
                <a
                  className={selectedCategory === tag ? styles.active : ''}
                  onClick={() => setSelectedCategory(tag)}
                  key={tag.toLowerCase()}
                >
                  {tag}
                </a>
              ))}
            </div>

            <div className={styles.cards}>
              {projects.map((project) =>
                project.tags.includes(selectedCategory) || selectedCategory === 'all' ? (
                  <div className={styles.card} key={project.name.toLowerCase()}>
                    <div className={styles.imageWrapper}>
                      <Image
                        className={styles.img}
                        src={`/projects/${project.img}`}
                        alt={project.name}
                        width={360}
                        height={240}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.tagsContainer}>
                        {project.tags.map((tag) => (
                          <span className={styles.tag} key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className={styles.name}>{project.name}</h4>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
