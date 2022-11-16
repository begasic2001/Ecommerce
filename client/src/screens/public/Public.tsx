import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { FooterLayout } from '~/layouts/footer';
import HeaderLayout from '~/layouts/header';
import { publicRoutes } from './data';

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
