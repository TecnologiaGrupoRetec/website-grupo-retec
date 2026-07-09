"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/navbar.module.scss";

type NavbarProps = {
  activeTab?: string;
};

export default function Navbar(props: NavbarProps) {
  void props.activeTab;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check on mount (in case the user starts page refreshed while scrolled)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.topTicker}>
        <div className={styles.tickerTrack}>
          {Array(8).fill("Líder em fornecimento de produtos HVAC no Centro-Oeste").map((text, i) => (
            <span key={i} className={styles.tickerText}>
              {text}
            </span>
          ))}
        </div>
      </div>
      <header className={`${styles.navbarSection} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navbarShell}>
            <Link className={styles.logoLink} href="/">
              <Image
                src="/logo-since-white-no-bg.svg"
                alt="Grupo RETEC"
                width={109}
                height={38}
                priority
              />
            </Link>

            <input
              className={styles.navToggle}
              id="site-nav-toggle"
              type="checkbox"
            />
            <label className={styles.navToggleButton} htmlFor="site-nav-toggle">
              <span className={styles.navToggleBar} />
              <span className={styles.navToggleBar} />
              <span className={styles.navToggleBar} />
            </label>

            <div className={styles.navMenu}>
              <nav className={styles.navLinks} aria-label="Navegacao principal">
                <Link href="/sobre">Sobre</Link>
                <Link href="/solucoes">Soluções</Link>
                <details className={styles.navDropdown}>
                  <summary className={styles.navDropdownTrigger}>
                    Loja Virtual
                    <span className={styles.navDropdownArrow} aria-hidden="true" />
                  </summary>
                  <div className={styles.navDropdownMenu}>
                    <a
                      className={styles.navDropdownItem}
                      href="https://www.artmosferabrasil.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      E-commerce
                    </a>
                    <a
                      className={styles.navDropdownItem}
                      href="https://www.mercadolivre.com.br/pagina/ra20250419195946#from=share_eshop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mercado Livre
                    </a>
                  </div>
                </details>
                <Link href="/obras">Obras</Link>
                <Link href="/blog">Blog</Link>
              </nav>

              <a
                className={styles.navCta}
                href="https://wa.me/5561991311283"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
