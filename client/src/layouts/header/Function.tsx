import { useState } from 'react';
import { IFunctionProps } from './interface';
import {
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import s from './header.module.scss';

export const FunctionPart = (props: IFunctionProps) => {
  if (!props) return null;
  const { media } = props;

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Stack component={'section'} className={s['header__column']}>
      <>
        {showSearch ? (
          <TextField
            type={'search'}
            value={props.searchValue}
            onChange={props.handleSearchValue}
            placeholder={'Nhập hoa, chậu yêu thích...'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" onClick={toggleSearch}>
                  <SearchIcon sx={{ width: '2rem', height: '2rem' }} />
                </InputAdornment>
              ),
            }}
            className={s['search__input']}
          />
        ) : (
          <IconButton onClick={toggleSearch}>
            <SearchIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
          </IconButton>
        )}
      </>
      <>
        {media.upXlMedia && (
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
              className={s['user__menu']}
            >
              <MenuItem>
                <Link to={'/account/login'} className={s['user__link']}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  Login
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Link to={'/account/register'} className={s['user__link']}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </>
    </Stack>
  );
};
