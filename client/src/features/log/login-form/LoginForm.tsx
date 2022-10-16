import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { EyeShowSVG, EyeHiddenSVG } from '~/components/icons';
import * as S from './login-form.style';

const LoginForm = () => {
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
    <S.Login>
      <S.Content>
        <h3>Đăng nhập</h3>
        <S.Form>
          <S.FormItem>
            <input type="text" placeholder=" " />
            <label>Email</label>
          </S.FormItem>
          <S.FormItem>
            <input type="password" placeholder=" " ref={inputPassRef} />
            <label>Mật khẩu</label>
            <div className="toggle-show" onClick={togglePass} ref={togglePassRef}>
              {toggleShowPass ? <EyeShowSVG /> : <EyeHiddenSVG />}
            </div>
          </S.FormItem>
          <S.ForgotPass>
            <Link to={'/account/forgot'}>Quên mật khẩu</Link>
          </S.ForgotPass>
          <button type="submit">Đăng nhập</button>
        </S.Form>
        <S.Register>
          Bạn là người mới? <Link to={'/account/register'}>Đăng ký</Link>
        </S.Register>
      </S.Content>
    </S.Login>
  );
};

export default LoginForm;
