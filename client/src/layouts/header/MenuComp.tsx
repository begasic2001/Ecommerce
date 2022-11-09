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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LogoWebsite } from '~/components/logo';
import styles from './header.module.scss';
import { IMenuLink, IMenuLinkDrawer, IMenuLinkProps, ISMenuHeader } from './interface';

const s: ISMenuHeader = {
  column: styles['header__column'],
  homeLink: styles['home-link'],
  nav: styles.nav,
  navItem: styles['nav__item'],
  drawer: styles.drawer,
  drawerLogo: styles['drawer__logo'],
  drawerItem: styles['drawer__item'],
};

const navLinkPathDrawer: IMenuLinkDrawer[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home', icon: HomeIcon },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products', icon: CategoryIcon },
  { id: uuidv4(), name: 'Blog', path: '/blog', icon: ArticleIcon },
];

const accountLinkPathDrawer: IMenuLinkDrawer[] = [
  { id: uuidv4(), name: 'Đăng nhập', path: '/account/login', icon: LoginIcon },
  { id: uuidv4(), name: 'Đăng ký', path: '/account/register', icon: LogoutIcon },
];

const navLinkPath: IMenuLink[] = [
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

  const [openDrawer, setOpenDrawer] = useState<boolean>(false); // toggle drawer when responsive

  // Handle on/off drawer
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
            <NavLink to={`${item.path}`} className={s.drawerItem}>
              {item.name}
            </NavLink>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  };

  // Drawer data when true
  const list = () => (
    <section onClick={() => toggleDrawer(false)} className={s.drawer}>
      <Link to="/home" className={s.drawerLogo}>
        <LogoWebsite />
      </Link>
      <List>
        {navLinkPathDrawer.map((item) => (
          <ListItemDrawer key={item.id} item={item} />
        ))}
      </List>
      <Divider />
      <List>
        {accountLinkPathDrawer.map((item) => (
          <ListItemDrawer key={item.id} item={item} />
        ))}
      </List>
    </section>
  );

  return (
    <section className={s.column}>
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
        <Link to="/home" className={s.homeLink}>
          <LogoWebsite />
        </Link>
      )}
      {media.upXl && (
        <nav className={s.nav}>
          {navLinkPath.map((item) => (
            <NavLink key={item.id} to={item.path} className={s.navItem}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </section>
  );
}
