import { Stack } from '@mui/material';
import PaypalIcon from '~/assets/logo/paypal.png';
import VisaIcon from '~/assets/logo/visa.png';
import s from './footer.module.scss';
import { ISSocialPart } from './interface';

const styles: ISSocialPart = {
  social: s.social,
  socialPaypal: s['social__paypal'],
  socialTxt: s['social__txt'],
};

export function SocialPart() {
  return (
    <Stack className={styles.social}>
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <section>
        <img src={VisaIcon} alt="visa image" />
        <img src={PaypalIcon} alt="paypal image" className={styles.socialPaypal} />
      </section>
      <section>
        <span className={styles.socialTxt}>Instagram</span>
        <span className={styles.socialTxt}>Facebook</span>
      </section>
    </Stack>
  );
}
