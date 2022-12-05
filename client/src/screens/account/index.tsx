import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { InfoPage, LoginPage, RegisterPage, ResetPage } from '~/pages/account';

const accountRoutes = [
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'reset', component: ResetPage },
  { path: 'info', component: InfoPage },
];

function AccountScreens() {
  return (
    <Routes>
      {accountRoutes.map((route) => {
        const Page = route.component;
        return <Route key={uuidv4()} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default AccountScreens;
