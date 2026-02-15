import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import { Button } from '../../../shared/ui';
import { useState } from 'react';

export function Form({ navTo = '/' }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const valid = emailRegex.test(newEmail);
    setEmail(newEmail);

    if (newEmail.trim() === '') {
      setError('Email is required');
      setValid(false);
    } else if (!valid) {
      setError('Valid email required');
      setValid(false);
    } else {
      setValid(true);
      setError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isValid) {
      navigate(navTo, { state: email });
    } else {
      if (email.trim() === '') {
        setError('Email is required');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} method="post">
      <label className={styles.form__label} htmlFor="email">
        Email address
        {error && <span className={styles.form__error}>{error}</span>}
      </label>
      <input
        className={`${styles.form__input} ${error ? styles.form__input_error : isValid ? styles.form__input_valid : ''}`}
        onChange={handleEmailChange}
        value={email}
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
