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
  ListItemText,
  Stack, useMediaQuery, useTheme
} from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LogoWebsite } from '~/components/logo';
import { IDrawerProps, IMenuLink, IMenuLinkDrawer, IMenuLinkProps } from './interface';
import s from './menu.module.scss';

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

export function MenuComponent() {
  const theme = useTheme();
  const media = {
    upXl: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    upMd: useMediaQuery<boolean>(theme.breakpoints.up('md')),
  };

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  return (
    <Stack direction="row" className={s.column}>
      {!media.upXl && <DrawerBtn openDrawer={openDrawer} toggleDrawer={toggleDrawer} />}
      {media.upMd && <HomeLink />}
      {media.upXl && <NavPart />}
    </Stack>
  );
}

const NavPart = () => (
  <nav className={s.nav}>
    {navLink.map((item) => (
      <NavLink key={item.id} to={item.path} className={s['nav__item']}>
        {item.name}
      </NavLink>
    ))}
  </nav>
);

const HomeLink = () => (
  <Link to="/home" className={s.home}>
    <LogoWebsite />
  </Link>
);

const DrawerBtn = ({ openDrawer, toggleDrawer }: IDrawerProps) => {
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

  const DrawerList = () => (
    <section onClick={() => toggleDrawer(false)} className={s.drawer}>
      <HomeLink />
      <List sx={{ mt: '3rem' }}>
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
    <>
      <Button onClick={() => toggleDrawer(true)}>
        <MenuIcon className={s['icon__menu']} />
      </Button>
      <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </>
  );
};
