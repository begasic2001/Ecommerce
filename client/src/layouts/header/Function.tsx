import {
  AccountCircle as AccountCircleIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
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
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.scss';
import { IFunctionProps } from './interface';

export const FunctionPart = (props: IFunctionProps) => {
  if (!props) return null;
  const { media, searchValue, handleSearchValue } = props;

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const toggleSearch = (): void => {
    setShowSearch(!showSearch);
  };

  const accountMenuItem = () => (
    <MenuItem>
      <Link to="/account/login" className={s['user__link']}>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        Login
      </Link>
    </MenuItem>
  );

  return (
    <Stack className={s['header__column']}>
      {showSearch && (
        <TextField
          type="search"
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Nhập hoa, chậu yêu thích..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" onClick={toggleSearch}>
                <SearchIcon sx={{ width: '2rem', height: '2rem' }} />
              </InputAdornment>
            ),
          }}
          className={s.search}
        />
      )}
      {!showSearch && (
        <IconButton onClick={toggleSearch}>
          <SearchIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
        </IconButton>
      )}
      {media.desktopMedia && (
        <>
          <IconButton onClick={handleClick} className={s.user}>
            <AccountCircleIcon sx={{ width: '3rem', height: '3rem' }} />
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
            <MenuItem>
              <Link to="/account/login" className={s['user__link']}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                Login
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Link to="/account/register" className={s['user__link']}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </>
      )}
    </Stack>
  );
};
