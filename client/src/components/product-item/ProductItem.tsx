import styles from './product-item.module.scss';
import { ISProductItem } from './interface';

const s: ISProductItem = {
  item: styles.item,
  itemImg: styles['item__img'],
  itemName: styles['item__name'],
  itemPrice: styles['item__price'],
};

const ProductItem = () => {
  return (
    <section className={s.item}>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="other hot sale flower"
          className={s.itemImg}
        />
      </div>
      <p className={s.itemName}>Hoa xxx</p>
      <p className={s.itemPrice}>$200</p>
    </section>
  );
};

export default ProductItem;
