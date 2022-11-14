import { Menu as MenuIcon } from '@mui/icons-material';
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
import { LogoWebsite } from '~/components/logo';
import { accountLinkDrawer, navLink, navLinkDrawer } from './data';
import { IMenuLinkProps } from './interface';
import s from './menu.module.scss';

export const NavPart = () => (
  <nav className={s.nav}>
    {navLink.map((item) => (
      <NavLink key={item.id} to={item.path} className={s['nav__item']}>
        {item.name}
      </NavLink>
    ))}
  </nav>
);

export const HomeLinkPart = () => (
  <Link to="/home" className={s.home}>
    <LogoWebsite />
  </Link>
);

export const DrawerBtnPart = () => {
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

  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>
        <MenuIcon className={s['icon__menu']} />
      </Button>
      <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
        <section onClick={() => toggleDrawer(false)} className={s.drawer}>
          <HomeLinkPart />
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
      </Drawer>
    </>
  );
};