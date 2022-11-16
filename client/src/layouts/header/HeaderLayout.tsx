import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import FunctionComp from './function';
import s from './header.module.scss';
import MenuComp from './menu';

function HeaderLayout() {
  const [scrollPage, setScrollPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY: number = window.scrollY;
      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage, setScrollPage]);

  return (
    <header className={clsx(s.header, scrollPage && s['header--isScrolled'])}>
      <Container className={s.container}>
        <Stack direction="row" className={s.row}>
          <MenuComp />
          <FunctionComp />
        </Stack>
      </Container>
    </header>
  );
}

export default HeaderLayout;
