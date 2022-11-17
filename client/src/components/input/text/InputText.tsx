import { forwardRef } from 'react';
import { useController, Controller } from 'react-hook-form';
import { IInputText } from './interface';
import TextField from '@mui/material/TextField';

export const CustomTextField = forwardRef((props: IInputText, ref: any) => {
  const { control, name, defaultValue } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ''}
      render={({ field: { onChange } }) => <TextField {...props} onChange={onChange} ref={ref} />}
    />
  );
});
