import s from './product-item.module.scss';

const ProductItem = () => {
  return (
    <section className={s.item}>
      <div className={s['item-image']}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="other hot sale flower"
        />
      </div>
      <p className={s['item__name']}>Hoa xxx</p>
      <p className={s['item__price']}>$200</p>
    </section>
  );
};

export default ProductItem;
