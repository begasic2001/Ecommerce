import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { registerUser } from '~/app/userSlice';
import { RegisterFormFeature } from '~/features/account/register';
import { useNavigate } from 'react-router-dom';

export interface RegisterSubmitValue {
  email: string;
  password: string;
  name: string;
  phone: string;
  repassword?: string;
  avatar?: any;
}

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const submitForm = async (value: RegisterSubmitValue) => {
    const registerParams: RegisterSubmitValue = {
      email: '',
      password: '',
      name: '',
      phone: '',
    };

    registerParams.email = value.email;
    registerParams.password = value.password;
    registerParams.name = value.name;
    registerParams.phone = value.phone;

    if (typeof value.avatar === 'undefined' || value.avatar?.length === 0 || value.avatar === null)
      value.avatar = null;
    else registerParams.avatar = value.avatar[0].name;

    try {
      const action: any = registerUser(registerParams);
      const actionResult = await dispatch(action);
      const response = unwrapResult(actionResult);
      enqueueSnackbar(response.data.message, { variant: 'success' });
      setTimeout(() => {
        navigate('/account/login');
      }, 2000);
    } catch (err: any) {
      enqueueSnackbar(err.data.message, { variant: 'error' });
      console.error('Some error was found in register:', err);
    }
  };

  return (
    <section className="register">
      <RegisterFormFeature submitForm={submitForm} />
    </section>
  );
}

export default Register;
