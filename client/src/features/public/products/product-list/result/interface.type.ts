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

interface IFilterPart {
  sliderPriceValue: number[];
  handleChangeSliderPrice: (e: Event, newValue: number | number[], activeThumb: number) => void;
  arrangePrice: IInitArrangePrice;
  handleChangeInputPrice: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  isDrawer?: boolean;
}

interface IResultPart {
  currentPage: number;
  handleChangeCurrentPage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export interface IInitArrangePrice {
  min: number;
  max: number;
}

export interface IFilterPartProps {
  filterPartProps: IFilterPart;
}
