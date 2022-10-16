import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { EyeShowSVG, EyeHiddenSVG } from '~/components/icons';
import * as S from './register-form.style';

const RegisterForm = () => {
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
    <S.Register>
      <S.Content>
        <h3>Đăng ký</h3>
        <S.Form>
          <S.FormItem>
            <input type="text" placeholder=" " />
            <label>Email</label>
          </S.FormItem>
          <S.FormItem>
            <input type="password" placeholder=" " ref={inputPassRef} />
            <label>Mật khẩu</label>
            <div className="toggle-show" onClick={togglePass}>
              {toggleShowPass ? <EyeShowSVG /> : <EyeHiddenSVG />}
            </div>
          </S.FormItem>
          <S.FormItem>
            <input type="password" placeholder=" " ref={inputRePassRef} />
            <label>Nhập lại mật khẩu</label>
            <div className="toggle-show" onClick={toggleRePass}>
              {toggleReShowPass ? <EyeShowSVG /> : <EyeHiddenSVG />}
            </div>
          </S.FormItem>
          <button type="submit">Đăng ký</button>
        </S.Form>
        <S.Login>
          Đã có tài khoản? <Link to={'/account/login'}>Đăng nhập</Link>
        </S.Login>
      </S.Content>
    </S.Register>
  );
};

export default RegisterForm;
