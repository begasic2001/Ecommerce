import { LoginFormFeature } from '~/features/account/login-form';
import { userApi } from '~/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const [notExist, setNotExist] = useState<boolean>(false);

  const handleFormSubmit = async (value: any) => {
    const response = await userApi.getByQueryParams(value);
    const resData = response.data;

    if (resData.length > 0) {
      Cookies.set('isLogin', 'true');
      navigate(-1);
    } else {
      setNotExist(true);
    }
  };

  return <LoginFormFeature notExist={notExist} handleFormSubmit={handleFormSubmit} />;
}

export default Login;
