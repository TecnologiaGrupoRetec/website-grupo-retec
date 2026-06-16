"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "../obras/projetos";
import styles from "./styles/apple-cards-carousel.module.scss";

type ProjectType = typeof projects[0];

export default function AppleCardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  // Verifica os limites de rolagem para habilitar/desabilitar os botões de seta
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2); // pequena tolerância
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      // Executa uma vez na montagem para definir os estados iniciais
      checkScroll();
      // Também verifica no redimensionamento da janela
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Listeners de teclado (Esc) e trava de rolagem do body quando o modal está aberto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Cabeçalho de introdução e botões de controle de rolagem */}
        <div className={styles.sectionIntro}>
          <div className={styles.introLeft}>
            <p className={styles.eyebrow}>Obras e Destaques</p>
            <h2 className={styles.sectionTitle}>Nossos Cases em Destaque</h2>
            <p className={styles.sectionText}>
              Explore em detalhes grandes empreendimentos que contam com a qualidade e as soluções do Grupo RETEC.
            </p>
          </div>
          <div className={styles.controls}>
            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className={styles.arrowBtn}
              aria-label="Rolar para esquerda"
            >
              &#8592;
            </button>
            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className={styles.arrowBtn}
              aria-label="Rolar para direita"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Carrossel de rolagem horizontal */}
        <div className={styles.carouselWrapper}>
          <div className={styles.scrollTrack} ref={scrollRef}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => setActiveProject(project)}
              >
                <div className={styles.cardOverlay} />
                <Image
                  className={styles.cardImage}
                  src={`/projects/${project.img}`}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{project.tags[0] || "Destaque"}</span>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Expandido (Popup Overlay) */}
      {activeProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setActiveProject(null)}
              className={styles.closeBtn}
              aria-label="Fechar modal"
            >
              &#10005;
            </button>

            {/* Imagem e Cabeçalho sobreposto do Modal */}
            <div className={styles.modalImageWrapper}>
              <div className={styles.modalOverlayGradient} />
              <Image
                className={styles.modalImage}
                src={`/projects/${activeProject.img}`}
                alt={activeProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.modalHeaderContent}>
                <span className={styles.modalCategory}>
                  {activeProject.tags[0] || "Destaque"}
                </span>
                <h3 className={styles.modalTitle}>{activeProject.name}</h3>
              </div>
            </div>

            {/* Corpo de Informações do Modal */}
            <div className={styles.modalBody}>
              <p>
                O Grupo RETEC foi responsável pelo fornecimento de componentes técnicos especializados e suporte consultivo em engenharia de aplicação de sistemas de climatização (HVAC) para esta obra.
              </p>
              <p>
                A solução fornecida preza pela máxima eficiência operacional, conformidade técnica com normas de renovação e qualidade do ar interior (IAQ), além do excelente isolamento térmico e acústico, assegurando um ambiente confortável, produtivo e energeticamente otimizado.
              </p>
              <p>
                Seguimos presentes como parceiros técnicos em toda a cadeia comercial do Centro-Oeste, garantindo agilidade e compromisso em grandes obras corporativas, de saúde, industriais e comerciais.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
