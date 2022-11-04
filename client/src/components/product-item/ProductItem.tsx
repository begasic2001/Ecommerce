import s from './product-item.module.scss';
import { ISProductItem } from './interface';

const styles: ISProductItem = {
  item: s.item,
  itemImage: s['item__image'],
  itemName: s['item__name'],
  itemPrice: s['item__price'],
};

const ProductItem = () => {
  return (
    <section className={styles.item}>
      <div className={styles.itemImage}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="other hot sale flower"
        />
      </div>
      <p className={styles.itemName}>Hoa xxx</p>
      <p className={styles.itemPrice}>$200</p>
    </section>
  );
};

export default ProductItem;
