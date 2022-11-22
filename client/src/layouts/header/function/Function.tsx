import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import { Search, UserMenu } from './components';
import { ISearchRef } from './interface.type';
import Cookies from 'js-cookie';
import s from './function.module.scss';
import { Link } from 'react-router-dom';

function Function() {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));
  const checkLogin = !!Cookies.get('isLogin');

  const searchRef: ISearchRef = {
    btn: useRef(null),
    input: useRef(null),
    inputBtn: useRef(null),
  };

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu: boolean = Boolean(anchorEl);

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const toggleSearch = (e: { target: any }) => {
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
    <Stack direction="row" className={s.row}>
      <Search searchProps={searchProps} />
      {checkLogin && (
        <Link to="/user/cart">
          <ShoppingCartIcon sx={{ width: '2rem', height: '2rem', ml: '2rem' }} />
        </Link>
      )}
      {upXlMedia && <UserMenu userProps={userProps} />}
    </Stack>
  );
}

export default Function;
