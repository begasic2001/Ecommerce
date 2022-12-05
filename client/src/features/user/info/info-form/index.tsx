import { Stack, Avatar } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { CustomTextField, CustomDatePicker } from '~/components/form/input';
import { NoneAvatarIcon } from '~/components/icons';

function InfoForm() {
  const { control } = useForm();

  return (
    <section className={clsx('info-account', 'basis-[75%]')}>
      <h3 className="text-30">Thông tin cá nhân</h3>
      <Stack className="mt-20 items-center">
        <Avatar className="h-150 w-150">
          <NoneAvatarIcon size="5rem" />
        </Avatar>
        <form className="mt-30 w-full">
          <CustomTextField control={control} name="name" label="Họ và tên" margin="normal" />
          <CustomDatePicker control={control} name="date" label="Ngày sinh" margin="normal" />
          <CustomTextField control={control} name="phone" label="Số điện thoại" margin="normal" />
          <CustomTextField control={control} name="address" label="Địa chỉ" margin="normal" />
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
      </Stack>
    </section>
  );
}

export { InfoForm };
