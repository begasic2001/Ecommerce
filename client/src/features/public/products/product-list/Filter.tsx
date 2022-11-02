import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import { Checkbox, Divider, FormControlLabel, FormGroup, Slider, Stack } from '@mui/material';
import s from './product-list.module.scss';
import { IFilterPartProps } from './interface';
import clsx from 'clsx';

export function FilterPartContent({ filterPartProps }: IFilterPartProps) {
  const { arrangePrice, handleChangePriceValue, handlePriceValue, sliderPriceValue } =
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
          onChange={handleChangePriceValue}
          step={10}
          disableSwap
          className={s['filter-box__slider']}
        />
        <Stack className={s['filter-price']}>
          <input
            type="number"
            value={arrangePrice.min}
            placeholder="Từ 1.000đ"
            min={0}
            step={1000}
            onChange={(e) => handlePriceValue(e, 0)}
            className={s['filter-price__input']}
          />
          <Divider className={s['filter-price__div']} />
          <input
            type="number"
            value={arrangePrice.max}
            max={1000000}
            step={1000}
            placeholder="Đến 999.999đ"
            onChange={(e) => handlePriceValue(e, 1)}
            className={s['filter-price__input']}
          />
        </Stack>
      </section>
    </section>
  );
}

export function FilterPart({ filterPartProps }: IFilterPartProps) {
  if (!filterPartProps) return null;
  const { media } = filterPartProps;
  const { mobileMedia, tabletMedia, smallTabletMedia } = media;

  if (tabletMedia || mobileMedia || smallTabletMedia) return null;
  return <FilterPartContent filterPartProps={filterPartProps} />;
}

export default FilterPart;
