"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/brand-marquee.module.scss";


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
  if (!items || items.length === 0) return null;

  // Garante quantidade mínima de itens para que o loop infinito CSS ocorra sem cortes
  const displayItems = items.length < 5
    ? [...items, ...items, ...items, ...items]
    : items;

  return (
    <div className={`${styles.brandMarquee} ${theme === "dark" ? styles.darkTheme : ""}`}>
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
