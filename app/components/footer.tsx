import Image from "next/image";

import styles from "./styles/footer.module.scss";

const footerGroups = [
  {
    title: "Serviços",
    links: [
      { label: "Produtos", href: "/solucoes" },
      { label: "Obras Fornecidas", href: "/obras" },
      { label: "Suporte", href: "/#faq" },
      { label: "Sobre", href: "/sobre" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "História", href: "/#historia" },
      { label: "Equipe", href: "/sobre" },
      { label: "Contato", href: "https://wa.me/5561998904494" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Artigos", href: "/blog" },
      { label: "Recursos", href: "/blog" },
      { label: "Catálogos", href: "https://wa.me/5561998904494" },
    ],
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/gruporetec", icon: "/social/logo-facebook.svg", label: "Facebook" },
  { href: "https://www.instagram.com/gruporetec/", icon: "/social/logo-instagram.svg", label: "Instagram" },
  { href: "https://www.linkedin.com/company/gruporetec", icon: "/social/logo-linkedin.svg", label: "LinkedIn" },
  { href: "https://www.youtube.com/@GrupoRETEC", icon: "/social/logo-youtube.svg", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerCard}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogoBadge}>
                <Image
                  src="/logo-since-blue.svg"
                  alt="Grupo RETEC"
                  width={109}
                  height={38}
                />
              </div>
            </div>

            {footerGroups.map((group) => (
              <div className={styles.footerColumn} key={group.title}>
                <h3 className={styles.footerColumnTitle}>{group.title}</h3>
                <div className={styles.footerLinks}>
                  {group.links.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Goiânia</h3>
              <div className={styles.footerAddress}>
                <p>Av. Caiapó, 452 - St. Genoveva</p>
                <p>CEP: 74672-400</p>
                <p>(62) 3204-6782</p>
                <p>Segunda a Sexta</p>
                <p>8h às 18h</p>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Brasília</h3>
              <div className={styles.footerAddress}>
                <p>SIA Trecho 17 Rua 17 Nº 1380</p>
                <p>CEP: 71.200-249</p>
                <p>(61) 3363-7310</p>
                <p>Segunda a Sexta</p>
                <p>8h às 18h</p>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerCredits}>
              <p>© 2026 Grupo RETEC. Todos os direitos reservados.</p>
            </div>

            <div className={styles.socialRow}>
              {socialLinks.map((social) => (
                <a
                  className={styles.socialIcon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  key={social.label}
                >
                  <Image src={social.icon} alt="" width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
