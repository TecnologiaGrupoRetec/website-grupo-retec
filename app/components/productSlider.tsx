"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/product-slider.module.scss";

const productCategories = [
  {
    title: "Expansão Direta",
    slug: "expansao-direta",
    description: "Sistemas Splits, Cassetes, Hi-walls e VRV/VRF de alta eficiência energética e controle térmico zonado.",
    image: "/produtos/climatizacao-equipamentos/vrv-inova.webp",
  },
  {
    title: "Água Gelada",
    slug: "agua-gelada-e-rejeicao-de-calor",
    description: "Chillers de alto desempenho, mini chillers e torres de resfriamento para refrigeração de alta performance.",
    image: "/produtos/refrigeracao-alta-perfomace/chiller-parafuso.webp",
  },
  {
    title: "Exaustão e Ventilação",
    slug: "exaustao-e-ventilacao",
    description: "Exaustores axiais e centrífugos, gabinetes acústicos de renovação e tratamento de ar nas normas ANVISA.",
    image: "/produtos/exaustao-e-ventilacao/exaustor_banheiro_sicflux_sonora_18_silencioso_bivolt.webp",
  },
  {
    title: "Difusão e Controle de Ar",
    slug: "difusao-e-controle-de-ar",
    description: "Grelhas de insuflamento e retorno, difusores de ar, venezianas de captação e dampers de regulagem.",
    image: "/produtos/difusao-controle-ar/grelha_de_retorno_trox_ar_a.webp",
  },
  {
    title: "Dutos e Rede de Ar",
    slug: "dutos-e-rede-de-ar",
    description: "Dutos flexíveis e conexões estanques para condução do ar condicionado com mínima perda de carga.",
    image: "/produtos/dutos-e-conexoes/duto_flexivel_sem_isolamento_rocktec_ventilacao_e_exaustao.webp",
  },
  {
    title: "Isolamento Térmico",
    slug: "isolamento-termico-e-acustico",
    description: "Mantas e tubos isolantes de borracha elastomérica para eficiência térmica e controle de condensação.",
    image: "/produtos/isolamento-e-vedacao/manta_em_la_de_rocha_tf_32.webp",
  },
  {
    title: "Filtragem de Ar",
    slug: "filtragem-e-qualidade-do-ar",
    description: "Filtros absolutos HEPA, caixas de filtragem e módulos para purificação do ar e saúde ocupacional.",
    image: "/produtos/filtragem-qualidade-ar/filtro_medio_m5_f754_590x550x48_trox.webp",
  }
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevIndex = (activeIndex - 1 + productCategories.length) % productCategories.length;
  const activeSlide = productCategories[activeIndex];
  const prevSlide = productCategories[prevIndex];

  const changeSlide = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 250);
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % productCategories.length;
    changeSlide(nextIdx);
  }, [activeIndex, changeSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + productCategories.length) % productCategories.length;
    changeSlide(prevIdx);
  }, [activeIndex, changeSlide]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>

          {/* Imagem anterior do carrossel (fila de exibição) */}
          <div className={`${styles.prevImageWrapper} ${isTransitioning ? styles.transitioning : ""}`}>
            <Image
              src={prevSlide.image}
              alt={prevSlide.title}
              fill
              sizes="120px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Botão Rolagem para a esquerda (Prev) */}
          <button
            onClick={handlePrev}
            className={`${styles.arrowBtn} ${styles.prevArrow}`}
            aria-label="Categoria anterior"
          >
            &#8592;
          </button>

          {/* Imagem ativa atual do carrossel */}
          <div className={`${styles.activeImageWrapper} ${isTransitioning ? styles.transitioning : ""}`}>
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              sizes="(max-width: 640px) 220px, 340px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Botão Rolagem para a direita (Next) */}
          <button
            onClick={handleNext}
            className={`${styles.arrowBtn} ${styles.nextArrow}`}
            aria-label="Próxima categoria"
          >
            &#8594;
          </button>

          {/* Conteúdo textual da Categoria Ativa */}
          <div className={`${styles.contentArea} ${isTransitioning ? styles.transitioning : ""}`}>
            <span className={styles.eyebrow}>Linhas de Soluções</span>
            <h3 className={styles.title}>{activeSlide.title}</h3>
            <p className={styles.description}>{activeSlide.description}</p>

            <Link href={`/solucoes/${activeSlide.slug}`} className={styles.ctaBtn}>
              <div className={styles.iconBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <span>Ver Soluções</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
