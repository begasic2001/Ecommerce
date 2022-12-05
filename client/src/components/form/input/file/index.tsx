import { IconButton, TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '~/components/icons';

interface CustomFileField {
  control: Control<FieldValues, any>;
  name: string;
  defaultValue?: string;
  error?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
}

function CustomFileField({
  control,
  name,
  defaultValue = '',
  error = '',
  margin = 'none',
  ...props
}: CustomFileField) {
  return (
    <section className="form-input">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <TextField
            type="file"
            value={value}
            onChange={onChange}
            InputProps={{
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

export default CustomFileField;
