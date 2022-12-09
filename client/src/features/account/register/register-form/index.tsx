import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { CustomFileField, CustomPassField, CustomTextField } from '~/components/form/input';
import { XIcon, TickIcon } from '~/components/icons';
import { v4 as uuidv4 } from 'uuid';
import { Stack } from '@mui/system';

interface RegisterFormProps {
  submitForm: (value: any) => void;
}

const schemaValidate = yup.object({
  email: yup.string().required('* Không được bỏ trống').email('* Nhập đúng định dạng email'),
  password: yup
    .string()
    .required('* Không được bỏ trống')
    .min(8, '* Nhập trên 8 ký tự')
    .matches(/(?!.* )/, '* Không được có khoảng trắng')
    .matches(/(.*[a-z].*)/, '* Phải có ít nhất 1 chữ thường')
    .matches(/(.*[A-Z].*)/, '* Phải có ít nhất 1 chữ in hoa')
    .matches(/(.*\d.*)/, '* Phải có ít nhất 1 chữ số'),
  repassword: yup
    .string()
    .required('* Không được bỏ trống')
    .oneOf([yup.ref('password')], '* Hai mật khẩu không khớp nhau'),
  name: yup
    .string()
    .required('* Không được bỏ trống')
    .min(2, 'Nhập tên hợp lệ')
    .matches(
      /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm,
      '* Nhập tên hợp lệ'
    ),
  phone: yup
    .string()
    .required('* Không được bỏ trống')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, '* Nhập số điện thoại hợp lệ với 10 chữ số'),
});

const checkValidTxt = [
  'Không có khoảng trắng',
  'Trên 8 ký tự',
  'Có ít nhất 1 chữ thường',
  'Có ít nhất 1 chữ in hoa',
  'Có ít nhất 1 chữ số',
];

function RegisterForm({ submitForm }: RegisterFormProps) {
  const passwordRef = useRef<any | HTMLInputElement>({});
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidate),
  });

  const [showPass, setShowPass] = useState<boolean>(false);
  const [reShowPass, setReShowPass] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    digit: false,
  });

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const toggleRePass = () => {
    setReShowPass(!reShowPass);
  };

  useEffect(() => {
    const handlePasswordValue = (e: any) => {
      const passRefValue = passwordRef?.current.value;
      const checkValid = {
        length: false,
        lowercase: false,
        uppercase: false,
        digit: false,
        whitespace: false,
      };

      if (passRefValue.length >= 8) checkValid.length = true;
      if (/(.*[a-z].*)/.test(passRefValue)) checkValid.lowercase = true;
      if (/(.*[A-Z].*)/.test(passRefValue)) checkValid.uppercase = true;
      if (/(.*\d.*)/.test(passRefValue)) checkValid.digit = true;
      if (/(?!.* )/.test(passRefValue)) checkValid.whitespace = true;

      setValidPassword(checkValid);
    };

    document.addEventListener('input', handlePasswordValue);
    return () => document.removeEventListener('input', handlePasswordValue);
  }, [passwordRef.current]);

  return (
    <section className={clsx('login-form', 'mt-50')}>
      <section className="mx-auto w-[45%] rounded-2 border border-solid border-bd-2 p-40">
        <h3 className="text-25">Đăng ký</h3>
        <form onSubmit={handleSubmit(submitForm)} className="mt-30">
          <section className="account">
            <h4 className="text-20 ">Thông tin tài khoản</h4>
            <CustomTextField
              control={control}
              name="email"
              label="Email"
              margin="normal"
              error={errors?.email?.message}
            />
            <CustomPassField
              control={control}
              name="password"
              label="Mật khẩu"
              showPass={showPass}
              togglePass={togglePass}
              margin="normal"
              error={errors?.password?.message}
              ref={passwordRef}
            />
            <CustomPassField
              control={control}
              name="repassword"
              label="Nhập lại mật khẩu"
              showPass={reShowPass}
              togglePass={toggleRePass}
              margin="normal"
              error={errors?.repassword?.message}
            />
            <section className={clsx('check-pass-validate', 'mt-20 ml-20')}>
              <ul className="list-disc italic text-txt-2">
                {Object.values(validPassword).map((itemValid, index) => (
                  <li key={uuidv4()} className={clsx('mt-10', 'first:mt-0')}>
                    <p className={clsx('flex', { 'font-bold text-[#32a852]': itemValid })}>
                      {itemValid ? <TickIcon /> : <XIcon />} {checkValidTxt[index]}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </section>
          <section className="mt-30">
            <h3 className="text-20">Thông tin cá nhân</h3>
            <CustomTextField
              control={control}
              name="name"
              label="Họ và tên"
              margin="normal"
              error={errors?.name?.message}
            />
            <CustomTextField
              control={control}
              name="phone"
              label="Số điện thoại"
              margin="normal"
              error={errors?.phone?.message}
            />
            <Stack direction="row" className={clsx('avatar-field', 'mt-20 items-center')}>
              <p className="mr-15">Ảnh đại diện</p>
              <CustomFileField
                control={control}
                name="avatar"
                accept="image/*"
                error={errors?.avatar?.message}
              />
            </Stack>
          </section>
          <button
            type="submit"
            className={clsx(
              'mt-30 h-50 w-full border-none bg-black text-16 text-txt-5 duration-2',
              'hover:cursor-pointer hover:opacity-60'
            )}
          >
            Đăng ký
          </button>
        </form>
        <p className="border-t-solid mt-50 border-t border-t-bd-2 pt-30 text-center italic text-txt-2">
          Đã có tài khoản?{' '}
          <Link to="/account/login" className="hover:underline">
            Đăng nhập
          </Link>
        </p>
      </section>
    </section>
  );
}

export { RegisterForm };
