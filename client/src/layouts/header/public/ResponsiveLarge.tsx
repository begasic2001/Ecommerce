import { AccountCircle, Login, Logout, Search } from '@mui/icons-material';
import {
  Container,
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  TextField
} from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoWebsite } from '~/components/logo';
import s from './header-public.module.scss';
import { IHeaderPublicProps } from './interface';

export const HeaderPublicLarge = (props: IHeaderPublicProps) => {
  if (!props) return null;

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Container component={'section'} className={s['header__container']}>
      <Stack component={'section'} className={s['header__row']}>
        <Stack component={'section'} className={s['header__column']}>
          <Link to={'/home'} className={s['home-link']}>
            <LogoWebsite />
          </Link>
          <nav className={s.nav}>
            <NavLink to={'/home'}>Trang chủ</NavLink>
            <NavLink to={'/products'}>Sản phẩm</NavLink>
            <NavLink to={'/blog'}>Blog</NavLink>
          </nav>
        </Stack>
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
                      <Search sx={{ width: '2rem', height: '2rem' }} />
                    </InputAdornment>
                  ),
                }}
                className={s['search__input']}
              />
            ) : (
              <IconButton onClick={toggleSearch}>
                <Search sx={{ width: '2.5rem', height: '2.5rem' }} />
              </IconButton>
            )}
          </>
          <>
            <IconButton onClick={handleClick} className={s.user}>
              <AccountCircle sx={{ width: '3rem', height: '3rem' }} />
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
                    <Login />
                  </ListItemIcon>
                  Login
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Link to={'/account/register'} className={s['user__link']}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </>
        </Stack>
      </Stack>
    </Container>
  );
};
