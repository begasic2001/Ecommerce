import { useState } from 'react';
import { Container, Stack, FormControlLabel, Checkbox, FormGroup, Slider } from '@mui/material';
import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import s from './product-list.module.scss';

const minDistance = 10;

const ProductList = () => {
  const [value1, setValue1] = useState<number[]>([40, 60]);

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Container className={s.products}>
      <Stack className={s['products__row']}>
        <section className={s.filter}>
          <h3 className={s['filter__title']}>
            <FilterAltIcon />
            Bộ lọc
          </h3>
          <section className={s['filter-box']}>
            <p className={s['filter-box__title']}>Các ngày lễ</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Nhà giáo Việt Nam"
              />
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Phụ nữ Việt Nam"
              />
              <FormControlLabel control={<Checkbox />} labelPlacement="start" label="Sinh nhật" />
            </FormGroup>
          </section>
          <section className={s['filter-box']}>
            <p className={s['filter-box__title']}>Các kệ hoa</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Kệ sinh nhật"
              />
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="start"
                label="Kệ khai trương"
              />
            </FormGroup>
          </section>
          <section className={s['filter-box']}>
            <p className={s['filter-box__title']}>Chọn mức giá</p>
            <Slider
              value={value1}
              onChange={handleChange1}
              step={10}
              valueLabelDisplay="auto"
              disableSwap
            />
            <div>
              <input type="number" name="" placeholder="Từ 1.000đ" />
              <div></div>
              <input type="number" name="" placeholder="Đến 999.999đ" />
            </div>
          </section>
        </section>
        <section>
          <h3>Kết quả tìm kiếm</h3>
          <div>
            {currentItems && currentItems.map(() => <ProductItem key={uuidv4()} />)}
          </div>
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ArrowRightSVG />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={<ArrowLeftSVG />}
            />
          </div>
        </section>
      </Stack>
    </Container>
  );
};

export default ProductList;
