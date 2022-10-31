export interface IFilterPart {
  sliderPriceValue: number[];
  handleChangePriceValue: (e: Event, newValue: number | number[], activeThumb: number) => void;
  arrangePrice: {
    min: number;
    max: number;
  };
  handlePriceValue: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
}

export interface IFilterPartProps {
  filterPartProps: IFilterPart;
}

export interface IResultPart {
  currentPage: number;
  handleChangeCurrentPage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export interface IResultPartProps {
  resultPartProps: IResultPart;
}
