import { Control, FieldValues } from 'react-hook-form';

export interface IInputText {
  control: Control<FieldValues, any>;
  name: string;
  defaultValue: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  InputProps?: {
    startAdornment?: JSX.Element;
  };
  ref?: React.MutableRefObject<HTMLElement | null>;
  className?: string;
}
