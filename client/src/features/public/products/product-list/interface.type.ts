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

export interface ISubCategory extends ICategory {
  categoryId: string;
}

export interface IInitArrangePrice {
  min: number;
  max: number;
}
