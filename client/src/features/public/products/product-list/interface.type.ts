interface IData {
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
  images: string[];
  price: number;
  newPrice: number;
  new: boolean;
  hotTrend: boolean;
  createdAt: number;
  updatedAt: string;
}

interface ICategory {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
}

interface IProductList {
  handleCategoryChecked: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  handleSubCategoryChecked: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  productData: IData[];
  categoryData: ICategory[];
}

export interface IInitArrangePrice {
  min: number;
  max: number;
}

export interface IProductListProps {
  productListProps: IProductList;
}
