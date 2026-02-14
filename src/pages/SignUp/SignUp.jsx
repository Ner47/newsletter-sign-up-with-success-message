import {
  illustrationSignUpDesktop,
  illustrationSignUpMobile,
  illustrationSignUpTablet,
} from '../../shared/assets';
import styles from './SignUp.module.css';
import { iconList } from '../../shared/assets';
import { Form } from '../../feature/form';

export function SignUp() {
  return (
    <article className={styles.sign_up}>
      <div className={styles.sign_up__info}>
        <h1 className={styles.sign_up__title}>Stay updated!</h1>
        <p className={styles.sign_up__text}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className={styles.sign_up__list}>
          <li className={styles.sign_up__check}>
            <img className={styles.sign_up__icon} src={iconList} alt="" aria-hidden="true" />
            Product discovery and building what matters
          </li>
          <li className={styles.sign_up__check}>
            <img className={styles.sign_up__icon} src={iconList} alt="" aria-hidden="true" />
            Measuring to ensure updates are a success
          </li>
          <li className={styles.sign_up__check}>
            <img className={styles.sign_up__icon} src={iconList} alt="" aria-hidden="true" />
            And much more!
          </li>
        </ul>
        <Form navTo="/" />
      </div>
      <picture>
        <source srcSet={illustrationSignUpDesktop} media="(min-width: 1024px)" />
        <source srcSet={illustrationSignUpTablet} media="(min-width: 376px)" />
        <img className={styles.sign_up__img} src={illustrationSignUpMobile} alt="" />
      </picture>
    </article>
  );
}
