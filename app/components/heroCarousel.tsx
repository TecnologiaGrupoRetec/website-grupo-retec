"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Typewriter from "./typewriter";
import styles from "../index.module.scss";

const slides = [
  {
    image: "/home/showroom.webp",
    alt: "Showroom Grupo RETEC",
    title: "Fornecedor Completo de Soluções HVAC para obras, projetos e retrofit.",
    subtitle: "Um único fornecedor para equipamentos e centrais de água gelada, sistemas de VRV/VRF, acessórios de ar-condicionado, isolamentos térmicos, exaustão/ventilação, renovação de ar, difusão e dutos.",
    hasTypewriter: false,
  },
  {
    image: "/home/hall_entrada.webp",
    alt: "Escritório do Grupo RETEC",
    title: "+44 anos fornecendo soluções em climatização no Centro-Oeste. ",
    subtitle: "Representante autorizada e distribuidor das principais marcas de HVAC da região, com acesso a produto original e suporte de fábrica.",
    hasTypewriter: false,
  },
  {
    image: "/about/office-inside.webp",
    alt: "Atendimento consultivo e suporte técnico.",
    title: "Atendimento consultivo e suporte técnico.",
    subtitle: "Acompanhamento que começa no diagnóstico e segue até a entrega do material com experiência técnica e atendimento especializado em cada etapa da obra. Com atendimento presencial em Brasília e Goiânia.",
    hasTypewriter: false,
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className={styles.heroCarousel}>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`${styles.carouselSlide} ${idx === activeIndex ? styles.active : ""}`}
        >
          <Image
            className={styles.heroImage}
            src={slide.image}
            alt={slide.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>{slide.title}</h1>
                {slide.hasTypewriter ? (
                  <p className={styles.heroText}>
                    Climatização inteligente para ambientes que respiram{" "}
                    <Typewriter words={["conforto", "eficiência", "qualidade", "controle"]} />
                  </p>
                ) : (
                  <p className={styles.heroText}>{slide.subtitle}</p>
                )}
              </div>

              <div className={styles.heroActions}>
                <a
                  className={styles.primaryButton}
                  href="https://wa.me/5561998904494"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contato
                </a>
                <a className={styles.secondaryButton} href="#processo">
                  Explorar
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className={`${styles.carouselArrow} ${styles.prevArrow}`}
        aria-label="Slide anterior"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.carouselArrow} ${styles.nextArrow}`}
        aria-label="Próximo slide"
      >
        &#8594;
      </button>

      <div className={styles.carouselDots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`${styles.carouselDot} ${idx === activeIndex ? styles.activeDot : ""}`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
