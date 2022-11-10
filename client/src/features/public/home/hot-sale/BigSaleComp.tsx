import s from './hot-sale.module.scss';

export function BigSaleComponent() {
  return (
    <section className={s.big}>
      <section className={s['big__image']}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="big sale flower"
        />
      </section>
      <section className={s['big-info']}>
        <p className={s['big-info__name']}>Hoa Tang</p>
        <p className={s['big-info__price']}>
          <em>$300</em> $225
        </p>
      </section>
      <section className={s['big-remain']}>
        <p className={s['big-remain__txt']}>Còn lại</p>
        <p className={s['big-remain__time']}>43 : 22 : 17</p>
      </section>
    </section>
  );
}
