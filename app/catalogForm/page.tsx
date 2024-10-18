'use client'
import styles from "../components/styles/form.module.scss";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import Image from "next/image";

export default function CatalogForm() {
  return (
    <div className={styles.page}>
      <script defer type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
      <Navbar activeTab="contact" />

      <section className={styles.form}>
        <div className={styles.content}>
          <Link className={styles.back} href="#" onClick={() => { window.history.back(); return false; }}>
            <Image src="/blog/arrow.png" alt="Voltar" width="60" height="60" />
          </Link>
          <div role="main" id="catalogo-retec-0dc2133dc4a31714f95a"></div>
          <script defer type="text/javascript"> new RDStationForms(`catalogo-retec-0dc2133dc4a31714f95a`, `null`).createForm();</script>
        </div>
      </section>
      <Footer />
    </div>
  );
}
