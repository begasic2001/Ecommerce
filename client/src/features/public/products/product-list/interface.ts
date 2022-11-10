interface IMedia {
  downLg: boolean;
  upMd: boolean;
  downSm: boolean;
}

interface IFilterPart {
  sliderPriceValue: number[];
  handleChangeSliderPrice: (e: Event, newValue: number | number[], activeThumb: number) => void;
  arrangePrice: IInitArrangePrice;
  handleChangeInputPrice: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  media: IMedia;
  isDrawer?: boolean;
}

interface IResultPart {
  currentPage: number;
  handleChangeCurrentPage: (e: React.ChangeEvent<unknown>, value: number) => void;
  media: IMedia;
}

export interface IInitArrangePrice {
  min: number;
  max: number;
}

export interface IFilterPartProps {
  filterPartProps: IFilterPart;
}

export interface IResultPartProps {
  resultPartProps: IResultPart;
  filterPartProps: IFilterPart;
}
