import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Homepage } from '~/features/Public/pages/Home';
import { HeaderLayout } from '~/layouts/PublicHeader';
import { NavLayout } from '~/layouts/PublicNav';
import { FooterLayout } from '~/layouts/Footer';
import { IPublicRoutes } from './interface';

const publicRoutes: IPublicRoutes[] = [{ path: '', component: Homepage }];

const PublicScreen = () => {
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
