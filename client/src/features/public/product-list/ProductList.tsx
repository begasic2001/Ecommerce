import { useState, useEffect } from 'react';
import {
  Container,
  Stack,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Slider,
  Pagination,
  ImageList,
  ImageListItem,
  Divider,
} from '@mui/material';
import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import { ProductItem } from '~/components/product-item';
import s from './product-list.module.scss';
import { v4 as uuidv4 } from 'uuid';

const minPriceDistance = 10;
const minPrice = 20;
const maxPrice = 80;

const ProductList = () => {
  const [sliderPriceValue, setSliderPriceValue] = useState<number[]>([minPrice, maxPrice]);
  const [arrangePrice, setArrangePrice] = useState(() => {
    return {
      min: minPrice * 10000,
      max: maxPrice * 10000,
    };
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChangePriceValue = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setSliderPriceValue([
        Math.min(newValue[0], sliderPriceValue[1] - minPriceDistance),
        sliderPriceValue[1],
      ]);
    } else {
      setSliderPriceValue([
        sliderPriceValue[0],
        Math.max(newValue[1], sliderPriceValue[0] + minPriceDistance),
      ]);
    }
  };

  const handleChangeCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handlePriceValue = (event, num: number) => {
    if (num === 0)
      setArrangePrice({
        ...arrangePrice,
        min: event.target.value,
      });
    else
      setArrangePrice({
        ...arrangePrice,
        max: event.target.value,
      });
  };

  return (
    <Container className={s.products}>
      <Stack className={s['products__row']}>
        <section className={s.filter}>
          <h3 className={s['filter__title']}>
            <FilterAltIcon sx={{ width: '2rem', height: '2rem', mr: '1rem' }} />
            Bộ lọc
          </h3>
          <section className={s['filter-box']}>
            <p className={s['filter-box__title']}>Các ngày lễ</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Nhà giáo Việt Nam"
                className={s['filter-box__item']}
              />
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Phụ nữ Việt Nam"
                className={s['filter-box__item']}
              />
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Sinh nhật"
                className={s['filter-box__item']}
              />
            </FormGroup>
          </section>
          <Divider />
          <section className={s['filter-box']}>
            <p className={s['filter-box__title']}>Các kệ hoa</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Kệ sinh nhật"
                className={s['filter-box__item']}
              />
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Kệ khai trương"
                className={s['filter-box__item']}
              />
            </FormGroup>
          </section>
          <Divider />
          <section className={s['filter-box']}>
            <p className={s['filter-box__title']}>Chọn mức giá</p>
            <Slider
              value={sliderPriceValue}
              onChange={handleChangePriceValue}
              step={10}
              valueLabelDisplay="auto"
              disableSwap
              className={s['filter-box__slider']}
            />
            <Stack className={s['filter-price']}>
              <input
                type="number"
                value={arrangePrice.min}
                placeholder="Từ 1.000đ"
                min={0}
                onChange={(e) => handlePriceValue(e, 0)}
                className={s['filter-price__input']}
              />
              <Divider className={s['filter-price__div']} />
              <input
                type="number"
                value={arrangePrice.max}
                max={1000000}
                placeholder="Đến 999.999đ"
                onChange={(e) => handlePriceValue(e, 1)}
                className={s['filter-price__input']}
              />
            </Stack>
          </section>
        </section>
        <section className={s.result}>
          <h3>Kết quả tìm kiếm</h3>
          <ImageList cols={4} gap={20}>
            {Array(8)
              .fill(0)
              .map(() => (
                <ImageListItem key={uuidv4()}>
                  <ProductItem />
                </ImageListItem>
              ))}
          </ImageList>
          <Pagination count={5} page={currentPage} onChange={handleChangeCurrentPage} />
        </section>
      </Stack>
    </Container>
  );
};

export default ProductList;
