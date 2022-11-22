import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FooterLayout } from '~/layouts/footer';
import HeaderLayout from '~/layouts/header';
import { UserInfoPage } from '~/pages/user/info';
import { CartPage } from '~/pages/user/cart';
import { PaymentPage } from '~/pages/user/payment';
import { IUserRoutes } from './interface';

const userRoutes: IUserRoutes[] = [
  { id: uuidv4(), path: 'info', component: UserInfoPage },
  { id: uuidv4(), path: 'change-pass', component: UserInfoPage },
  { id: uuidv4(), path: 'history', component: UserInfoPage },
  { id: uuidv4(), path: 'cart', component: CartPage },
  { id: uuidv4(), path: 'payment', component: PaymentPage },
];

function UserScreens() {
  return (
    <>
      <HeaderLayout />
      <Routes>
        {userRoutes.map((route) => {
          const Page = route.component;
          return <Route key={route.id} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <FooterLayout />
    </>
  );
}

export default UserScreens;
