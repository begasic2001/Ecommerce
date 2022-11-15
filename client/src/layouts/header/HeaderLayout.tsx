import { Container } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FunctionComponent } from './function';
import s from './header.module.scss';
import { MenuComponent } from './menu';

function HeaderLayout() {
  const [scrollPage, setScrollPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY = window.scrollY;
      if (getCoordinateY >= 100) {
        setScrollPage(true);
      } else {
        setScrollPage(false);
      }
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage, setScrollPage]);

  return (
    <header className={clsx(s.header, scrollPage && s['header--isScrolled'])}>
      <Container className={s.container}>
        <section className={s.row}>
          <MenuComponent />
          <FunctionComponent />
        </section>
      </Container>
    </header>
  );
}

export default HeaderLayout;
