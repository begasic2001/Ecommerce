import { Container, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionComponent } from './FunctionComp';
import s from './header.module.scss';
import { MenuComponent } from './MenuComp';

function HeaderLayout() {
  const theme = useTheme();
  const media = {
    upXl: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    upMd: useMediaQuery<boolean>(theme.breakpoints.up('md')),
  };

  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
    <header className={clsx(s.header, scrollPage && s['header--scrolled'])}>
      <Container className={s['header__container']}>
        <section className={s['header__row']}>
          <MenuComponent media={media} />
          <FunctionComponent
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
            media={media}
          />
        </section>
      </Container>
    </header>
  );
}

export default HeaderLayout;
