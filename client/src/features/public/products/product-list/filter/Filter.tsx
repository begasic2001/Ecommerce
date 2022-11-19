import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import clsx from 'clsx';
import { CheckboxFilter } from './CheckboxFilter';
import s from './filter.module.scss';
import { InputNumberFilter } from './InputNumberFilter';
import { IFilterPartProps } from './interface.type';

function Filter({ filterPartProps }: IFilterPartProps) {
  const {
    categoryData,
    arrangePrice,
    handleChangeSliderPrice,
    handleChangeInputPrice,
    sliderPriceValue,
    handleCategoryChecked,
    handleSubCategoryChecked,
  } = filterPartProps;

  return (
    <section className={clsx(s.filter, filterPartProps?.isDrawer && s.filterIsDrawer)}>
      <h3 className={s.filterTitle}>
        <FilterAltIcon sx={{ width: '2rem', height: '2rem', mr: '1rem' }} />
        Bộ lọc
      </h3>
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Các ngày lễ</p>
        <FormGroup>
          {categoryData.map((item) => (
            <CheckboxFilter
              key={item.id}
              value={item.id}
              label={item.name}
              onChange={handleCategoryChecked}
            />
          ))}
        </FormGroup>
      </section>
      <Divider />
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Các kệ hoa</p>
        <FormGroup>
          <CheckboxFilter value="d" label="Kệ sinh nhật" onChange={handleSubCategoryChecked} />
          <CheckboxFilter value="e" label="Kệ khai trương" onChange={handleSubCategoryChecked} />
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
