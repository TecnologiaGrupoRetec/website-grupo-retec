import styles from "./styles/main.module.scss";
import Image from "next/image";

export default function Main ({
  children,
  title,
  subtitle,
  bgImage,
  className
}: Readonly<{
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  bgImage?: string;
  className?: string;
}>) {
  return (
    <main className={`${styles.main} ${className || ""}`}>
      {bgImage && (
        <Image
          className={styles.background}
          src={bgImage}
          alt="Imagem de fundo"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )}
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