import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import s from './contact.module.scss';

export function ContactComponent() {
  return (
    <>
      <section className={s.ava}></section>
      <section className={s.content}>
        <form className={s.form}>
          <section className={s['form__box']}>
            <h3 className={s['form__title']}>Thông tin tài khoản</h3>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Email</InputLabel>
              <OutlinedInput label="Email" className={s['form-item__input']} />
            </FormControl>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Mật khẩu</InputLabel>
              <OutlinedInput label="Mật khẩu" className={s['form-item__input']} />
            </FormControl>
          </section>
          <section className={s['form__box']}>
            <h3 className={s['form__title']}>Thông tin liên hệ</h3>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Họ và tên</InputLabel>
              <OutlinedInput label="Họ và tên" className={s['form-item__input']} />
            </FormControl>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Ngày sinh</InputLabel>
              <OutlinedInput label="Ngày sinh" className={s['form-item__input']} />
            </FormControl>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Địa chỉ</InputLabel>
              <OutlinedInput label="Địa chỉ" className={s['form-item__input']} />
            </FormControl>
          </section>
        </form>
      </section>
    </>
  );
}
