import { IconButton, TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '~/components/icons';

interface CustomTextField {
  control: Control<FieldValues, any>;
  name: string;
  showPass: boolean;
  togglePass: () => null | void;
  defaultValue?: string;
  error?: string;
  label?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
}

function CustomTextField({
  control,
  name,
  defaultValue = '',
  error = '',
  margin = 'none',
  togglePass = () => null,
  showPass = false,
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
            {...props}
          />
        )}
      />
      {error && <p className="form-item-error">{error}</p>}
    </section>
  );
}

export default CustomTextField;
