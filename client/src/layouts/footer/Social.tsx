import { Stack } from '@mui/material';
import PaypalIcon from '~/assets/logo/paypal.png';
import VisaIcon from '~/assets/logo/visa.png';
import s from './footer.module.scss';

export function SocialPart() {
  return (
    <Stack className={s.social}>
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <section>
        <img src={VisaIcon} alt="visa image" />
        <img src={PaypalIcon} alt="paypal image" className={s['social__icn--paypal']} />
      </section>
      <section>
        <span className={s['social__txt']}>Instagram</span>
        <span className={s['social__txt']}>Facebook</span>
      </section>
    </Stack>
  );
}
