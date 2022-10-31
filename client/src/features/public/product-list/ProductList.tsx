import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import { FilterPart } from './Filter';
import { IFilterPart, IResultPart } from './interface';
import s from './product-list.module.scss';
import { Result } from './Result';

const minPriceDistance = 10;
const minPrice = 0;
const maxPrice = 100;

const ProductList = () => {
  const [sliderPriceValue, setSliderPriceValue] = useState<number[]>([minPrice, maxPrice]);
  const [arrangePrice, setArrangePrice] = useState<{
    min: number;
    max: number;
  }>({
    min: minPrice * 10000,
    max: maxPrice * 10000,
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
    <Container className={s.products}>
      <Stack className={s['products__row']}>
        <FilterPart filterPartProps={filterPartProps} />
        <Result resultPartProps={resultPartProps} />
      </Stack>
    </Container>
  );
};

export default ProductList;
