import styles from "./styles/technical-specs-accordion.module.scss";

export type TechnicalSpec = {
  label: string;
  value: string;
};

type TechnicalSpecsAccordionProps = {
  specs?: TechnicalSpec[];
};

export default function TechnicalSpecsAccordion({
  specs,
}: TechnicalSpecsAccordionProps) {
  if (!specs || specs.length === 0) {
    return null;
  }

  return (
    <details className={styles.accordion}>
      <summary className={styles.summary}>
        <span>Especificações técnicas</span>

        <svg
          className={styles.arrow}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div className={styles.content}>
        {specs.map((spec, index) => (
          <div
            className={styles.specRow}
            key={`${spec.label}-${index}`}
          >
            <span className={styles.label}>{spec.label}</span>
            <span className={styles.value}>{spec.value}</span>
          </div>
        ))}
      </div>
    </details>
  );
}