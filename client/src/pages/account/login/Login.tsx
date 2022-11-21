import { LoginFormFeature } from '~/features/account/login-form';
import { userApi } from '~/api';

function Login() {
  const handleFormSubmit = (value: any) => {
    console.log('value', value);
  };

  return <LoginFormFeature handleFormSubmit={handleFormSubmit} />;
}

export default Login;
