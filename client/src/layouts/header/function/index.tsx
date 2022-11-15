import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDebounce } from '~/hooks';
import { SearchInput, UserFunction } from './ComponentsUI';

export function FunctionComponent() {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  const [searchValue, setSearchValue] = useState<string>('');
  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Stack direction="row">
      <SearchInput searchValue={searchValue} handleSearchValue={handleSearchValue} />
      {upXlMedia && <UserFunction />}
    </Stack>
  );
}
