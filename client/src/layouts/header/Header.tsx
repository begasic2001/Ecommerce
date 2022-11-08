import { Container } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionComponent } from './Function';
import s from './header.module.scss';
import { ISHeader } from './interface';
import { MenuComponent } from './MenuComp';

const styles: ISHeader = {
  header: s.header,
  headerScroll: s['header--scroll'],
  container: s['header__container'],
  row: s['header__row'],
};

function HeaderLayout() {
  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY: number = window.scrollY;
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
    <header className={clsx(styles.header, scrollPage && styles.headerScroll)}>
      <Container className={styles.container}>
        <section className={styles.row}>
          <MenuComponent />
          <FunctionComponent searchValue={searchValue} handleSearchValue={handleSearchValue} />
        </section>
      </Container>
    </header>
  );
}

export default HeaderLayout;
