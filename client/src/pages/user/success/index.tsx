import { Stack } from '@mui/system';
import clsx from 'clsx';
import CheckedImg from '~/assets/icons/checked.png';

function Success() {
  return (
    <section className={clsx('success', 'mt-100')}>
      <Stack className="items-center">
        <img src={CheckedImg} alt="checked icon" className="block h-150 w-150" />
        <h2 className="mt-20 text-25 font-bold">Chúc mừng !!! Bạn đã thanh toán thành công</h2>
      </Stack>
    </section>
  );
}

export default Success;
