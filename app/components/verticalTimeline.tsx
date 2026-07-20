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
  const [activeIndexes, setActiveIndexes] = useState<boolean[]>([]);

  const firstDotTopRef = useRef(0);
  const lastDotTopRef = useRef(0);
  const totalLineHeightRef = useRef(0);
  const containerTopRef = useRef(0);
  const dotsPositionsRef = useRef<number[]>([]);

  useEffect(() => {
    const calculateLayout = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const absoluteContainerTop = rect.top + scrollTop;
      containerTopRef.current = absoluteContainerTop;

      const itemElements = container.querySelectorAll(`.${styles.timelineItem}`);
      if (itemElements.length === 0) return;

      const firstDot = itemElements[0].querySelector(`.${styles.timelineDot}`);
      const lastDot = itemElements[itemElements.length - 1].querySelector(`.${styles.timelineDot}`);

      if (!firstDot || !lastDot) return;

      const firstDotRect = firstDot.getBoundingClientRect();
      const lastDotRect = lastDot.getBoundingClientRect();

      const absoluteFirstDotTop = firstDotRect.top + scrollTop;
      const absoluteLastDotTop = lastDotRect.top + scrollTop;

      firstDotTopRef.current = absoluteFirstDotTop;
      lastDotTopRef.current = absoluteLastDotTop;

      const lineTop = absoluteFirstDotTop - absoluteContainerTop + (firstDotRect.height / 2);
      const totalLineHeight = absoluteLastDotTop - absoluteFirstDotTop;
      totalLineHeightRef.current = totalLineHeight;

      setLineLayout({ top: lineTop, height: totalLineHeight });

      // Cache all dots positions relative to page
      const positions: number[] = [];
      itemElements.forEach((item) => {
        const dot = item.querySelector(`.${styles.timelineDot}`);
        if (dot) {
          const dotRect = dot.getBoundingClientRect();
          positions.push(dotRect.top + scrollTop);
        }
      });
      dotsPositionsRef.current = positions;
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const absoluteFirstDotTop = firstDotTopRef.current;
      const totalLineHeight = totalLineHeightRef.current;

      if (!absoluteFirstDotTop || !totalLineHeight) return;

      const viewportHeight = window.innerHeight;
      const windowMiddle = scrollTop + (viewportHeight / 2);

      let currentHeight = windowMiddle - absoluteFirstDotTop;
      currentHeight = Math.max(0, Math.min(totalLineHeight, currentHeight));

      setScrollHeight(currentHeight);

      // Declarative active indices update
      const newActiveIndexes = dotsPositionsRef.current.map((dotAbsoluteTop) => {
        return dotAbsoluteTop <= absoluteFirstDotTop + currentHeight + 2;
      });

      setActiveIndexes(newActiveIndexes);
    };

    const handleInitAndResize = () => {
      calculateLayout();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleInitAndResize);

    // Executa após um breve delay para garantir o correto posicionamento do layout
    const timer = setTimeout(handleInitAndResize, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleInitAndResize);
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
            } ${activeIndexes[index] ? styles.active : ""}`}
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
