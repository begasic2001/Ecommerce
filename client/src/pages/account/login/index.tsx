import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { loginUser } from '~/app/userSlice';
import { LoginFormFeature } from '~/features/account/login';
import { useNavigate } from 'react-router-dom';

export interface LoginSubmitValue {
  email: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const submitForm = async (value: LoginSubmitValue) => {
    try {
      const action: any = loginUser(value);
      const actionResult = await dispatch(action);
      unwrapResult(actionResult);
      enqueueSnackbar('Login success!!! 🎉🎉🎉', { variant: 'success' });
      setTimeout(() => {
        window.location.assign('/home');
      }, 2000);
    } catch (err: any) {
      console.error('Something wrong with login', err);
      enqueueSnackbar('Wrong email or password!!! ❌❌❌', { variant: 'error' });
    }
  };

  return (
    <section className="login">
      <LoginFormFeature submitForm={submitForm} />
    </section>
  );
}

export default Login;
