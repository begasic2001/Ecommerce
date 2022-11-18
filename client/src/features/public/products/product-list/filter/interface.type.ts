interface IInitArrangePrice {
  min: number;
  max: number;
}

interface IFilterPart {
  sliderPriceValue: number[];
  handleChangeSliderPrice: (e: Event, newValue: number | number[], activeThumb: number) => void;
  arrangePrice: IInitArrangePrice;
  handleChangeInputPrice: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  isDrawer?: boolean;
}

export interface IFilterPartProps {
  filterPartProps: IFilterPart;
}
