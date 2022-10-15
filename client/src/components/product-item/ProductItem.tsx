import * as S from './product-item.style';

const ProductItem = () => {
  return (
    <S.ProductItem>
      <S.ProductImg>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="other hot sale flower"
        />
      </S.ProductImg>
      <p className="item__name">Hoa xxx</p>
      <p className="item__price">$200</p>
    </S.ProductItem>
  );
};

export default ProductItem;
