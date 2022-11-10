import {
  Visibility as VisbilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './login-form.module.scss';

function LoginFormFeature() {
  const togglePassRef: any = useRef(null);
  const inputPassRef: any = useRef(null);
  const [toggleShowPass, setToggleShowPass] = useState<boolean>(false);

  const togglePass = () => {
    setToggleShowPass(!toggleShowPass);
  };

  useEffect(() => {
    const togglePassType = () => {
      const nodeInput = inputPassRef.current;
      if (nodeInput && toggleShowPass) nodeInput.setAttribute('type', 'text');
      else nodeInput.setAttribute('type', 'password');
    };

    document.addEventListener('click', togglePassType);
    return () => document.removeEventListener('click', togglePassType);
  }, [toggleShowPass, setToggleShowPass]);

  return (
    <section className={s.login}>
      <section className={s.box}>
        <h3 className={s['box__title']}>Đăng nhập</h3>
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
            <div className={s['form-item__toggle']} onClick={togglePass} ref={togglePassRef}>
              {toggleShowPass ? <VisbilityIcon /> : <VisibilityOffIcon />}
            </div>
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
