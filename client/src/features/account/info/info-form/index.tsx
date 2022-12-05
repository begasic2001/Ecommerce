import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { CustomDatePicker, CustomFileField, CustomTextField } from '~/components/form/input';

function InfoForm() {
  const { control } = useForm();

  return (
    <section className="info-form">
      <section className={clsx('login-form', 'mt-50')}>
        <section className="mx-auto w-[45%] rounded-2 border border-solid border-bd-2 p-40">
          <h3 className="text-25">Thông tin cá nhân</h3>
          <form className="mt-30">
            <CustomTextField control={control} name="name" label="Họ và tên" margin="normal" />
            <CustomDatePicker control={control} name="date" label="Ngày sinh" margin="normal" />
            <CustomTextField control={control} name="phone" label="Số điện thoại" margin="normal" />
            <CustomTextField control={control} name="address" label="Địa chỉ" margin="normal" />
            <CustomFileField control={control} name="file" margin="normal" />
            <button
              type="submit"
              className={clsx(
                'mt-30 h-50 w-full border-none bg-black text-16 text-txt-5 duration-2',
                'hover:cursor-pointer hover:opacity-60'
              )}
            >
              Hoàn tất thông tin
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

export { InfoForm };
