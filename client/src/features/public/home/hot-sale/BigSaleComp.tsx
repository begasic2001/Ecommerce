import { Stack } from '@mui/material';
import s from './hot-sale.module.scss';
import { ISBigSale } from './interface';

const styles: ISBigSale = {
  big: s.big,
  bigImage: s['big__image'],
  info: s['big-info'],
  infoName: s['big-info__name'],
  infoPrice: s['big-info__price'],
  remain: s['big-remain'],
  remainTxt: s['big-remain__txt'],
  remainTime: s['big-remain__time'],
};

export function BigSaleComponent() {
  return (
    <section className={styles.big}>
      <section className={styles.bigImage}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="big sale flower"
        />
      </section>
      <section className={styles.info}>
        <p className={styles.infoName}>Hoa Tang</p>
        <p className={styles.infoPrice}>
          <em>$300</em> $225
        </p>
      </section>
      <section className={styles.remain}>
        <p className={styles.remainTxt}>Còn lại</p>
        <p className={styles.remainTime}>43 : 22 : 17</p>
      </section>
    </section>
  );
}

