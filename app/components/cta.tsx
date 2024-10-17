import styles from "./styles/cta.module.scss";
import Button from "./button";

export default function Cta () {
  return (
    <section className={styles.cta}>
        <div className={styles.content}>
          <h2 className={styles.title}>BAIXE AGORA SEU <b>CATÁLOGO EXCLUSIVO</b> DE PRODUTOS</h2>
          <a href="/catalogForm"> 
            <Button>BAIXE AGORA</Button>
          </a>
        </div>
      </section>
  );
}