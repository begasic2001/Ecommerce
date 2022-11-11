import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import s from './change-pass.module.scss';

export function ChangePassComponent() {
  return (
    <>
      <section className={s.ava}></section>
      <section className={s.content}>
        <form className={s.form}>
          <section className={s['form__box']}>
            <h3 className={s['form__title']}>Đổi mật khẩu</h3>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Email</InputLabel>
              <OutlinedInput label="Email" className={s['form-item__input']} />
            </FormControl>
            <FormControl fullWidth className={s['form-item']}>
              <InputLabel className={s['form-item__label']}>Mật khẩu</InputLabel>
              <OutlinedInput label="Mật khẩu" className={s['form-item__input']} />
            </FormControl>
          </section>
        </form>
      </section>
    </>
  );
}
