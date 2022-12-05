import { Stack } from '@mui/system';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomTextField, CustomPassField } from '~/components/form/input';

function ResetForm() {
  const { control } = useForm();

  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRePass, setShowRePass] = useState<boolean>(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const toggleRePass = () => {
    setShowRePass(!showRePass);
  };
  return (
    <section className={clsx('login-form', 'mt-50')}>
      <section className="mx-auto w-[45%] rounded-2 border border-solid border-bd-2 p-40">
        <h3 className="text-25">Quên mật khẩu</h3>
        <form className="mt-30">
          <CustomTextField control={control} name="email" label="Email" margin="normal" />
          <CustomPassField
            control={control}
            name="password"
            label="Mật khẩu"
            showPass={showPass}
            togglePass={togglePass}
            margin="normal"
          />
          <CustomPassField
            control={control}
            name="repassword"
            label="Nhập lại mật khẩu"
            showPass={showRePass}
            togglePass={toggleRePass}
            margin="normal"
          />
          <button
            type="submit"
            className={clsx(
              'mt-30 h-50 w-full border-none bg-black text-16 text-txt-5 duration-2',
              'hover:cursor-pointer hover:opacity-60'
            )}
          >
            Khôi phục mật khẩu
          </button>
        </form>
        <p className="border-t-solid mt-50 border-t border-t-bd-2 pt-30 text-center italic text-txt-2">
          Đã có tài khoản? <Link to="/account/login">Đăng nhập</Link>
        </p>
      </section>
    </section>
  );
}

export { ResetForm };
