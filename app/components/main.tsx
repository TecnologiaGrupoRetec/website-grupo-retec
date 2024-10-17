import styles from "./styles/main.module.scss";

export default function Main ({
  children,
  title,
  subtitle
}: Readonly<{
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}>) {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h2 className={styles.subtitle}>
          { subtitle }
        </h2>
        <h3 className={styles.title}>
          { title }
        </h3>
        { children }
      </section>
    </main>
  );
}