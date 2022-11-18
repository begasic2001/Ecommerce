import { useMediaQuery, useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import FilterComp from './filter';
import { IInitArrangePrice } from './interface.type';
import s from './product-list.module.scss';
import { ResultComponent } from './ResultComp';

const minPriceDistance = 10;
const initMinPrice = 0;
const initMaxPrice = 100;

const ProductList = () => {
  const theme = useTheme();
  const upLgMedia = useMediaQuery<boolean>(theme.breakpoints.up('lg'));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sliderPriceValue, setSliderPriceValue] = useState<number[]>([initMinPrice, initMaxPrice]);
  const [arrangePrice, setArrangePrice] = useState<IInitArrangePrice>({
    min: initMinPrice * 10000,
    max: initMaxPrice * 10000,
  });

  const handleChangeSliderPrice = (e: Event, newValue: number | number[], activeThumb: number) => {
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
      handleChangeInputPrice;
      setArrangePrice({
        ...arrangePrice,
        max: newValue[1] * 10000,
      });
    }
  };

  const handleChangeInputPrice = (e: React.ChangeEvent<HTMLInputElement>, num: number) => {
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

  const filterPartProps = {
    sliderPriceValue,
    handleChangeSliderPrice,
    arrangePrice,
    handleChangeInputPrice,
  };

  const resultPartProps = {
    currentPage,
    handleChangeCurrentPage,
  };

  return (
    <section className={s.products}>
      <Container className={s.container}>
        <Stack direction="row" className={s.row}>
          {upLgMedia && <FilterComp filterPartProps={filterPartProps} />}
          <ResultComponent resultPartProps={resultPartProps} filterPartProps={filterPartProps} />
        </Stack>
      </Container>
    </section>
  );
};

export default ProductList;
