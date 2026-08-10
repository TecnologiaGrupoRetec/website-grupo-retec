"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/navbar.module.scss";

type NavbarProps = {
  activeTab?: string;
};

export default function Navbar(props: NavbarProps) {
  void props.activeTab;
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);

  const produtosTimer = useRef<NodeJS.Timeout | null>(null);
  const solucoesTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };


    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAll = () => {
    if (produtosTimer.current) clearTimeout(produtosTimer.current);
    if (solucoesTimer.current) clearTimeout(solucoesTimer.current);
    setIsOpen(false);
    setProdutosOpen(false);
    setSolucoesOpen(false);
  };

  const handleProdutosEnter = () => {
    if (produtosTimer.current) clearTimeout(produtosTimer.current);
    produtosTimer.current = setTimeout(() => {
      setProdutosOpen(true);
    }, 120);
  };

  const handleProdutosLeave = () => {
    if (produtosTimer.current) clearTimeout(produtosTimer.current);
    produtosTimer.current = setTimeout(() => {
      setProdutosOpen(false);
    }, 150);
  };

  const handleSolucoesEnter = () => {
    if (solucoesTimer.current) clearTimeout(solucoesTimer.current);
    solucoesTimer.current = setTimeout(() => {
      setSolucoesOpen(true);
    }, 120);
  };

  const handleSolucoesLeave = () => {
    if (solucoesTimer.current) clearTimeout(solucoesTimer.current);
    solucoesTimer.current = setTimeout(() => {
      setSolucoesOpen(false);
    }, 150);
  };

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
            <Link className={styles.logoLink} href="/" onClick={closeAll}>
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
              checked={isOpen}
              onChange={(e) => setIsOpen(e.target.checked)}
            />
            <label className={styles.navToggleButton} htmlFor="site-nav-toggle">
              <span className={styles.navToggleBar} />
              <span className={styles.navToggleBar} />
              <span className={styles.navToggleBar} />
            </label>

            <div className={styles.navMenu}>
              <nav className={styles.navLinks} aria-label="Navegacao principal">
                <Link href="/sobre" onClick={closeAll}>Sobre</Link>
                <details
                  className={styles.navDropdown}
                  open={produtosOpen}
                  onToggle={(e) => setProdutosOpen(e.currentTarget.open)}
                  onMouseEnter={handleProdutosEnter}
                  onMouseLeave={handleProdutosLeave}
                >
                  <summary className={styles.navDropdownTrigger}>
                    <Link href="/solucoes" onClick={closeAll}>Produtos</Link>
                    <span className={styles.navDropdownArrow} aria-hidden="true" />
                  </summary>
                  <div className={styles.navDropdownMenu}>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/expansao-direta"
                      onClick={closeAll}
                    >
                      Expansão Direta
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/agua-gelada-e-rejeicao-de-calor"
                      onClick={closeAll}
                    >
                      Água Gelada & Rejeição de Calor
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/exaustao-e-ventilacao"
                      onClick={closeAll}
                    >
                      Exaustão & Ventilação
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/difusao-e-controle-de-ar"
                      onClick={closeAll}
                    >
                      Difusão & Controle de Ar
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/dutos-e-rede-de-ar"
                      onClick={closeAll}
                    >
                      Dutos & Rede de Ar
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/isolamento-termico-e-acustico"
                      onClick={closeAll}
                    >
                      Isolamento Térmico & Acústico
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/filtragem-e-qualidade-do-ar"
                      onClick={closeAll}
                    >
                      Filtragem & Qualidade do Ar
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/suporte-fixacao-e-instalacao"
                      onClick={closeAll}
                    >
                      Suporte, Fixação e Instalação
                    </Link>
                  </div>
                </details>
                <Link href="https://www.loja.gruporetec.com.br/" onClick={closeAll}>Loja Virtual</Link>
                <details
                  className={styles.navDropdown}
                  open={solucoesOpen}
                  onToggle={(e) => setSolucoesOpen(e.currentTarget.open)}
                  onMouseEnter={handleSolucoesEnter}
                  onMouseLeave={handleSolucoesLeave}
                >
                  <summary className={styles.navDropdownTrigger}>
                    <Link href="/solucoes" onClick={closeAll}>Soluções</Link>
                    <span className={styles.navDropdownArrow} aria-hidden="true" />
                  </summary>
                  <div className={styles.navDropdownMenu}>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/hospitais-clinicas"
                      onClick={closeAll}
                    >
                      Hospitais
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/industrias-farmaceuticas-processos-industriais"
                      onClick={closeAll}
                    >
                      Laboratórios
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/residencial-alto-padrao"
                      onClick={closeAll}
                    >
                      Residências de Alto Padrão
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/hoteis"
                      onClick={closeAll}
                    >
                      Hotéis
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/industrias-farmaceuticas-processos-industriais"
                      onClick={closeAll}
                    >
                      Indústrias
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/shopping-centers"
                      onClick={closeAll}
                    >
                      Shopping Centers
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/predios-comerciais"
                      onClick={closeAll}
                    >
                      Edifícios Corporativos
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/data-centers-missao-critica"
                      onClick={closeAll}
                    >
                      Data Centers
                    </Link>
                    <Link
                      className={styles.navDropdownItem}
                      href="/solucoes/predios-comerciais"
                      onClick={closeAll}
                    >
                      Retrofit
                    </Link>
                  </div>
                </details>
                <Link href="/obras" onClick={closeAll}>Obras</Link>
                <Link href="/blog" onClick={closeAll}>Blog</Link>
              </nav>

              <a
                className={styles.navCta}
                href="https://wa.me/5561998904494"
                target="_blank"
                rel="noreferrer"
                onClick={closeAll}
              >
                Falar com o consultor
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
