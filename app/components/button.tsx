import styles from "./styles/button.module.scss";

export default function Button({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className={styles.button}>
      { children }
    </button>
  );
}