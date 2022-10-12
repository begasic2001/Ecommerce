import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Homepage } from '~/features/Public/pages/Home';
import { ProductList } from '~/features/Public/pages/ProductList';
import { FooterLayout } from '~/layouts/Footer';
import { HeaderLayout } from '~/layouts/PublicHeader';
import { NavLayout } from '~/layouts/PublicNav';
import { IPublicRoutes } from './interface';

const publicRoutes: IPublicRoutes[] = [
  { path: '/home', component: Homepage },
  { path: '/products', component: ProductList },
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
          return <Route key={uuidv4()} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <FooterLayout />
    </>
  );
};

export default PublicScreen;
