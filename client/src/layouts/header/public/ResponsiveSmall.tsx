import {
  Article as ArticleIcon,
  Category as CategoryIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
  Search as SearchIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoWebsite } from '~/components/logo';
import { v4 as uuidv4 } from 'uuid';
import s from './header-public.module.scss';
import { IHeaderPublicProps } from './interface';

const navLinkPath = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home', icon: HomeIcon },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products', icon: CategoryIcon },
  { id: uuidv4(), name: 'Blog', path: '/blog', icon: ArticleIcon },
];

const accountLinkPath = [
  { id: uuidv4(), name: 'Đăng nhập', path: '/account/login', icon: LoginIcon },
  { id: uuidv4(), name: 'Đăng ký', path: '/account/register', icon: LogoutIcon },
];

export const HeaderPublicSmall = (props: IHeaderPublicProps) => {
  if (!props) return null;

  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      className={s['drawer__box']}
    >
      <Link to={'/home'} className={s['drawer__logo']}>
        <LogoWebsite />
      </Link>
      <List>
        {navLinkPath.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  <NavLink to={`${item.path}`} className={s['drawer__nav-item']}>
                    {item.name}
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {accountLinkPath.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  <NavLink to={`${item.path}`} className={s['drawer__nav-item']}>
                    {item.name}
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Container component={'section'} className={s['header__container']}>
      <Stack component={'section'} className={s['header__row']}>
        <>
          <Button onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ fill: '#000', width: '2.5rem', height: '2.5rem' }} />
          </Button>
          <Drawer anchor={'left'} open={openDrawer} onClose={() => toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
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
      </Stack>
    </Container>
  );
};
