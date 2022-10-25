import { useEffect } from 'react';
import { HeaderLayout } from '~/layouts/header';
import { FooterLayout } from '~/layouts/footer';
import { useNavigate, useLocation } from 'react-router-dom';

const PublicScreens = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, [location.pathname]);

  return (
    <>
      <HeaderLayout />
      <FooterLayout />
    </>
  );
};

export default PublicScreens;
