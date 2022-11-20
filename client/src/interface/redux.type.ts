interface IPagination {
  _page: number;
  _limit: number;
  _totalPages: number;
  _totalRows: number;
}

export interface IProductInitial {
  loading: boolean;
  data: any;
  err: any | null;
  isSearch: boolean;
  pagination: IPagination;
}
