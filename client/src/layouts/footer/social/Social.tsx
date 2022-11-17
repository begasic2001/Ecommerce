import PaypalIcon from '~/assets/logo/paypal.png';
import VisaIcon from '~/assets/logo/visa.png';
import s from './social.module.scss';

function Social() {
  return (
    <section className={s.social}>
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <section>
        <img src={VisaIcon} alt="visa image" />
        <img src={PaypalIcon} alt="paypal image" className={s.socialPaypal} />
      </section>
      <section>
        <span className={s.socialTxt}>Instagram</span>
        <span className={s.socialTxt}>Facebook</span>
      </section>
    </section>
  );
}

export default Social;
