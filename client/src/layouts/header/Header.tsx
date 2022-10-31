import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionPart } from './Function';
import s from './header.module.scss';
import { MenuPart } from './Menu';

function HeaderLayout() {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));
  const betweenMdXlMedia = useMediaQuery<boolean>(theme.breakpoints.between('md', 'xl'));
  const downMdMedia = useMediaQuery<boolean>(theme.breakpoints.down('md'));

  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce<string>(searchValue, 300);
  const media: {
    upXlMedia: boolean;
    betweenMdXlMedia: boolean;
    downMdMedia: boolean;
  } = {
    upXlMedia,
    betweenMdXlMedia,
    downMdMedia,
  };

  // Set search Value for input onChange event
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    // Set bottom box-shadow true if the page is scrolled, which coordinate >= 100
    const handleScrollPage = () => {
      const getCoordinateY = window.scrollY;
      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage, setScrollPage]);

  return (
    <header className={clsx(s.header, scrollPage && s['header--isScroll'])}>
      <Container className={s['header__container']}>
        <Stack className={s['header__row']}>
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
};

export default HeaderLayout;
