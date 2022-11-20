export interface IInitialData {
  loading: boolean;
  data: any;
  err: null | string;
}

export interface IInitialProductList extends IInitialData {
  queryParams: {
    categoryId?: string[];
    name_like?: string;
    _page: number;
    _limit: number;
  };
}
