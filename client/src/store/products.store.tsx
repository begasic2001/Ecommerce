import { useContext, createContext } from 'react';
import { IStoreProduct, IStoreProductProps } from '~/interface/store.type';

const ThemeContext = createContext<IStoreProduct | null>(null);

function ProductProvider(props: IStoreProductProps) {
  const { productProvider, children } = props;

  return <ThemeContext.Provider value={productProvider}>{children}</ThemeContext.Provider>;
}

function useProductContext() {
  const context = useContext(ThemeContext);
  if (typeof context === 'undefined')
    throw new Error('useProductContext must be used within a ProductProvider');

  return context;
}

export { useProductContext };
export default ProductProvider;
