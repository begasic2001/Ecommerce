import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import s from './filter.module.scss';

interface ICheckbox {
  label: string;
  checked?: boolean;
  value: string;
  onChange?: (e: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
}

export function CheckboxFilter({ label, value, onChange }: ICheckbox) {
  return (
    <FormControlLabel
      control={<Checkbox />}
      labelPlacement="start"
      label={label}
      value={value}
      onChange={onChange}
      className={s.filterBoxItem}
    />
  );
}
