import { Stack } from '@mui/material';
import clsx from 'clsx';
import PaypalIcon from '~/assets/icons/paypal.png';
import VisaIcon from '~/assets/icons/visa.png';

const styles = {
  row: 'justify-between py-20 text-12',
  paypal: 'ml-10',
  social: {
    base: 'uppercase hover:cursor-pointer hover:text-txt-3',
    margin: 'ml-10',
  },
};

function Social() {
  return (
    <Stack direction="row" className="justify-between py-20 text-12">
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <Stack direction="row">
        <img src={VisaIcon} alt="visa image" />
        <img src={PaypalIcon} alt="paypal image" className="ml-10" />
      </Stack>
      <section>
        <span className={clsx('uppercase', 'hover:cursor-pointer hover:text-txt-3')}>Instagram</span>
        <span className={clsx('ml-10 uppercase', 'hover:cursor-pointer hover:text-txt-3')}>Facebook</span>
      </section>
    </Stack>
  );
}

export { Social };
