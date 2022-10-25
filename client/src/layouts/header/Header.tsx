import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionPart } from './Function';
import s from './header.module.scss';
import { MenuPart } from './Menu';

const HeaderLayout = () => {
  const theme = useTheme();
  const largeMedia = useMediaQuery(theme.breakpoints.up('xl'));
  const mediumMedia = useMediaQuery(theme.breakpoints.between('md', 'xl'));
  const smallMedia = useMediaQuery(theme.breakpoints.down('md'));

  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce<string>(searchValue, 300);
  const media = {
    large: largeMedia,
    medium: mediumMedia,
    small: smallMedia,
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY = window.scrollY;

      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage]);

  return (
    <header className={clsx(s.header, scrollPage && s['header--isScroll'])}>
      <Container component={'section'} className={s['header__container']}>
        <Stack component={'section'} className={s['header__row']}>
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
