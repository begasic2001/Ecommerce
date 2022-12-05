import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { Control, Controller, FieldValues } from 'react-hook-form';
import moment from 'moment';
import clsx from 'clsx';

interface CustomDatePicker {
  control: Control<FieldValues, any>;
  name: string;
  defaultValue?: string;
  error?: string;
  label?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
}

function CustomDatePicker({
  control,
  name,
  defaultValue = moment().format(),
  error = '',
  margin = 'none',
  ...props
}: CustomDatePicker) {
  return (
    <section className="form-input">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <DesktopDatePicker
            value={value}
            onChange={onChange}
            inputFormat="DD/MM/YYYY"
            InputProps={{
              className: clsx('text-14', '[&_.MuiSvgIcon-root]:w-25 [&_.MuiSvgIcon-root]:h-25'),
            }}
            PaperProps={{
              className: '[&_*]:text-14',
            }}
            renderInput={(params) => (
              <TextField
                InputLabelProps={{
                  className: 'text-14',
                }}
                fullWidth
                margin={margin}
                {...params}
                {...props}
              />
            )}
          />
        )}
      />
      {error && <p className="form-item-error">{error}</p>}
    </section>
  );
}

export default CustomDatePicker;
