import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionPart } from './Function';
import s from './header.module.scss';
import { IMedia, ISHeader } from './interface';
import { MenuPart } from './Menu';

const styles: ISHeader = {
  header: s.header,
  headerIsScroll: s['header--isScroll'],
  headerContainer: s['header__container'],
  headerRow: s['header__row'],
};

function HeaderLayout(): JSX.Element {
  const theme = useTheme();
  const desktopMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));
  const tabletMedia = useMediaQuery<boolean>(theme.breakpoints.between('md', 'xl'));
  const mobileMedia = useMediaQuery<boolean>(theme.breakpoints.down('md'));

  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  // Set search Value for input onChange event
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const media: IMedia = {
    desktopMedia,
    tabletMedia,
    mobileMedia,
  };

  useEffect(() => {
    // Set bottom box-shadow true if the page is scrolled, which coordinate >= 100
    const handleScrollPage = (): void => {
      const getCoordinateY: number = window.scrollY;
      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage, setScrollPage]);

  return (
    <header className={clsx(styles.header, scrollPage && styles.headerIsScroll)}>
      <Container className={styles.headerContainer}>
        <Stack className={styles.headerRow}>
          <MenuPart media={media} />
          <FunctionPart
            media={media}
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
          />
        </Stack>
      </Container>
    </header>
  );
}

export default HeaderLayout;
