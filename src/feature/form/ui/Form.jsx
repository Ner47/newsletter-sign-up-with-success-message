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
  const errorId = 'email-error';

  const handleEmailChange = (event) => {
    setValid(emailRegex.test(event.target.value));
    setError('');
    setEmail(event.target.value);
  };

  const validateEmail = (value) => {
    if (!value.trim()) return 'Email is required';
    if (!emailRegex.test(value)) return 'Valid email required';
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextError = validateEmail(email);
    setError(nextError);
    if (nextError) return;
    navigate(navTo, { state: { email } });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} method="post" noValidate>
      <label className={styles.form__label} htmlFor="email">
        Email address
        {error && (
          <span id={errorId} role="alert" className={styles.form__error}>
            {error}
          </span>
        )}
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
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
}
