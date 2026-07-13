import Image from 'next/image';
import styles from './styles/articleCard.module.scss'
import Link from 'next/link';

export default function ArticleCard({
  imgSrc,
  imgAlt,
  title,
  lead,
  author,
  path,
  data
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  lead: string;
  author: string;
  path: string;
  data: string;
  tag: string;
}) {
  const avatarSrc = author === "Patrick Galletti" ? "/blog/patrick.png" : "/blog/patrick.png";

  return (
    <Link href={`/blog/${path}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Image
            className={styles.img}
            src={imgSrc}
            alt={imgAlt}
            width={360}
            height={240}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.date}>{data}</span>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.lead}>
            {lead}
          </p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.authorArea}>
            <div className={styles.avatarWrapper}>
              <Image
                className={styles.avatar}
                src={avatarSrc}
                alt={author}
                width={32}
                height={32}
              />
              <span className={styles.tooltip}>{author}</span>
            </div>
            <span className={styles.authorName}>{author}</span>
          </div>
          <span className={styles.readMore}>
            Ler mais <span className={styles.arrow}>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}