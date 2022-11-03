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
  Stack
} from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LogoWebsite } from '~/components/logo';
import s from './header.module.scss';
import {
  IMenuLinkPath,
  IMenuLinkPathDrawer,
  IMenuLinkPathProps,
  IMenuProps,
  ISMenuHeader
} from './interface';

const styles: ISMenuHeader = {
  headerColumn: s['header__column'],
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

export function MenuPart(props: IMenuProps): JSX.Element | null {
  if (!props) return null;
  const { media } = props;

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // Handle drawer on/off
  const toggleDrawer = (toggle: boolean): void => {
    setOpenDrawer(toggle);
  };

  const ListItemDrawer = ({ item }: IMenuLinkPathProps): JSX.Element => {
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
  const list = (): JSX.Element => (
    <section onClick={() => toggleDrawer(false)} className={styles.drawer}>
      <Link to="/home" className={styles.drawerLogo}>
        <LogoWebsite />
      </Link>
      <List>
        {navLinkPathDrawer.map(
          (item: IMenuLinkPathDrawer): JSX.Element => (
            <ListItemDrawer item={item} />
          )
        )}
      </List>
      <Divider />
      <List>
        {accountLinkPathDrawer.map(
          (item: IMenuLinkPathDrawer): JSX.Element => (
            <ListItemDrawer item={item} />
          )
        )}
      </List>
    </section>
  );

  return (
    <Stack className={styles.headerColumn}>
      {(media.tabletMedia || media.mobileMedia) && (
        <>
          <Button onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ fill: '#000', width: '2.5rem', height: '2.5rem' }} />
          </Button>
          <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      )}
      {(media.tabletMedia || media.desktopMedia) && (
        <Link to="/home" className={styles.homeLink}>
          <LogoWebsite />
        </Link>
      )}
      {media.desktopMedia && (
        <nav className={styles.nav}>
          {navLinkPath.map(
            (item: IMenuLinkPath): JSX.Element => (
              <NavLink key={item.id} to={item.path} className={styles.navItem}>
                {item.name}
              </NavLink>
            )
          )}
        </nav>
      )}
    </Stack>
  );
}
