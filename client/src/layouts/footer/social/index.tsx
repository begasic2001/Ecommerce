import PaypalIcon from '~/assets/logo/paypal.png';
import VisaIcon from '~/assets/logo/visa.png';
import s from './social.module.scss';

export function SocialComponent() {
  return (
    <section className={s.social}>
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <section>
        <img src={VisaIcon} alt="visa image" />
        <img src={PaypalIcon} alt="paypal image" className={s['social__paypal']} />
      </section>
      <section>
        <span className={s['social__txt']}>Instagram</span>
        <span className={s['social__txt']}>Facebook</span>
      </section>
    </section>
  );
}
