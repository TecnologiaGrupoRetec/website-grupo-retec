'use client'
import Image from "next/image";
import styles from "./styles/navbar.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ activeTab }: { activeTab: string; }) {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const isTabActive = (tabName: string): string | undefined => {
    return tabName === activeTab ? styles.active : undefined;
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className={styles.navbar}>
          <Link href="/">
            <Image src="/logo-since-white-no-bg.svg" alt="RETEC Logo" width="110" height="39" />
          </Link>
          <div className={`${styles.navItemGroup} ${isActive ? styles.active : ''}`}>
            <nav className={styles.navItem}>
              <Link className={isTabActive('home')} href="/">Home</Link>
            </nav>
            <nav className={styles.navItem}>
              <Link className={isTabActive('projects')} href="/obras">Obras</Link>
            </nav>
            <nav className={styles.navItem}>
              <Link className={isTabActive('about')} href="/sobre">Sobre</Link>
            </nav>
            <nav className={styles.navItem}>
              <Link className={isTabActive('ecommerce')} href="https://www.artmosferabrasil.com.br" target="_blank">E-Commerce</Link>
            </nav>
            <nav className={styles.navItem}>
              <Link className={isTabActive('blog')} href="/blog">Blog</Link>
            </nav>
            <nav className={styles.navItem}>
              <a className={isTabActive('contact')} href="https://wa.me/5561991311283">Contato</a>
            </nav>
          </div>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};
