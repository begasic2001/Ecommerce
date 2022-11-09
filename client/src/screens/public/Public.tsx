import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FooterLayout } from '~/layouts/footer';
import { HeaderLayout } from '~/layouts/header';
import { Homepage } from '~/pages/public/home';
import { ProductDetailPage } from '~/pages/public/product-detail';
import { ProductsPage } from '~/pages/public/products';
import { IPublicRoutes } from './interface';

const publicRoutes: IPublicRoutes[] = [
  { id: uuidv4(), path: '/home', component: Homepage },
  { id: uuidv4(), path: '/products', component: ProductsPage },
  { id: uuidv4(), path: '/products/:productId', component: ProductDetailPage },
];

function PublicScreens() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, [location.pathname]);

  return (
    <>
      <HeaderLayout />
      <section className="main">
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            return <Route key={route.id} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </section>
      <FooterLayout />
    </>
  );
}

export default PublicScreens;
