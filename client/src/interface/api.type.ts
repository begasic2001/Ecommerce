export interface ICategoryParams {
  name: string[];
}

export interface IProductParams {
  name_like?: string;
  categoryId?: string[];
  subCategoryId?: string[];
  _page: number;
  _limit: number;
}
