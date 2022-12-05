import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import FooterLayout from '~/layouts/footer';
import { Stack } from '@mui/material';
import HeaderLayout from '~/layouts/header';
import PublicScreens from '~/screens/public';
import AccountScreens from '~/screens/account';
import UserScreens from '~/screens/user';
import clsx from 'clsx';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // * If pathname is '/', set it '/home' is base path
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname]);

  return (
    <section className="App">
      <Stack className="h-[100vh]">
        <HeaderLayout />
        <section className={clsx('main', 'my-100')}>
          <Routes>
            <Route path="/*" element={<PublicScreens />} />
            <Route path="/account/*" element={<AccountScreens />} />
            <Route path="/user/*" element={<UserScreens />} />
          </Routes>
        </section>
        <FooterLayout />
      </Stack>
    </section>
  );
}

export default App;
