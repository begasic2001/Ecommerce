import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import clsx from 'clsx';
import { useState } from 'react';
import { CheckboxFilter } from './CheckboxFilter';
import s from './filter.module.scss';
import { InputNumberFilter } from './InputNumberFilter';
import { IFilterPartProps } from './interface.type';

function Filter({ filterPartProps }: IFilterPartProps) {
  const { arrangePrice, handleChangeSliderPrice, handleChangeInputPrice, sliderPriceValue } =
    filterPartProps;

  const [categoryCheckbox, setCategoryCheckbox] = useState<string[]>([]);

  return (
    <section className={clsx(s.filter, filterPartProps?.isDrawer && s.filterIsDrawer)}>
      <h3 className={s.filterTitle}>
        <FilterAltIcon sx={{ width: '2rem', height: '2rem', mr: '1rem' }} />
        Bộ lọc
      </h3>
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Các ngày lễ</p>
        <FormGroup>
          <CheckboxFilter name="category" value="a" label="Nhà giáo Việt Nam" checked={true} />
          <CheckboxFilter name="category" value="b" label="Phụ nữ Việt Nam" />
          <CheckboxFilter name="category" value="c" label="Sinh nhật" />
        </FormGroup>
      </section>
      <Divider />
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Các kệ hoa</p>
        <FormGroup>
          <CheckboxFilter name="subCategory" value="d" label="Kệ sinh nhật" />
          <CheckboxFilter name="subCategory" value="e" label="Kệ khai trương" />
        </FormGroup>
      </section>
      <Divider />
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Chọn mức giá</p>
        <Slider
          value={sliderPriceValue}
          onChange={handleChangeSliderPrice}
          step={10}
          disableSwap
          className={s.filterBoxSlider}
        />
        <section className={s.filterPrice}>
          <InputNumberFilter
            value={arrangePrice.min}
            onChange={(e: any) => handleChangeInputPrice(e, 0)}
          />
          <Divider className={s.filterPriceDivider} />
          <InputNumberFilter
            value={arrangePrice.max}
            onChange={(e: any) => handleChangeInputPrice(e, 1)}
          />
        </section>
      </section>
    </section>
  );
}

export default Filter;
