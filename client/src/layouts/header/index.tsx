import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CartFeature, HomeLinkFeature, NavFeature, SearchFeature, UserMenuFeature } from '~/features/header';

function Header() {
  const [scrollPage, setScrollPage] = useState<boolean>(false);

  useEffect(() => {
    // * Listen if user scroll, header box-shadow CSS appear
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
    <header
      className={clsx('fixed top-0 left-0 right-0 z-10 bg-white-1', {
        'shadow-md': scrollPage,
      })}
    >
      <Container className="container">
        <Stack direction="row" className="h-100 items-center justify-between">
          <Stack direction="row" className={clsx('menu', 'items-center')}>
            <HomeLinkFeature textSize="text-40" />
            <NavFeature />
          </Stack>
          <Stack direction="row" className={clsx('menu', 'items-center')}>
            <SearchFeature />
            <CartFeature />
            <UserMenuFeature />
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}

export default Header;
