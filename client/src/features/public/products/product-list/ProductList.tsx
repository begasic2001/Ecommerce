import { Container } from '@mui/material';
import { useState } from 'react';
import { FilterComponent } from './FilterComp';
import { IFilterPart, IInitArrangePrice, IResultPart, ISProductList } from './interface';
import styles from './product-list.module.scss';
import { ResultComponent } from './ResultComp';

const s: ISProductList = {
  products: styles.products,
  container: styles['products__container'],
  row: styles['products__row'],
};

const minPriceDistance = 10;
const initMinPrice = 0;
const initMaxPrice = 100;

const ProductList = () => {
  const [sliderPriceValue, setSliderPriceValue] = useState<number[]>([initMinPrice, initMaxPrice]); // State storing slider line (demonstrate for input price)
  const [arrangePrice, setArrangePrice] = useState<IInitArrangePrice>({
    min: initMinPrice * 10000,
    max: initMaxPrice * 10000,
  }); // State storing input price
  const [currentPage, setCurrentPage] = useState<number>(1); // State manage product list page

  // Manage change when slide slider input
  const handleChangePriceValue = (e: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) return;
    if (activeThumb === 0) {
      setSliderPriceValue([
        Math.min(newValue[0], sliderPriceValue[1] - minPriceDistance),
        sliderPriceValue[1],
      ]);
      setArrangePrice({
        ...arrangePrice,
        min: newValue[0] * 10000,
      });
    } else {
      setSliderPriceValue([
        sliderPriceValue[0],
        Math.max(newValue[1], sliderPriceValue[0] + minPriceDistance),
      ]);
      setArrangePrice({
        ...arrangePrice,
        max: newValue[1] * 10000,
      });
    }
  };

  // Manage change when type value input price
  const handlePriceValue = (e: React.ChangeEvent<HTMLInputElement>, num: number) => {
    const min: number = arrangePrice.min;
    const max: number = arrangePrice.max;
    const inputValue: number = Number(e.target.value);

    if (num === 0) {
      if (min > max || min < 0) {
        setArrangePrice({
          ...arrangePrice,
          min: 0,
        });
        setSliderPriceValue([0, sliderPriceValue[1]]);
      } else {
        setArrangePrice({
          ...arrangePrice,
          min: inputValue,
        });
        setSliderPriceValue([inputValue / 10000, sliderPriceValue[1]]);
      }
    } else {
      if (max < min || max > 1000000) {
        setArrangePrice({
          ...arrangePrice,
          max: 1000000,
        });
        setSliderPriceValue([sliderPriceValue[0], 1000000]);
      } else {
        setArrangePrice({
          ...arrangePrice,
          max: inputValue,
        });
        setSliderPriceValue([sliderPriceValue[0], inputValue / 10000]);
      }
    }
  };

  const handleChangeCurrentPage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const filterPartProps: IFilterPart = {
    sliderPriceValue,
    handleChangePriceValue,
    arrangePrice,
    handlePriceValue,
  };

  const resultPartProps: IResultPart = {
    currentPage,
    handleChangeCurrentPage,
  };

  return (
    <section className={s.products}>
      <Container className={s.container}>
        <section className={s.row}>
          <FilterComponent filterPartProps={filterPartProps} />
          <ResultComponent resultPartProps={resultPartProps} filterPartProps={filterPartProps} />
        </section>
      </Container>
    </section>
  );
};

export default ProductList;
