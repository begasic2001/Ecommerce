import { useEffect } from 'react';
import { HeaderPublic } from '~/layouts/header/public';
import { useNavigate, useLocation } from 'react-router-dom';

const PublicScreens = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, [location.pathname]);

  return <HeaderPublic />;
};

export default PublicScreens;
