import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Homepage } from '~/pages/public/home';
import { ProductList } from '~/pages/public/product-list';
import { ProductDetail } from '~/pages/public/product-detail';
import { FooterLayout } from '~/layouts/footer';
import { HeaderLayout } from '~/layouts/public-header';
import { NavLayout } from '~/layouts/public-nav';
import { IPublicRoutes } from './interface';

const publicRoutes: IPublicRoutes[] = [
  { id: uuidv4(), path: '/home', component: Homepage },
  { id: uuidv4(), path: '/products', component: ProductList },
  { id: uuidv4(), path: '/products/:productsId', component: ProductDetail },
];

const PublicScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, []);

  return (
    <>
      <HeaderLayout />
      <NavLayout />
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

export default PublicScreen;
