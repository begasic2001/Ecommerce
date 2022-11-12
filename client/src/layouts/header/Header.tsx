import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { FunctionComponent } from './function';
import s from './header.module.scss';
import { MenuComponent } from './menu';

function HeaderLayout() {
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
    <header className={clsx(s.header, scrollPage && s['header--isScrolled'])}>
      <Container className={s.container}>
        <Stack direction="row" className={s.row}>
          <MenuComponent />
          <FunctionComponent searchValue={searchValue} handleSearchValue={handleSearchValue} />
        </Stack>
      </Container>
    </header>
  );
}

export default HeaderLayout;
