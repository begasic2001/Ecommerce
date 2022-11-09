import { Stack } from '@mui/material';
import PaypalIcon from '~/assets/logo/paypal.png';
import VisaIcon from '~/assets/logo/visa.png';
import styles from './footer.module.scss';
import { ISSocial } from './interface';

const s: ISSocial = {
  social: styles.social,
  socialPaypal: styles['social__paypal'],
  socialTxt: styles['social__txt'],
};

export function SocialComponent() {
  return (
    <Stack className={s.social}>
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <section>
        <img src={VisaIcon} alt="visa image" />
        <img src={PaypalIcon} alt="paypal image" className={s.socialPaypal} />
      </section>
      <section>
        <span className={s.socialTxt}>Instagram</span>
        <span className={s.socialTxt}>Facebook</span>
      </section>
    </Stack>
  );
}
