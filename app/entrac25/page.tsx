'use client'
import styles from "../components/styles/form.module.scss";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Script from "next/script";

export default function Entrac25Form() {
  return (
    <div className={styles.page}>
      <Script src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
      <section className={styles.form}>
        <div className={styles.content}>
          <Navbar activeTab="contact" />
          <div role="main" id="entrac-2025-06ba4a9f5604786fa1b3"></div>
          <Script id="entrac25Form">
            new RDStationForms(`entrac-2025-06ba4a9f5604786fa1b3`, `null`).createForm();
          </Script>
          <script defer type="text/javascript"> </script>
        </div>
      </section>
      <Footer />
    </div>
  );
}
