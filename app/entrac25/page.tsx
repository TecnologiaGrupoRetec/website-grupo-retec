'use client'
import styles from "../components/styles/form.module.scss";
import Navbar from "../components/navbar";
import Footer from '../components/footer';

export default function ContactForm() {

  return (
    <div className={styles.page}>
      <script defer type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
      <section className={styles.form}>
        <div className={styles.content}>
          <Navbar activeTab="contact" />
          <div role="main" id="entrac-2025-06ba4a9f5604786fa1b3"></div>
          <script defer type="text/javascript"> new RDStationForms(`entrac-2025-06ba4a9f5604786fa1b3`, `null`).createForm();</script>
        </div>
      </section>
      <Footer />
    </div>
  );
}
