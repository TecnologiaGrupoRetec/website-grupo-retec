import styles from "./styles/cta.module.scss";
import Button from "./button";

export default function Cta () {
  return (
    <section className={styles.cta}>
        <div className={styles.content}>
          <h2 className={styles.title}>BAIXE AGORA SEU <b>CATÁLOGO EXCLUSIVO</b> DE PRODUTOS</h2>
          <a href="https://wa.me/5561998904494?text=Gostaria%20de%20receber%20o%20Cat%C3%A1logo%20de%20Produtos%20do%20Grupo%20RETEC" target="_blank" rel="noopener noreferrer"> 
            <Button>BAIXE AGORA</Button>
          </a>
        </div>
      </section>
  );
}