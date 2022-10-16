import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FooterLayout } from '~/layouts/footer';
import { HeaderLayout } from '~/layouts/public-header';
import { LoginPage } from '~/pages/account/login';
import { ILogRoutes } from './interface';

const logRoutes: ILogRoutes[] = [{ id: uuidv4(), path: 'login', component: LoginPage }];

const Account = () => {
  return (
    <>
      <HeaderLayout />
      <Routes>
        {logRoutes.map((route) => {
          const Page = route.component;
          return <Route key={route.id} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <FooterLayout />
    </>
  );
};

export default Account;
