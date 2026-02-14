import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import { Button } from '../../../shared/ui';

export function Form({ navTo = '/' }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate(navTo);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} method="post">
      <label className={styles.form__label} htmlFor="email">
        Email address
      </label>
      <input
        className={styles.form__input}
        type="email"
        name="email"
        placeholder="email@company.com"
        id="email"
        autoComplete="email"
        required
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
}
