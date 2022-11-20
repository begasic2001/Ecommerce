import { useContext, createContext } from 'react';
import { IStoreProductDetail, IStoreProductDetailProps } from '~/interface/store.type';

const ThemeContext = createContext<IStoreProductDetail | null>(null);

function ProductDetailProvider(props: IStoreProductDetailProps) {
  const { productDetail, children } = props;

  const valueContext = {
    productDetail,
  };

  return <ThemeContext.Provider value={valueContext}>{children}</ThemeContext.Provider>;
}

function useProductDetailContext() {
  const context = useContext(ThemeContext);
  if (typeof context === 'undefined')
    throw new Error('useProductDetailContext must be used within a ProductDetailProvider');

  return context;
}

export { useProductDetailContext };
export default ProductDetailProvider;
