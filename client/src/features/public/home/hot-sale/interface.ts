interface IMedia {
  upXlMedia: boolean;
  betweenSmLg: boolean;
  downSm: boolean;
}

interface IHotSaleItem {
  id: string;
  brandId: string;
  categoryId: string;
  subCategoryId: string;
  code: string;
  name: string;
  amount: number;
  color: string[];
  size: number;
  images: string[];
  detail: string;
  newPrice: number;
  price: number;
  new: boolean;
  hotTrend: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface IMediaProps {
  media: IMedia;
}

export interface IHotSaleProps {
  hotSaleList: IHotSaleItem[];
}
