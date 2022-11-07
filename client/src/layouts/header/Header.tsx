import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionPart } from './Function';
import s from './header.module.scss';
import { ISHeader } from './interface';
import { MenuPart } from './Menu';

const styles: ISHeader = {
  header: s.header,
  headerScroll: s['header--scroll'],
  container: s['header__container'],
  row: s['header__row'],
};

function HeaderLayout() {
  const theme = useTheme();
  const media = {
    upMdMedia: useMediaQuery<boolean>(theme.breakpoints.up('md')),
    upXlMedia: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    downMdMedia: useMediaQuery<boolean>(theme.breakpoints.down('md')),
  };
  const lapMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));
  const landLapMedia = useMediaQuery<boolean>(theme.breakpoints.between('md', 'xl'));
  const downLandMedia = useMediaQuery<boolean>(theme.breakpoints.down('md'));

  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
    <header className={clsx(styles.header, scrollPage && styles.headerScroll)}>
      <Container className={styles.container}>
        <section className={styles.row}>
          <MenuPart media={media} />
          <FunctionPart
            media={media}
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
          />
        </section>
      </Container>
    </header>
  );
}

export default HeaderLayout;
