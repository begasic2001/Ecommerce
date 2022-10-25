import { useEffect } from 'react';
import { HeaderLayout } from '~/layouts/header';
import { FooterLayout } from '~/layouts/footer';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Homepage } from '~/pages/public/home';
import { v4 as uuidv4 } from 'uuid';
import { IPublicRoutes } from './interface';

const publicRoutes: IPublicRoutes[] = [{ id: uuidv4(), path: '/home', component: Homepage }];

const PublicScreens = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, [location.pathname]);

  return (
    <>
      <HeaderLayout />
      <Routes>
        {publicRoutes.map((route) => {
          const Page = route.component;
          return <Route key={route.id} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <FooterLayout />
    </>
  );
};

export default PublicScreens;
