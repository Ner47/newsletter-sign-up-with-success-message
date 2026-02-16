import { useLocation, useNavigate } from 'react-router-dom';
import { iconSuccess } from '../../shared/assets';
import { Button } from '../../shared/ui';
import styles from './Success.module.css';
import { useEffect } from 'react';

export function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) navigate('/');
  }, [email, navigate]);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <article className={styles.success}>
      <div>
        <img className={styles.success__icon} src={iconSuccess} alt="" aria-hidden="true" />
        <h1 className={styles.success__title}>Thanks for subscribing!</h1>
        <p className={styles.success__text}>
          A confirmation email has been sent to{' '}
          <span className={styles.success__accent}>{email}</span>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
      <Button type="button" onClick={handleClose}>
        Dismiss message
      </Button>
    </article>
  );
}
