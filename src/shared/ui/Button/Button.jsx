import styles from './Button.module.css';

export function Button({ children, type, onDismiss }) {
  return (
    <button onClick={onDismiss} className={styles.button} type={type}>
      {children}
    </button>
  );
}
