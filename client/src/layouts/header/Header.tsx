import { Container } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionComponent } from './FunctionComp';
import styles from './header.module.scss';
import { ISHeader } from './interface';
import { MenuComponent } from './MenuComp';

const s: ISHeader = {
  header: styles.header,
  headerScrolled: styles['header--scrolled'],
  container: styles['header__container'],
  row: styles['header__row'],
};

function HeaderLayout() {
  const [scrollPage, setScrollPage] = useState<boolean>(false); // State check scroll page
  const [searchValue, setSearchValue] = useState<string>(''); // State storing search input value

  const debounceSearchValue = useDebounce<string>(searchValue, 300); // Delay receive search input value

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    // Check page is scroll by coordinate Y is larger than 100
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
    <header className={clsx(s.header, scrollPage && s.headerScrolled)}>
      <Container className={s.container}>
        <section className={s.row}>
          <MenuComponent />
          <FunctionComponent searchValue={searchValue} handleSearchValue={handleSearchValue} />
        </section>
      </Container>
    </header>
  );
}

export default HeaderLayout;
