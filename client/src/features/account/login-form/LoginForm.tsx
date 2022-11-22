import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomTextField } from '~/components/input';
import s from './login-form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IHandleFormSubmitLogin } from '~/interface/props.type';

const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập vào')
    .email('Nhập đúng định dạng Email, vd @gmail.com'),
  password: yup
    .string()
    .required('Vui lòng nhập vào')
    .min(8, 'Phải ít nhất 8 ký tự')
    .matches(/[A-Z]/, 'Phải có ít nhất 1 ký tự in hoa'),
});

function LoginFormFeature({ handleFormSubmit, notExist }: IHandleFormSubmitLogin) {
  const [toggleShowPass, setToggleShowPass] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const togglePass = () => {
    setToggleShowPass(!toggleShowPass);
  };

  return (
    <section className={s.login}>
      <section className={s.box}>
        <h3 className={s['box__title']}>Đăng nhập</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={s.form}>
          <section className={s['form-section']}>
            <CustomTextField
              control={control}
              name="email"
              label="Email"
              className={s['form-item']}
            />
            {errors?.email && <p className={s['form-item__error']}>{errors?.email?.message}</p>}
            {notExist && <p className={s['form-item__error']}>Tài khoản không tồn tại</p>}
          </section>
          <section className={s['form-section']}>
            <CustomTextField
              type={toggleShowPass ? 'text' : 'password'}
              control={control}
              name="password"
              label="Password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePass} edge="end">
                    {toggleShowPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                ),
              }}
              className={s['form-item']}
            />
            {errors?.password && (
              <p className={s['form-item__error']}>{errors?.password?.message}</p>
            )}
          </section>
          <section className={s.forgot}>
            <Link to={'/account/forgot'}>Quên mật khẩu</Link>
          </section>
          <button type="submit" className={s['form__submit']}>
            Đăng nhập
          </button>
        </form>
        <p className={s.register}>
          Bạn là người mới? <Link to={'/account/register'}>Đăng ký</Link>
        </p>
      </section>
    </section>
  );
}

export default LoginFormFeature;
