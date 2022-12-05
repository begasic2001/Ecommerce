import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CartPage, ChangePassPage, HistoryPage, InfoPage, PaymentPage, SuccessPage } from '~/pages/user';

const userRoutes = [
  { path: '/info', component: InfoPage },
  { path: '/change-pass', component: ChangePassPage },
  { path: '/history', component: HistoryPage },
  { path: '/cart', component: CartPage },
  { path: '/payment', component: PaymentPage },
  { path: '/success', component: SuccessPage },
];

function UserScreens() {
  return (
    <Routes>
      {userRoutes.map((route) => {
        const Page = route.component;
        return <Route key={uuidv4()} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default UserScreens;
