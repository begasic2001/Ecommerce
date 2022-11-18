import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import clsx from 'clsx';
import { IFilterPartProps } from '../interface';
import s from './filter.module.scss';

function Filter({ filterPartProps }: IFilterPartProps) {
  const { arrangePrice, handleChangeSliderPrice, handleChangeInputPrice, sliderPriceValue } =
    filterPartProps;

  return (
    <section className={clsx(s.filter, filterPartProps?.isDrawer && s.filterIsDrawer)}>
      <h3 className={s.filterTitle}>
        <FilterAltIcon sx={{ width: '2rem', height: '2rem', mr: '1rem' }} />
        Bộ lọc
      </h3>
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Các ngày lễ</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Nhà giáo Việt Nam"
            className={s.filterBoxItem}
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Phụ nữ Việt Nam"
            className={s.filterBoxItem}
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Sinh nhật"
            className={s.filterBoxItem}
          />
        </FormGroup>
      </section>
      <Divider />
      <section className={s.filterBox}>
        <p className={s.filterBoxTitle}>Các kệ hoa</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Kệ sinh nhật"
            className={s.filterBoxItem}
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Kệ khai trương"
            className={s.filterBoxItem}
          />
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
          <input
            type="number"
            value={arrangePrice.min}
            placeholder="Từ 1.000đ"
            min={0}
            step={1000}
            onChange={(e) => handleChangeInputPrice(e, 0)}
            className={s.filterPriceInput}
          />
          <Divider className={s.filterPriceDivider} />
          <input
            type="number"
            value={arrangePrice.max}
            max={1000000}
            step={1000}
            placeholder="Đến 999.999đ"
            onChange={(e) => handleChangeInputPrice(e, 1)}
            className={s.filterPriceInput}
          />
        </section>
      </section>
    </section>
  );
}

export default Filter;
