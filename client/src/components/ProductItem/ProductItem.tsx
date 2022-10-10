import * as S from './product-item.style';

const ProductItem = () => {
  return (
    <S.ProductItem>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="other hot sale flower"
          className="product-item__img"
        />
      </section>
      <p className="product-item__name">Hoa xxx</p>
      <p className="product-item__price">$200</p>
    </S.ProductItem>
  );
};

export default ProductItem;
