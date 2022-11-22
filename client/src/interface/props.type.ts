export interface IProductItem {
  id: string;
  brandId: string;
  categoryId: string;
  subCategoryId: string;
  code: string;
  name: string;
  amount: number;
  color: string[];
  size: number;
  images: {
    id: string;
    image: string;
  }[];
  detail: string;
  newPrice: number;
  price: number;
  new: boolean;
  hotTrend: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface IProductItemProps {
  item: IProductItem;
}

export interface IBigSaleItemProps {
  bigSale: IProductItem;
}

export interface IHotSaleArrayItemProps {
  hotSaleList: IProductItem[];
}

export interface IOtherSaleArrayItemProps {
  otherSale: IProductItem[];
}

export interface INewListArrayItemProps {
  newList: IProductItem[];
}

export interface IHandleFormSubmitLogin {
  handleFormSubmit: (value: any) => void;
  notExist: boolean;
}
