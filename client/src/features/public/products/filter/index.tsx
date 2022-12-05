import { Checkbox, Divider, FormControlLabel, FormGroup, TextField } from '@mui/material';
import clsx from 'clsx';
import { FilterIcon } from '~/components/icons';

interface CheckboxFilterItem {
  label: string;
  value: string;
}

interface PriceFilterItem {
  placeholder: string;
}

function Filter() {
  return (
    <section className={clsx('filter', 'w-1/5 basis-1/5')}>
      <h3 className="flex items-center justify-center text-center text-20">
        <span className="mr-10">
          <FilterIcon />
        </span>
        Bộ lọc
      </h3>
      <section className="my-30">
        <p className="mt-20 text-center text-20 font-semibold">Các ngày lễ</p>
        <FormGroup>
          <CheckboxFilterItem label="abc" value="abc" />
          <CheckboxFilterItem label="def" value="def" />
          <CheckboxFilterItem label="ghi" value="ghi" />
        </FormGroup>
      </section>
      <Divider />
      <section className="my-25">
        <p className="mt-20 text-center text-20 font-semibold">Các kệ hoa</p>
        <FormGroup>
          <CheckboxFilterItem label="abc" value="abc" />
          <CheckboxFilterItem label="def" value="def" />
          <CheckboxFilterItem label="ghi" value="ghi" />
        </FormGroup>
      </section>
      <Divider />
      <section className="my-25">
        <p className="mt-20 text-center text-20 font-semibold">Chọn mức giá</p>
        <form className="mt-20 ">
          <section className="flex items-center justify-between">
            <PriceFilterItem placeholder="1.000đ" />
            <Divider className="w-1/12" />
            <PriceFilterItem placeholder="1.xxx.xxxđ" />
          </section>
          <button type="submit" className={clsx('mt-30 h-40 w-full bg-black text-txt-5 duration-2', 'hover:bg-[#aaa]')}>
            Áp dụng
          </button>
        </form>
      </section>
    </section>
  );
}

const PriceFilterItem = ({ placeholder }: PriceFilterItem) => (
  <TextField
    type="number"
    placeholder={placeholder}
    inputProps={{
      className: 'text-12',
    }}
    className="basis-5/12"
  />
);

const CheckboxFilterItem = ({ label, value }: CheckboxFilterItem) => (
  <FormControlLabel
    control={
      <Checkbox className="[&_.MuiSvgIcon-root]:h-20 [&_.MuiSvgIcon-root]:w-20 [&_.MuiSvgIcon-root]:text-txt-2" />
    }
    labelPlacement="start"
    label={label}
    value={value}
    classes={{
      label: 'text-14',
    }}
    className="mt-10 justify-between"
  />
);

export { Filter };
