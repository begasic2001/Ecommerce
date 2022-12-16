import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface CustomTextField {
  control: Control<FieldValues, any>;
  name: string;
  defaultValue?: string;
  error?: any;
  label?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  fullWidth?: boolean;
  type?: string;
  placeholder?: string;
  InputProps?: {
    startAdornment: JSX.Element;
    className: string;
  }
}

function CustomTextField({
  control,
  name,
  defaultValue = '',
  error = '',
  margin = 'none',
  fullWidth = true,
  ...props
}: CustomTextField) {
  return (
    <section className="form-input">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            InputProps={{
              className: 'text-14',
            }}
            InputLabelProps={{
              className: 'text-14',
            }}
            margin={margin}
            {...props}
          />
        )}
      />
      {error && <p className="form-item-error">{error}</p>}
    </section>
  );
}

export default CustomTextField;
