import { Stack } from '@mui/material';
import s from './hot-sale.module.scss';

export function BigSale() {
  return (
    <Stack className={s.big}>
      <section className={s['big__image']}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="big sale flower"
        />
      </section>
      <Stack className={s['big-info']}>
        <p className={s['big-info__name']}>Hoa Tang</p>
        <p className={s['big-info__price']}>
          <em>$300</em> $225
        </p>
      </Stack>
      <Stack className={s['big-remain']}>
        <p className={s['big-remain__txt']}>Còn lại</p>
        <p className={s['big-remain__time']}>43 : 22 : 17</p>
      </Stack>
    </Stack>
  );
}

export default BigSale;
