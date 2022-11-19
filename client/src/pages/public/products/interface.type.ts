interface IData {
  id: string;
  brandId: string;
  categoryId: string;
  subCategoryId: string;
  code: string;
  name: string;
  amount: number;
  color: string[];
  size: boolean;
  detail: string;
  images: string[];
  price: number;
  newPrice: number;
  new: boolean;
  hotTrend: boolean;
  createdAt: number;
  updatedAt: string;
}

export interface IInitialData {
  loading: boolean;
  data: any;
  err: null | string;
}

export interface IInitialProductList extends IInitialData {
  queryParams: {
    categoryId?: string[];
    name_like?: string;
    _page: 1;
    _limit: 12;
  };
}
