import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Slider
} from '@mui/material';
import clsx from 'clsx';
import { IFilterPartProps } from './interface';
import s from './product-list.module.scss';

export function FilterContent({ filterPartProps }: IFilterPartProps) {
  const { arrangePrice, handleChangeSliderPrice, handleChangeInputPrice, sliderPriceValue } =
    filterPartProps;

  return (
    <section className={clsx(s.filter, filterPartProps?.isDrawer && s['filter--isDrawer'])}>
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
          onChange={handleChangeSliderPrice}
          step={10}
          disableSwap
          className={s['filter-box__slider']}
        />
        <section className={s['filter-price']}>
          <input
            type="number"
            value={arrangePrice.min}
            placeholder="Từ 1.000đ"
            min={0}
            step={1000}
            onChange={(e) => handleChangeInputPrice(e, 0)}
            className={s['filter-price__input']}
          />
          <Divider className={s['filter-price__div']} />
          <input
            type="number"
            value={arrangePrice.max}
            max={1000000}
            step={1000}
            placeholder="Đến 999.999đ"
            onChange={(e) => handleChangeInputPrice(e, 1)}
            className={s['filter-price__input']}
          />
        </section>
      </section>
    </section>
  );
}

export function FilterComponent({ filterPartProps }: IFilterPartProps) {
  const { media } = filterPartProps;

  if (media.downLg) return null;
  return <FilterContent filterPartProps={filterPartProps} />;
}
