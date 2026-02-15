import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <article className={styles.not_found}>
      <h1 className={styles.not_found__title}>404</h1>
      <p className={styles.not_found__text}>Page Not Found</p>
    </article>
  );
}
