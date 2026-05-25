import Image from "next/image";
import Link from "next/link";

import styles from "./styles/navbar.module.scss";

type NavbarProps = {
  activeTab?: string;
};

export default function Navbar(props: NavbarProps) {
  void props.activeTab;

  return (
    <header className={styles.navbarSection}>
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
              <Link href="/obras">Obras</Link>
              <Link href="/blog">Blog</Link>
              <a href="/#processo">Serviços</a>
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
            </nav>

            <a
              className={styles.navCta}
              href="https://wa.me/5561991311283"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar Orcamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
