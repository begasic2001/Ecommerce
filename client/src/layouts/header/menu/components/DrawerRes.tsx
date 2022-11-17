import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { accountLinkDrawer, navLinkDrawer } from '../data';
import { IMenuLinkProps, IMenuProps } from '../interface';
import { HomeLink } from './HomeLink';
import s from '../menu.module.scss';

export function DrawerResponsive({ drawerProps }: IMenuProps) {
  const { openDrawer, toggleDrawer } = drawerProps;

  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>
        <MenuIcon sx={{ width: '2.5rem', height: '2.5rem', fill: '#000' }} />
      </Button>
      <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
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
      </Drawer>
    </>
  );
}

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
