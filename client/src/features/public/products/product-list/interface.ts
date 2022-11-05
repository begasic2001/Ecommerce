export interface IInitArrangePrice {
  min: number;
  max: number;
}

export interface IMedia {
  tabMedia: boolean;
  landTabMedia: boolean;
  mobLandMedia: boolean;
  mobMedia: boolean;
}

export interface IFilterPart {
  sliderPriceValue: number[];
  handleChangePriceValue: (e: Event, newValue: number | number[], activeThumb: number) => void;
  arrangePrice: {
    min: number;
    max: number;
  };
  handlePriceValue: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  media: IMedia;
  isDrawer?: boolean;
}

export interface IFilterPartProps {
  filterPartProps: IFilterPart;
}

export interface IResultPart {
  currentPage: number;
  handleChangeCurrentPage: (e: React.ChangeEvent<unknown>, value: number) => void;
  media: IMedia;
}

export interface IResultPartProps {
  resultPartProps: IResultPart;
  filterPartProps: IFilterPart;
}

export interface ISProductList {
  products: string;
  productsRow: string;
}

export interface ISFilter {
  filter: string;
  filterIsDrawer: string;
  filterTitle: string;
  filterBox: string;
  filterBoxTitle: string;
  filterBoxItem: string;
  filterBoxSlider: string;
  filterPrice: string;
  filterPriceInput: string;
  filterPricDivider: string;
}

export interface ISReuslt {
  result: string;
  resultTitle: string;
  resultPagination: string;
  filterDrawer: string;
}
