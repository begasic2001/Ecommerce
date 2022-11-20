export interface IData {
  id: string;
  brandId: string;
  categoryId: string;
  subCategoryId: string;
  code: string;
  name: string;
  amount: number;
  color: string[];
  size: number;
  detail: string;
  images: {
    id: string;
    image: string;
  }[];
  price: number;
  newPrice: number;
  new: boolean;
  hotTrend: boolean;
  createdAt: number;
  updatedAt: string;
}

export interface ICategory {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
}

export interface IBrand extends ICategory {}

export interface ISubCategory extends ICategory {
  categoryId: string;
}

interface IPagination {
  _page: number;
  _limit: number;
  _totalPages: number;
  _totalRows: number;
}

interface ISearchParams {
  name_like: string;
  _page: number;
  _limit: number;
}

export interface IStoreHeaderContext {
  handleSearch: (params: ISearchParams) => void;
}

export interface IStoreHeaderProps extends IStoreHeaderContext {
  children: JSX.Element;
}

export interface IStoreProduct {
  currentPage: number;
  handleChangeCurrentPage: (e: React.ChangeEvent<unknown>, value: number) => void;
  handleCategoryChecked: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  handleSubCategoryChecked: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  productData: IData[] | any;
  pagination: IPagination;
  categoryData: ICategory[];
  subCategoryData: ISubCategory[];
}

export interface IStoreProductProps {
  productProvider: IStoreProduct;
  children: JSX.Element;
}

export interface IStoreProductDetail {
  productDetail: {
    product: IData;
    category: ICategory;
    brand: IBrand;
  };
}

export interface IStoreProductDetailProps {
  productDetail: {
    product: IData;
    category: ICategory;
    brand: IBrand;
  };
  children: JSX.Element;
}
