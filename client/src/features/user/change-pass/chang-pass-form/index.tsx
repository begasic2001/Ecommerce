import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomPassField, CustomTextField } from '~/components/form/input';

function ChangePass() {
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
    <section className={clsx('info-account', 'basis-[75%]')}>
      <h3 className="text-30">Đổi mật khẩu</h3>
      <form className="mt-30 w-full">
        <CustomTextField control={control} name="email" label="Email" />
        <CustomPassField
          control={control}
          name="pass"
          label="Mật khẩu mới"
          showPass={showPass}
          togglePass={togglePass}
          margin="normal"
        />
        <CustomPassField
          control={control}
          name="repass"
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
          Cập nhật thông tin
        </button>
      </form>
    </section>
  );
}

export { ChangePass };
