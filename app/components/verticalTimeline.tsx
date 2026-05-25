"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../sobre/sobre.module.scss";

type TimelineItemData = {
  year: string;
  description: string;
  image: string;
  alt: string;
};

type TimelineProps = {
  items: TimelineItemData[];
};

export default function VerticalTimeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineLayout, setLineLayout] = useState({ top: 0, height: 0 });
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const absoluteContainerTop = rect.top + scrollTop;
      
      const itemElements = container.querySelectorAll(`.${styles.timelineItem}`);
      if (itemElements.length === 0) return;
      
      // Encontra o primeiro e o último indicador circular (dot) na árvore DOM
      const firstDot = itemElements[0].querySelector(`.${styles.timelineDot}`);
      const lastDot = itemElements[itemElements.length - 1].querySelector(`.${styles.timelineDot}`);
      
      if (!firstDot || !lastDot) return;
      
      const firstDotRect = firstDot.getBoundingClientRect();
      const lastDotRect = lastDot.getBoundingClientRect();
      
      const absoluteFirstDotTop = firstDotRect.top + scrollTop;
      const absoluteLastDotTop = lastDotRect.top + scrollTop;
      
      // Calcula onde a linha deve começar (centro do primeiro dot) relativo ao container
      const lineTop = absoluteFirstDotTop - absoluteContainerTop + (firstDotRect.height / 2);
      // Calcula a altura total da linha (entre o centro do primeiro e do último dot)
      const totalLineHeight = absoluteLastDotTop - absoluteFirstDotTop;
      
      setLineLayout({ top: lineTop, height: totalLineHeight });
      
      const viewportHeight = window.innerHeight;
      // Linha imaginária do meio da tela
      const windowMiddle = scrollTop + (viewportHeight / 2);
      
      // Calcula o quanto da barra deve estar preenchida (em pixels)
      let currentHeight = windowMiddle - absoluteFirstDotTop;
      currentHeight = Math.max(0, Math.min(totalLineHeight, currentHeight));
      
      setScrollHeight(currentHeight);

      // Adiciona/remove classes ativas nos items conforme a linha passa por eles
      itemElements.forEach((item) => {
        const dot = item.querySelector(`.${styles.timelineDot}`);
        if (dot) {
          const dotRect = dot.getBoundingClientRect();
          const dotAbsoluteTop = dotRect.top + scrollTop;
          
          // O item fica ativo se o progresso passou do centro do dot (+ threshold de margem)
          if (dotAbsoluteTop <= absoluteFirstDotTop + currentHeight + 2) {
            item.classList.add(styles.active);
          } else {
            item.classList.remove(styles.active);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Executa após um breve delay para garantir o correto posicionamento do layout
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={styles.timeline}>
      <div className={styles.timelineHeader}>
        <p className={styles.eyebrow}>Trajetória</p>
        <h2 className={styles.title}>Nossa Linha do Tempo</h2>
      </div>

      <div className={styles.timelineContainer} ref={containerRef}>
        {/* Linha de fundo cinza, top e height calculados dinamicamente */}
        <div 
          className={styles.timelineBaseLine} 
          style={{ top: `${lineLayout.top}px`, height: `${lineLayout.height}px` }}
        />
        
        {/* Linha de progresso em navy, top e height calculados dinamicamente */}
        <div 
          className={styles.timelineProgressBar} 
          style={{ top: `${lineLayout.top}px`, height: `${scrollHeight}px` }}
        />

        {items.map((item, index) => (
          <div
            key={item.year}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.timelineCard}>
              <div className={styles.timelineCardImage}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className={styles.timelineCardContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <p className={styles.timelineText}>{item.description}</p>
              </div>
            </div>
            <div className={styles.timelineDot} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
