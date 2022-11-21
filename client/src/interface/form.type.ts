import { Control, FieldValues } from 'react-hook-form';

export interface IInputText {
  control: Control<FieldValues, any>;
  type?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  InputProps?: {
    startAdornment?: JSX.Element;
    endAdornment?: JSX.Element;
  };
  ref?: React.MutableRefObject<HTMLElement | null>;
  className?: string;
}
