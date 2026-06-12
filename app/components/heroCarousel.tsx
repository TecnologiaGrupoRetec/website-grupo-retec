"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Typewriter from "./typewriter";
import styles from "../index.module.scss";

const slides = [
  {
    image: "/home/new-facade.webp",
    alt: "Showroom Grupo RETEC",
    title: "Especialistas em qualidade do ar e conforto térmico. Criando soluções de climatização que funcionam | HVAC.",
    hasTypewriter: true,
  },
  {
    image: "/about/empty-office.webp",
    alt: "Escritório do Grupo RETEC",
    title: "Mais de 40 anos de liderança e inovação.",
    subtitle: "Representante e parceira autorizada das principais marcas líderes em HVAC no Centro-Oeste.",
    hasTypewriter: false,
  },
  {
    image: "/about/office-inside.webp",
    alt: "Atendimento consultivo Grupo RETEC",
    title: "Atendimento consultivo e suporte técnico.",
    subtitle: "Apoio completo para o seu projeto, do diagnóstico e orçamento à entrega assistida.",
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
                  href="https://wa.me/5561991311283"
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
