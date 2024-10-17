import styles from "./styles/footer.module.scss";
import Image from "next/image";

export default function Footer ({}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Image className={styles.logo} src={`/home/logo-white-bg.png`} alt="Logo Grupo RETEC" width="273" height="273"/>
        <div className={styles.info}>
          <div className={styles.anchors}>
            {/* <a className={styles.anchor} href="">Produtos</a> */}
            <a className={styles.anchor} href="/projetos">Projetos</a>
            <a className={styles.anchor} href="/sobre">Sobre Nós</a>
            <a className={styles.anchor} href="/blog">Blog</a>
            <a className={styles.anchor} href="https://www.artmosferabrasil.com.br" target="_blank">Ecommerce</a>
            <a className={styles.anchor} href="https://wa.me/5561991311283?text=Gostaria%20de%20falar%20com%20a%20RETEC" target="_blank">Contato</a>
          </div>
          <div className={styles.row}>
            <p>Horário de Funcionamento: Segunda à sexta 08:00 - 18:00</p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/gruporetec/" target="_blank">
                <Image src={`/social/instagram.png`} alt="Instagram" width="29" height="29"/>
              </a>
              <a href="https://www.linkedin.com/company/gruporetec" target="_blank">
                <Image src={`/social/linkedin.png`} alt="Linkedin" width="29" height="29"/>
              </a>
              <a href="https://www.facebook.com/gruporetec" target="_blank">
                <Image src={`/social/facebook.png`} alt="Facebook" width="29" height="29"/>
              </a>
              <a href="https://www.youtube.com/@GrupoRETEC" target="_blank">
                <Image src={`/social/youtube.png`} alt="YouTube" width="29" height="29"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Grupo Retec | Por <a className={styles.detail} href="https://www.instagram.com/mdab.agencia/" target="_blank">MDAB</a></p>
      </div>
    </footer>
  );
}