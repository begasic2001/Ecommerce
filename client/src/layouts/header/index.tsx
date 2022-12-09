import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import {
  CartFeature,
  HomeLinkFeature,
  NavFeature,
  SearchFeature,
  UserMenuFeature,
} from '~/features/header';
import { useSelector } from 'react-redux';

function Header() {
  const userSelectorData = useSelector((state: any) => state.user.data);
  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(() => {
    const userData = Object.keys(userSelectorData);
    if (userData.length > 0) return true;
    return false;
  });

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

  useEffect(() => {
    const checkLogin = () => {
      console.log('userSelectorData', userSelectorData);
      const userData = Object.keys(userSelectorData);
      if (userData.length > 0) setIsLogin(true);
      else setIsLogin(false);
    };

    checkLogin();
  }, [userSelectorData, isLogin]);

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
            {isLogin && <CartFeature />}
            <UserMenuFeature isLogin={isLogin} />
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}

export default Header;
