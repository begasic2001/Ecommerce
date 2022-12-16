import { TextField } from '@mui/material';
import { Control, Controller, FieldValues, UseFormSetValue } from 'react-hook-form';
import { AddIcon, MinusIcon } from '~/components/icons';

interface CustomQuantityField {
  control: Control<FieldValues, any>;
  name: string;
  defaultValue?: string;
  error?: any;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  setValue: UseFormSetValue<FieldValues>;
  min?: number;
  max?: number;
}

function CustomQuantityField({
  control,
  name,
  defaultValue = '',
  error = '',
  margin = 'none',
  setValue,
  min = 1,
  max = 1,
  ...props
}: CustomQuantityField) {
  return (
    <section className="form-input">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <TextField
            type="number"
            value={value}
            onChange={onChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <section
                  className="mr-10"
                  onClick={() => setValue(name, Number(value) > 1 ? Number(value) - 1 : min)}
                >
                  <MinusIcon />
                </section>
              ),
              endAdornment: (
                <section
                  className="ml-10"
                  onClick={() => setValue(name, Number(value) < max ? Number(value) + 1 : max)}
                >
                  <AddIcon />
                </section>
              ),
              className: 'text-14 w-150',
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

export default CustomQuantityField;
