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
import s from './header.module.scss';
import { IMenuLinkPath, IMenuLinkPathDrawer, IMenuLinkPathProps, ISMenuHeader } from './interface';

const styles: ISMenuHeader = {
  column: s['header__column'],
  homeLink: s['home-link'],
  nav: s.nav,
  navItem: s['nav__item'],
  drawer: s.drawer,
  drawerLogo: s['drawer__logo'],
  drawerItem: s['drawer__item'],
};

const navLinkPathDrawer: IMenuLinkPathDrawer[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home', icon: HomeIcon },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products', icon: CategoryIcon },
  { id: uuidv4(), name: 'Blog', path: '/blog', icon: ArticleIcon },
];

const accountLinkPathDrawer: IMenuLinkPathDrawer[] = [
  { id: uuidv4(), name: 'Đăng nhập', path: '/account/login', icon: LoginIcon },
  { id: uuidv4(), name: 'Đăng ký', path: '/account/register', icon: LogoutIcon },
];

const navLinkPath: IMenuLinkPath[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home' },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products' },
  { id: uuidv4(), name: 'Blog', path: '/blog' },
];

export function MenuComponent() {
  const theme = useTheme();
  const media = {
    upXl: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    downMd: useMediaQuery<boolean>(theme.breakpoints.down('md')),
  };

  const [openDrawer, setOpenDrawer] = useState<boolean>(false); // toggle drawer when responsive

  // Handle on/off drawer
  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const ListItemDrawer = ({ item }: IMenuLinkPathProps) => {
    const Icon = item.icon;
    return (
      <ListItem key={item.id} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to={`${item.path}`} className={styles.drawerItem}>
              {item.name}
            </NavLink>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  };

  // Drawer data when true
  const list = () => (
    <section onClick={() => toggleDrawer(false)} className={styles.drawer}>
      <Link to="/home" className={styles.drawerLogo}>
        <LogoWebsite />
      </Link>
      <List>
        {navLinkPathDrawer.map((item) => (
          <ListItemDrawer item={item} />
        ))}
      </List>
      <Divider />
      <List>
        {accountLinkPathDrawer.map((item) => (
          <ListItemDrawer item={item} />
        ))}
      </List>
    </section>
  );

  return (
    <section className={styles.column}>
      {media.downMd && (
        <>
          <Button onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ fill: '#000', width: '2.5rem', height: '2.5rem' }} />
          </Button>
          <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      )}
      {!media.downMd && (
        <Link to="/home" className={styles.homeLink}>
          <LogoWebsite />
        </Link>
      )}
      {media.upXl && (
        <nav className={styles.nav}>
          {navLinkPath.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </section>
  );
}
