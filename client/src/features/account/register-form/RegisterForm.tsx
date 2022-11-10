import {
  Visibility as VisbilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import s from './register-form.module.scss';

const RegisterFormFeature = () => {
  const inputPassRef: any = useRef(null);
  const inputRePassRef: any = useRef(null);
  const [toggleShowPass, setToggleShowPass] = useState<boolean>(false);
  const [toggleReShowPass, setToggleReShowPass] = useState<boolean>(false);

  const togglePass = () => {
    setToggleShowPass(!toggleShowPass);
  };

  const toggleRePass = () => {
    setToggleReShowPass(!toggleReShowPass);
  };

  useEffect(() => {
    const togglePassType = () => {
      const nodePass = inputPassRef.current;
      if (nodePass && toggleShowPass) nodePass.setAttribute('type', 'text');
      else nodePass.setAttribute('type', 'password');
    };

    document.addEventListener('click', togglePassType);
    return () => document.removeEventListener('click', togglePassType);
  }, [toggleShowPass, setToggleShowPass]);

  useEffect(() => {
    const toggleRePassType = () => {
      const nodeRePass = inputRePassRef.current;
      if (nodeRePass && toggleReShowPass) nodeRePass.setAttribute('type', 'text');
      else nodeRePass.setAttribute('type', 'password');
    };

    document.addEventListener('click', toggleRePassType);
    return () => document.removeEventListener('click', toggleRePassType);
  }, [toggleReShowPass, setToggleReShowPass]);

  return (
    <section className={s.register}>
      <section className={s.box}>
        <h3 className={s['box__title']}>Đăng ký</h3>
        <form className={s.form}>
          <section className={s['form-item']}>
            <input type="text" placeholder=" " className={s['form-item__input']} />
            <label className={s['form-item__label']}>Email</label>
          </section>
          <section className={s['form-item']}>
            <input
              type="password"
              placeholder=" "
              ref={inputPassRef}
              className={s['form-item__input']}
            />
            <label className={s['form-item__label']}>Mật khẩu</label>
            <div className={s['form-item__toggle']} onClick={togglePass}>
              {toggleShowPass ? <VisbilityIcon /> : <VisibilityOffIcon />}
            </div>
          </section>
          <section className={s['form-item']}>
            <input
              type="password"
              placeholder=" "
              ref={inputRePassRef}
              className={s['form-item__input']}
            />
            <label className={s['form-item__label']}>Nhập lại mật khẩu</label>
            <div className={s['form-item__toggle']} onClick={toggleRePass}>
              {toggleReShowPass ? <VisbilityIcon /> : <VisibilityOffIcon />}
            </div>
          </section>
          <button type="submit" className={s['form__submit']}>
            Đăng ký
          </button>
        </form>
        <p className={s.login}>
          Đã có tài khoản? <Link to={'/account/login'}>Đăng nhập</Link>
        </p>
      </section>
    </section>
  );
};

export default RegisterFormFeature;
