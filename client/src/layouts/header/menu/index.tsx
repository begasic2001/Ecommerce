import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { MenuUI } from './ComponentUI';
import s from './menu.module.scss';

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

  const menuProps = {
    openDrawer,
    toggleDrawer,
    media,
  };

  return (
    <section className={s.column}>
      <MenuUI menuProps={menuProps} />
    </section>
  );
}
