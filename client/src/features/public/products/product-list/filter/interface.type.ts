interface IInitArrangePrice {
  min: number;
  max: number;
}

interface ICategory {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
}

interface IFilterPart {
  categoryData: ICategory[];
  sliderPriceValue: number[];
  handleChangeSliderPrice: (e: Event, newValue: number | number[], activeThumb: number) => void;
  arrangePrice: IInitArrangePrice;
  handleChangeInputPrice: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  handleCategoryChecked: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  handleSubCategoryChecked: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  isDrawer?: boolean;
}

export interface IFilterPartProps {
  filterPartProps: IFilterPart;
}
