import {
  Article as ArticleIcon,
  Category as CategoryIcon,
  Home as HomeIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LogoWebsite } from '~/components/logo';
import s from './header.module.scss';
import { IMediaProps, IMenuLink, IMenuLinkDrawer, IMenuLinkProps } from './interface';

const navLinkDrawer: IMenuLinkDrawer[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home', icon: HomeIcon },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products', icon: CategoryIcon },
  { id: uuidv4(), name: 'Blog', path: '/blog', icon: ArticleIcon },
];

const accountLinkDrawer: IMenuLinkDrawer[] = [
  { id: uuidv4(), name: 'Đăng nhập', path: '/account/login', icon: LoginIcon },
  { id: uuidv4(), name: 'Đăng ký', path: '/account/register', icon: LogoutIcon },
];

const navLink: IMenuLink[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home' },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products' },
  { id: uuidv4(), name: 'Blog', path: '/blog' },
];

export function MenuComponent({ media }: IMediaProps) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const ListItemDrawer = ({ item }: IMenuLinkProps) => {
    const Icon = item.icon;
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to={`${item.path}`} className={s['drawer__item']}>
              {item.name}
            </NavLink>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  };

  const list = () => (
    <section onClick={() => toggleDrawer(false)} className={s.drawer}>
      <Link to="/home" className={s['drawer__logo']}>
        <LogoWebsite />
      </Link>
      <List>
        {navLinkDrawer.map((item) => (
          <ListItemDrawer key={item.id} item={item} />
        ))}
      </List>
      <Divider />
      <List>
        {accountLinkDrawer.map((item) => (
          <ListItemDrawer key={item.id} item={item} />
        ))}
      </List>
    </section>
  );

  return (
    <section className={s['header__column']}>
      {!media.upXl && (
        <>
          <Button onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ fill: '#000', width: '2.5rem', height: '2.5rem' }} />
          </Button>
          <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      )}
      {media.upMd && (
        <Link to="/home" className={s['home-link']}>
          <LogoWebsite />
        </Link>
      )}
      {media.upXl && (
        <nav className={s.nav}>
          {navLink.map((item) => (
            <NavLink key={item.id} to={item.path} className={s['nav__item']}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </section>
  );
}
