import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FooterLayout } from '~/layouts/footer';
import { HeaderLayout } from '~/layouts/header';
import { Homepage } from '~/pages/public/home';
import { ProductsPage } from '~/pages/public/products';
import { IPublicRoutes } from './interface';

const publicRoutes: IPublicRoutes[] = [
  { id: uuidv4(), path: '/home', component: Homepage },
  { id: uuidv4(), path: '/products', component: ProductsPage },
];

function PublicScreens() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if path name is '/', then change it '/home'
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
}

export default PublicScreens;
