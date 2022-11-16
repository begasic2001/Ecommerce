import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { DrawerResponsive, HomeLink, Nav } from './components';
import s from './menu.module.scss';

function Menu() {
  const theme = useTheme();
  const media = {
    upXl: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    upMd: useMediaQuery<boolean>(theme.breakpoints.up('md')),
  };

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const drawerProps = {
    openDrawer,
    toggleDrawer,
  };

  return (
    <section className={s.column}>
      {!media.upXl && <DrawerResponsive drawerProps={drawerProps} />}
      {media.upMd && <HomeLink />}
      {media.upXl && <Nav />}
    </section>
  );
}

export default Menu;
