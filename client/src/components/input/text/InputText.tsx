import { useController } from 'react-hook-form';
import { IInputText } from './interface';
import TextField from '@mui/material/TextField';

export function CustomTextField(props: IInputText) {
  const { control, name, defaultValue } = props;

  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || '',
  });

  return <TextField {...props} {...field} />;
}
