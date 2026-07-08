"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles/brand-marquee.module.scss";

// Dynamic map to resolve product manufacturer logos
const brandLogos: Record<string, string> = {
  "daikin": "/home/empresas_representantes/daikin.png",
  "trox": "/home/empresas_representantes/trox.png",
  "evapco": "/home/empresas_representantes/evapco.png",
  "armacell": "/home/empresas_representantes/armacell.png",
  "sicflux": "/home/empresas_representantes/sicflux.png",
  "imi": "/home/empresas_representantes/imi.png",
  "imi hydronic": "/home/empresas_representantes/imi.png",
  "multivac": "/home/empresas_representantes/multivac.png",
  "armstrong": "/home/empresas_representantes/armstrong.png",
  "projelmec": "/home/empresas_representantes/projelmec.png",
};

export interface BrandItem {
  name: string;
  logoUrl?: string;
  link?: string;
}

interface BrandMarqueeProps {
  items: BrandItem[];
  theme?: "light" | "dark";
}

export default function BrandMarquee({ items, theme = "light" }: BrandMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // If there are very few items, duplicate them multiple times so the infinite scroll resets smoothly
  const displayItems = items.length < 5
    ? [...items, ...items, ...items, ...items]
    : items;

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || displayItems.length === 0) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        marquee.scrollLeft += 0.8; // scroll speed
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, displayItems.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    setIsDragging(true);
    startXRef.current = e.pageX - marquee.offsetLeft;
    scrollLeftRef.current = marquee.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const x = e.pageX - marquee.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // speed multiplier
    marquee.scrollLeft = scrollLeftRef.current - walk;

    // Wrap around borders
    if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
      marquee.scrollLeft = 0;
    } else if (marquee.scrollLeft <= 0) {
      marquee.scrollLeft = marquee.scrollWidth / 2;
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={marqueeRef}
      className={`${styles.brandMarquee} ${theme === "dark" ? styles.darkTheme : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
    >
      <div className={styles.brandTrack}>
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className={styles.brandRow}
            aria-hidden={groupIndex === 1}
          >
            {displayItems.map((item, idx) => {
              const cleanName = item.name.toLowerCase().trim();
              const resolvedLogo = item.logoUrl || brandLogos[cleanName] || brandLogos[cleanName.replace(/\s+/g, "")];

              const CardContent = resolvedLogo ? (
                <Image
                  className={styles.brandLogo}
                  src={resolvedLogo}
                  alt={item.name}
                  width={220}
                  height={88}
                  draggable={false}
                />
              ) : (
                <span className={styles.textLogo}>{item.name}</span>
              );

              return item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={`${groupIndex}-${idx}-${item.name}`}
                  className={styles.brandCard}
                  onClick={(e) => isDragging && e.preventDefault()} // Prevent clicking while dragging
                >
                  {CardContent}
                </a>
              ) : (
                <div key={`${groupIndex}-${idx}-${item.name}`} className={styles.brandCard}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
