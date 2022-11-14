import { useMediaQuery, useTheme } from '@mui/material';
import { DrawerBtnPart, HomeLinkPart, NavPart } from './ComponentsUI';
import s from './menu.module.scss';

export function MenuComponent() {
  const theme = useTheme();
  const media = {
    upXl: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    upMd: useMediaQuery<boolean>(theme.breakpoints.up('md')),
  };

  return (
    <section className={s.column}>
      {!media.upXl && <DrawerBtnPart />}
      {media.upMd && <HomeLinkPart />}
      {media.upXl && <NavPart />}
    </section>
  );
}
