import { InputAdornment, TextField } from '@mui/material';
import { SearchIcon } from '~/components/icons';

function Search() {
  return (
    <TextField
      placeholder="Nhập hoa, chậu yêu thích..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        className: 'text-14',
      }}
      className="w-250"
    />
  );
}

export { Search };
