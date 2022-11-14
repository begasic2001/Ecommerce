import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { IFunctionProps } from './interface';
import { SearchInput, UserFunction } from './ComponentsUI';

export function FunctionComponent({ searchValue, handleSearchValue }: IFunctionProps) {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  return (
    <Stack direction="row">
      <SearchInput searchValue={searchValue} handleSearchValue={handleSearchValue} />
      {upXlMedia && <UserFunction />}
    </Stack>
  );
}
