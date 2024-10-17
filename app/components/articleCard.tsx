import Image from 'next/image';
import styles from './styles/articleCard.module.scss'
import Link from 'next/link';

export default function ArticleCard ({
  imgSrc,
  imgAlt,
  title,
  lead,
  author,
  path
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  lead: string;
  author: string;
  path: string;
}) {
  return (
    <Link href={`/blog/${path}`}>
      <div className={styles.card}>
        <Image className={styles.img} src={imgSrc} alt={imgAlt} width="360" height="240"/>
        <h3 className={styles.title}>
          { title }
        </h3>
        <p className={styles.lead}>
          { lead }
        </p>
        <span className={styles.author}>
          { author }
        </span>
      </div>
    </Link>
  );
}