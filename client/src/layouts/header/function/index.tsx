import {
  AccountCircle as AccountCircleIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './function.module.scss';
import { IFunctionAccountItem, IFunctionProps } from './interface';

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

const SearchInput = (props: IFunctionProps) => {
  const { searchValue, handleSearchValue } = props;

  const searchBtnRef: React.MutableRefObject<null | HTMLButtonElement> = useRef(null);
  const searchInputRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const searchInputBtnRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  const [showSearch, setShowSearch] = useState<boolean>(false);

  useEffect(() => {
    const toggleSearch = (e: any) => {
      const nodeSearch = searchBtnRef.current;
      const nodeInput = searchInputRef.current;
      const nodeInputBtn = searchInputBtnRef.current;
      const nodeTarget = e.target;

      if (nodeSearch && nodeSearch?.contains(nodeTarget)) {
        setShowSearch(true);
      } else if (nodeInputBtn && nodeInputBtn?.contains(nodeTarget)) {
        setShowSearch(false);
      } else if (nodeInput && !nodeInput?.contains(nodeTarget)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('click', toggleSearch);
    return () => document.removeEventListener('click', toggleSearch);
  }, [showSearch, setShowSearch]);

  return (
    <>
      {!showSearch && (
        <IconButton ref={searchBtnRef}>
          <SearchIcon className={s['icon__search']} />
        </IconButton>
      )}
      {showSearch && (
        <TextField
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Nhập hoa, chậu yêu thích..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" ref={searchInputBtnRef}>
                <SearchIcon className={s['icon__search-input']} />
              </InputAdornment>
            ),
          }}
          ref={searchInputRef}
          className={s.search}
        />
      )}
    </>
  );
};

const UserFunction = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open: boolean = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const AccountMenuItem = ({ path, icon, title }: IFunctionAccountItem) => (
    <MenuItem>
      <Link to={path} className={s['user__link']}>
        <ListItemIcon>{icon}</ListItemIcon>
        {title}
      </Link>
    </MenuItem>
  );

  return (
    <>
      <IconButton onClick={handleClick} className={s.user}>
        <AccountCircleIcon className={s['icon__account']} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        className={s['user-menu']}
      >
        <AccountMenuItem path="/account/login" icon={<LoginIcon />} title="Login" />
        <Divider />
        <AccountMenuItem path="/account/register" icon={<RegisterIcon />} title="Register" />
      </Menu>
    </>
  );
};
