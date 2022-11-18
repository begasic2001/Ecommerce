import TextField from '@mui/material/TextField';
import s from './filter.module.scss';

interface IInputNumberFilter {
  value: number;
  onChange: any;
}

const inputProps = {
  step: 1000,
};

export function InputNumberFilter({ value, onChange }: IInputNumberFilter) {
  return (
    <TextField
      type="number"
      value={value}
      onChange={onChange}
      inputProps={inputProps}
      className={s.filterPriceInput}
    />
  );
}
