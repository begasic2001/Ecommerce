import { Stack } from '@mui/material';
import s from './hot-sale.module.scss';
import { ISBigSale } from './interface';

const styles: ISBigSale = {
  big: s.big,
  bigImage: s['big__image'],
  bigInfo: s['big-info'],
  bigInfoName: s['big-info__name'],
  bigInfoPrice: s['big-info__price'],
  bigRemain: s['big-remain'],
  bigRemainTxt: s['big-remain__txt'],
  bigRemainTime: s['big-remain__time'],
};

export function BigSale() {
  return (
    <Stack className={styles.big}>
      <section className={styles.bigImage}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="big sale flower"
        />
      </section>
      <Stack className={styles.bigInfo}>
        <p className={styles.bigInfoName}>Hoa Tang</p>
        <p className={styles.bigInfoPrice}>
          <em>$300</em> $225
        </p>
      </Stack>
      <Stack className={styles.bigRemain}>
        <p className={styles.bigRemainTxt}>Còn lại</p>
        <p className={styles.bigRemainTime}>43 : 22 : 17</p>
      </Stack>
    </Stack>
  );
}

export default BigSale;
