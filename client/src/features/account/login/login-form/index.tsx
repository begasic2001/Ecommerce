import { Stack } from '@mui/system';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomPassField, CustomTextField } from '~/components/form/input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface LoginFormProps {
  submitForm: (value: any) => void;
}

const schemaValidate = yup.object({
  email: yup.string().required('* Không được bỏ trống').email('* Nhập đúng định dạng'),
  password: yup
    .string()
    .required('* Không được bỏ trống')
    .min(8, '* Nhập trên 8 ký tự')
    .matches(/(?!.* )/, '* Không được có khoảng trắng'),
});

function LoginForm({ submitForm }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidate),
  });

  const [showPass, setShowPass] = useState<boolean>(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };

  return (
    <section className={clsx('login-form', 'mt-50')}>
      <section className="mx-auto w-[45%] rounded-2 border border-solid border-bd-2 p-40">
        <h3 className="text-25">Đăng nhập</h3>
        <form onSubmit={handleSubmit(submitForm)} className="mt-30">
          <CustomTextField
            control={control}
            name="email"
            label="Email"
            margin="normal"
            error={errors.email?.message}
          />
          <CustomPassField
            control={control}
            name="password"
            label="Mật khẩu"
            showPass={showPass}
            togglePass={togglePass}
            margin="normal"
            error={errors.password?.message}
          />
          <Stack direction="row" className="mt-20 justify-end italic">
            <Link to="/account/reset">Quên mật khẩu</Link>
          </Stack>
          <button
            type="submit"
            className={clsx(
              'mt-30 h-50 w-full border-none bg-black text-16 text-txt-5 duration-2',
              'hover:cursor-pointer hover:opacity-60'
            )}
          >
            Đăng nhập
          </button>
        </form>
        <p className="border-t-solid mt-50 border-t border-t-bd-2 pt-30 text-center italic text-txt-2">
          Bạn là người mới? <Link to="/account/register">Đăng ký</Link>
        </p>
      </section>
    </section>
  );
}

export { LoginForm };
