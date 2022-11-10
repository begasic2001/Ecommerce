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
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.scss';
import { IFunctionAccountItem, IFunctionProps } from './interface';

export function FunctionComponent({ searchValue, handleSearchValue, media }: IFunctionProps) {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open: boolean = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
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
    <section className={s['header__column']}>
      <>
        {!showSearch && (
          <IconButton onClick={toggleSearch}>
            <SearchIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
          </IconButton>
        )}
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
      </>
      {media.upXl && (
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
            <AccountMenuItem path="/account/login" icon={<LoginIcon />} title="Login" />
            <Divider />
            <AccountMenuItem path="/account/register" icon={<RegisterIcon />} title="Register" />
          </Menu>
        </>
      )}
    </section>
  );
}
