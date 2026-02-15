import { useLocation } from 'react-router-dom';
import { iconSuccess } from '../../shared/assets';
import { Button } from '../../shared/ui';
import styles from './Success.module.css';
import { useState } from 'react';

export function Success() {
  const [isVisible, SetVisible] = useState(true);
  const location = useLocation();
  const email = location.state;

  const handleClose = () => {
    SetVisible(false);
  };

  if (!isVisible) {
    return null;
  }

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
      <Button onDismiss={handleClose}>Dismiss message</Button>
    </article>
  );
}
