import {
  Article as ArticleIcon,
  Category as CategoryIcon,
  Home as HomeIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LogoWebsite } from '~/components/logo';
import s from './header.module.scss';

const navLinkPath = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home', icon: HomeIcon },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products', icon: CategoryIcon },
  { id: uuidv4(), name: 'Blog', path: '/blog', icon: ArticleIcon },
];

const accountLinkPath = [
  { id: uuidv4(), name: 'Đăng nhập', path: '/account/login', icon: LoginIcon },
  { id: uuidv4(), name: 'Đăng ký', path: '/account/register', icon: LogoutIcon },
];

export const MenuPart = (props) => {
  if (!props) return null;

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const { media } = props;

  const list = () => (
    <section
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      className={s['drawer__box']}
    >
      <Link to={'/home'} className={s['drawer__logo']}>
        <LogoWebsite />
      </Link>
      <>
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
      </>
    </section>
  );

  return (
    <Stack component={'section'} className={s['header__column']}>
      {(media.medium || media.small) && (
        <>
          <Button onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ fill: '#000', width: '2.5rem', height: '2.5rem' }} />
          </Button>
          <Drawer anchor={'left'} open={openDrawer} onClose={() => toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      )}
      {(media.medium || media.large) && (
        <Link to={'/home'} className={s['home-link']}>
          <LogoWebsite />
        </Link>
      )}
      {media.large && (
        <nav className={s.nav}>
          <NavLink to={'/home'}>Trang chủ</NavLink>
          <NavLink to={'/products'}>Sản phẩm</NavLink>
          <NavLink to={'/blog'}>Blog</NavLink>
        </nav>
      )}
    </Stack>
  );
};
