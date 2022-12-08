import { ChangeEvent } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface CustomFileField {
  control: Control<FieldValues, any>;
  name: string;
  error?: any;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  fullWidth?: boolean;
  accept?: string;
}

function CustomFileField({ control, name, error = '', accept = '', ...props }: CustomFileField) {
  return (
    <section className="form-input">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <input
            type="file"
            accept={accept}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.files)}
            {...props}
          />
        )}
      />
      {error && <p className="form-item-error">{error}</p>}
    </section>
  );
}

export default CustomFileField;
