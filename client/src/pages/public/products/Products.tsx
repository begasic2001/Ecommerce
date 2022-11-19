import { useEffect, useState } from 'react';
import { productApi, categoryApi } from '~/api';
import { ProductList } from '~/features/public/products/product-list';
import { IInitialData, IInitialProductList } from './interface.type';

const ProductsPage = () => {
  const [productList, setProductList] = useState<IInitialProductList>(() => {
    const stringifySearchParams = sessionStorage.getItem('queryParams') || '{}';
    const searchParams = JSON.parse(stringifySearchParams);
    const initialParams = {
      _page: 1,
      _limit: 12,
    };

    if (Object.keys(searchParams).length > 0) {
      sessionStorage.removeItem('queryParams');
      return {
        queryParams: searchParams,
        loading: true,
        data: [],
        err: null,
      };
    } else {
      return {
        queryParams: initialParams,
        loading: true,
        data: [],
        err: null,
      };
    }
  });
  const [categoryList, setCategoryList] = useState<IInitialData>({
    loading: true,
    data: [],
    err: null,
  });
  const [subCategoryList, setSubCategoryList] = useState<IInitialData>({
    loading: true,
    data: [],
    err: null,
  });

  const [categoryCheckbox, setCategoryCheckbox] = useState<string[]>([]);
  const [subCategoryCheckbox, setSubCategoryCheckbox] = useState<string[]>([]);

  const handleCategoryChecked = (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const { target } = e;
    if (target) {
      if (categoryCheckbox.includes((target as HTMLInputElement).value))
        setCategoryCheckbox((prevState) =>
          prevState.filter((item) => item !== (target as HTMLInputElement).value)
        );
      else setCategoryCheckbox((prevState) => [...prevState, (target as HTMLInputElement).value]);
    }
  };

  const handleSubCategoryChecked = (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const { target } = e;
    if (target) {
      if (subCategoryCheckbox.includes((target as HTMLInputElement).value))
        setSubCategoryCheckbox((prevState) =>
          prevState.filter((item) => item !== (target as HTMLInputElement).value)
        );
      else
        setSubCategoryCheckbox((prevState) => [...prevState, (target as HTMLInputElement).value]);

      setProductList({
        ...productList,
        queryParams: {
          ...productList.queryParams,
          categoryId: categoryCheckbox,
        },
      });
    }
  };

  useEffect(() => {
    const fetchingCategoryList = async () => {
      try {
        const response = await categoryApi.getAll();
        const { data } = response;
        setCategoryList({
          ...categoryList,
          loading: false,
          data,
        });
      } catch (e: any) {
        console.log(e.message);
        setCategoryList({
          ...categoryList,
          loading: false,
          err: e.message,
        });
      }
    };

    fetchingCategoryList();
  }, []);

  useEffect(() => {
    const fetchingProducts = async () => {
      try {
        const response = await productApi.getByQueryParams(productList.queryParams);
        const { data } = response;
        const dataRes = data.data;
        console.log('dataRes', dataRes);
        setProductList({
          ...productList,
          loading: false,
          data: dataRes,
        });
      } catch (err: any) {
        console.log('ERROR!!!', err.message);
        setProductList({
          ...productList,
          loading: false,
          err: err.message,
        });
      }
    };

    fetchingProducts();
  }, [productList.queryParams, categoryCheckbox]);

  const productListProps = {
    handleCategoryChecked,
    handleSubCategoryChecked,
    productData: productList.data,
    categoryData: categoryList.data,
  };

  if (productList.loading || categoryList.loading)
    return <h3 style={{ marginTop: '15rem' }}>Loading...</h3>;
  return <ProductList productListProps={productListProps} />;
};

export default ProductsPage;
