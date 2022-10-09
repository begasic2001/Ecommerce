import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Homepage } from '~/features/Public/pages/Home';
import { HeaderLayout } from '~/layouts/PublicHeader';
import { FooterLayout } from '~/layouts/Footer';

const publicRoutes = [{ path: '', component: Homepage }];

const PublicScreen = () => {
  return (
    <>
      <HeaderLayout />
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
