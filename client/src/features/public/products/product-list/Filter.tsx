import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Slider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import s from './product-list.module.scss';
import { IFilterPartProps, ISFilter } from './interface';
import clsx from 'clsx';

const styles: ISFilter = {
  filter: s.filter,
  filterIsDrawer: s['filter--isDrawer'],
  filterTitle: s['filter_title'],
  filterBox: s['filter-box'],
  filterBoxTitle: s['filter-box__title'],
  filterBoxItem: s['filter-box__item'],
  filterBoxSlider: s['filter-box__slider'],
  filterPrice: s['filter-price'],
  filterPriceInput: s['filter-price__input'],
  filterPricDivider: s['filter-price__div'],
};

export function FilterPartContent({ filterPartProps }: IFilterPartProps) {
  const { arrangePrice, handleChangePriceValue, handlePriceValue, sliderPriceValue } =
    filterPartProps;

  return (
    <section className={clsx(styles.filter, filterPartProps?.isDrawer && styles.filterIsDrawer)}>
      <h3 className={styles.filterTitle}>
        <FilterAltIcon sx={{ width: '2rem', height: '2rem', mr: '1rem' }} />
        Bộ lọc
      </h3>
      <section className={styles.filterBox}>
        <p className={styles.filterBoxTitle}>Các ngày lễ</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Nhà giáo Việt Nam"
            className={styles.filterBoxItem}
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Phụ nữ Việt Nam"
            className={styles.filterBoxItem}
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Sinh nhật"
            className={styles.filterBoxItem}
          />
        </FormGroup>
      </section>
      <Divider />
      <section className={styles.filterBox}>
        <p className={styles.filterBoxTitle}>Các kệ hoa</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Kệ sinh nhật"
            className={styles.filterBoxItem}
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Kệ khai trương"
            className={styles.filterBoxItem}
          />
        </FormGroup>
      </section>
      <Divider />
      <section className={styles.filterBox}>
        <p className={styles.filterBoxTitle}>Chọn mức giá</p>
        <Slider
          value={sliderPriceValue}
          onChange={handleChangePriceValue}
          step={10}
          disableSwap
          className={styles.filterBoxSlider}
        />
        <Stack className={styles.filterPrice}>
          <input
            type="number"
            value={arrangePrice.min}
            placeholder="Từ 1.000đ"
            min={0}
            step={1000}
            onChange={(e) => handlePriceValue(e, 0)}
            className={styles.filterPriceInput}
          />
          <Divider className={styles.filterPricDivider} />
          <input
            type="number"
            value={arrangePrice.max}
            max={1000000}
            step={1000}
            placeholder="Đến 999.999đ"
            onChange={(e) => handlePriceValue(e, 1)}
            className={styles.filterPriceInput}
          />
        </Stack>
      </section>
    </section>
  );
}

export function FilterComponent({ filterPartProps }: IFilterPartProps) {
  if (!filterPartProps) return null;

  const theme = useTheme();
  const downLgMedia = useMediaQuery<boolean>(theme.breakpoints.down('lg'));

  if (downLgMedia) return null;
  return <FilterPartContent filterPartProps={filterPartProps} />;
}
