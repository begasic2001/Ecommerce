import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryApi, subCategoryApi } from '~/api';
import { ProductList } from '~/features/public/products/product-list';
import { IInitialData } from './interface.type';
import { getProductListBySearch, toggleSearch } from '~/app/productSlice';
import ProductProdivder from '~/store/products.store';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.product);

  const [currentPage, setCurrentPage] = useState<number>(1);
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

  const handleChangeCurrentPage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

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
    const fetchingSubCategoryList = async () => {
      try {
        const response = await subCategoryApi.getAll();
        const { data } = response;
        setSubCategoryList({
          ...subCategoryList,
          loading: false,
          data,
        });
      } catch (e: any) {
        console.log(e.message);
        setSubCategoryList({
          ...subCategoryList,
          loading: false,
          err: e.message,
        });
      }
    };

    fetchingSubCategoryList();
  }, []);

  useEffect(() => {
    const fetchingProductList = () => {
      if (productList.data.length === 0) {
        const params = {
          _page: currentPage,
          _limit: 12,
        };
        const action: any = getProductListBySearch(params);
        dispatch(action);
      } else return;
    };

    fetchingProductList();
  }, [currentPage]);

  useEffect(() => {
    const filterCategory = () => {
      const params: {
        _page: number;
        _limit: number;
        categoryId?: string[];
        subCategoryId?: string[];
      } = {
        _page: currentPage,
        _limit: 12,
      };

      if (productList.isSearch) {
        dispatch(toggleSearch(false));
        return;
      }

      if (categoryCheckbox.length === 0 && subCategoryCheckbox.length === 0) {
        const action: any = getProductListBySearch(params);
        dispatch(action);
      } else {
        if (categoryCheckbox.length > 0) params.categoryId = categoryCheckbox;
        if (subCategoryCheckbox.length > 0) params.subCategoryId = subCategoryCheckbox;
        const action: any = getProductListBySearch(params);
        dispatch(action);
      }
    };

    filterCategory();
  }, [categoryCheckbox, subCategoryCheckbox, currentPage]);

  const productListProps = {
    currentPage,
    handleChangeCurrentPage,
    handleCategoryChecked,
    handleSubCategoryChecked,
    productData: productList.data,
    pagination: productList.pagination,
    categoryData: categoryList.data,
    subCategoryData: subCategoryList.data,
  };

  if (productList.loading || categoryList.loading)
    return <h3 style={{ marginTop: '15rem' }}>Loading...</h3>;
  return (
    <ProductProdivder productProvider={productListProps}>
      <ProductList />
    </ProductProdivder>
  );
};

export default ProductsPage;
