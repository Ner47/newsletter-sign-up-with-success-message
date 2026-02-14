import styles from './Button.module.css';

export function Button({ children, type }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
