'use client'
import styles from "../components/styles/form.module.scss";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function ContactForm() {
  return (
    <div className={styles.page}>
      <Script src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
      <Navbar activeTab="contact" />
      <section className={styles.form}>
        <div className={styles.content}>
          <Link className={styles.back} href="#" onClick={() => { window.history.back(); return false; }}>
            <Image src="/blog/arrow.png" alt="Voltar" width="60" height="60" />
          </Link>
          <div role="main" id="retec-contato-site-duplicado-e843e562189681704ed5"></div>
          <Script id="contactForm">
            new RDStationForms(`retec-contato-site-duplicado-e843e562189681704ed5`, `null`).createForm();
          </Script>
        </div>
      </section>
      <Footer />
    </div>
  );
}
