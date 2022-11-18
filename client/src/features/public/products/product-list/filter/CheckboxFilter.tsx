import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import s from './filter.module.scss';

interface ICheckbox {
  label: string;
  name: string;
  checked?: boolean;
  value: string;
}

export function CheckboxFilter({ label, name, value }: ICheckbox) {
  return (
    <FormControlLabel
      name={name}
      control={<Checkbox />}
      labelPlacement="start"
      label={label}
      value={value}
      className={s.filterBoxItem}
    />
  );
}
