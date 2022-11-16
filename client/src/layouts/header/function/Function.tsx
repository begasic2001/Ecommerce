import { useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { Search, UserMenu } from './components';
import { ISearchRef } from './interface';

function Function() {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  const searchRef: ISearchRef = {
    btn: useRef(null),
    input: useRef(null),
    inputBtn: useRef(null),
  };

  const [searchValue, setSearchValue] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  const openMenu: boolean = Boolean(anchorEl);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const toggleSearch = (e: any) => {
      const nodeSearch = searchRef.btn.current;
      const nodeInput = searchRef.input.current;
      const nodeInputBtn = searchRef.inputBtn.current;
      const nodeTarget = e.target;

      if (nodeSearch && nodeSearch?.contains(nodeTarget)) setShowSearch(true);
      else if (nodeInputBtn && nodeInputBtn?.contains(nodeTarget)) setShowSearch(false);
      else if (nodeInput && !nodeInput?.contains(nodeTarget)) setShowSearch(false);
    };

    document.addEventListener('click', toggleSearch);
    return () => document.removeEventListener('click', toggleSearch);
  }, [showSearch, setShowSearch]);

  const searchProps = {
    searchValue,
    handleSearchValue,
    showSearch,
    searchRef,
  };

  const userProps = {
    anchorEl,
    handleMenuClick,
    handleMenuClose,
    openMenu,
  };

  return (
    <Stack direction="row">
      <Search searchProps={searchProps} />
      {upXlMedia && <UserMenu userProps={userProps} />}
    </Stack>
  );
}

export default Function;
