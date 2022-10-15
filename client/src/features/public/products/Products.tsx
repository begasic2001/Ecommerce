import { ProductFilter } from './ProductFilter';
import { ProductList } from './ProductList';
import * as S from './products.style';

const items: number[] = Array(20).fill(0);

const Products = () => {
  return (
    <S.Products>
      <S.Content>
        <ProductFilter />
        <ProductList />
      </S.Content>
    </S.Products>
  );
};

export default Products;
