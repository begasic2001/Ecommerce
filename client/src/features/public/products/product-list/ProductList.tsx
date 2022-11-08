import { Container, Stack, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { FilterComponent } from './Filter';
import { IFilterPart, IInitArrangePrice, IResultPart, ISProductList } from './interface';
import s from './product-list.module.scss';
import { Result } from './Result';

const styles: ISProductList = {
  products: s.products,
  productsRow: s['products__row'],
};

const minPriceDistance = 10;
const initMinPrice = 0;
const initMaxPrice = 100;

const ProductList = () => {
  const theme = useTheme();
  const tabMedia = useMediaQuery<boolean>(theme.breakpoints.up('lg'));
  const landTabMedia = useMediaQuery<boolean>(theme.breakpoints.between('md', 'lg'));
  const mobLandMedia = useMediaQuery<boolean>(theme.breakpoints.between('sm', 'md'));
  const mobMedia = useMediaQuery<boolean>(theme.breakpoints.down('sm'));

  const [sliderPriceValue, setSliderPriceValue] = useState<number[]>([initMinPrice, initMaxPrice]);
  const [arrangePrice, setArrangePrice] = useState<IInitArrangePrice>({
    min: initMinPrice * 10000,
    max: initMaxPrice * 10000,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const handleChangeCurrentPage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handlePriceValue = (e: React.ChangeEvent<HTMLInputElement>, num: number) => {
    const min = arrangePrice.min;
    const max = arrangePrice.max;
    const inputValue = Number(e.target.value);

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

  const media = {
    tabMedia,
    landTabMedia,
    mobLandMedia,
    mobMedia,
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
    <Container className={styles.products}>
      <section className={styles.productsRow}>
        <FilterComponent filterPartProps={filterPartProps} />
        <Result resultPartProps={resultPartProps} filterPartProps={filterPartProps} />
      </section>
    </Container>
  );
};

export default ProductList;
