import styles from './Button.module.css';

export function Button({ children, type, onClick, ...props }) {
  return (
    <button onClick={onClick} className={styles.button} type={type} {...props}>
      {children}
    </button>
  );
}
