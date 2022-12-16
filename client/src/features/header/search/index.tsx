import { InputAdornment } from '@mui/material';
import { Control, FieldValues } from 'react-hook-form';
import { CustomTextField } from '~/components/form/input';
import { SearchIcon } from '~/components/icons';

interface SearchProps {
  control: Control<FieldValues, any>
}

function Search({ control }: SearchProps) {
  return (
    <CustomTextField
      control={control}
      name="search"
      placeholder="Nhập hoa, chậu yêu thích..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        className: 'text-14',
      }}
    />
  );
}

export { Search };

