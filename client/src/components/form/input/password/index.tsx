import { IconButton, TextField } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '~/components/icons';

interface CustomPassField {
  control: Control<FieldValues, any>;
  name: string;
  showPass: boolean;
  togglePass: () => null | void;
  defaultValue?: string;
  error?: any;
  label?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  ref?: any;
}

type ElementRef = ForwardedRef<HTMLInputElement>;

function CustomPassField(
  {
    control,
    name,
    defaultValue = '',
    error = '',
    margin = 'none',
    togglePass = () => null,
    showPass = false,
    ...props
  }: CustomPassField,
  ref: ElementRef
) {
  return (
    <section className="form-input">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <TextField
            type={showPass ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePass} edge="end">
                  {showPass ? <EyeIcon /> : <EyeSlashIcon />}
                </IconButton>
              ),
              className: 'text-14',
            }}
            InputLabelProps={{
              className: 'text-14',
            }}
            fullWidth
            margin={margin}
            inputRef={ref}
            {...props}
          />
        )}
      />
      {error && <p className="form-item-error">{error}</p>}
    </section>
  );
}

export default forwardRef(CustomPassField);
