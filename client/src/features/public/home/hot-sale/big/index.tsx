import { Stack } from '@mui/material';
import s from './hot-sale.module.scss';

export function BigSaleComponent() {
  return (
    <Stack className={s.big}>
      <section className={s.image}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="big sale flower"
        />
      </section>
      <Stack direction="row" className={s.info}>
        <p className={s['info__name']}>Hoa Tang</p>
        <p className={s['info__price']}>
          <em>$300</em> $225
        </p>
      </Stack>
      <Stack direction="row" className={s.remain}>
        <p className={s['remain__txt']}>Còn lại</p>
        <p className={s['remain__time']}>43 : 22 : 17</p>
      </Stack>
    </Stack>
  );
}
