import s from './info-form.module.scss';

function NewInfoFormFeature() {
  return (
    <section className={s.info}>
      <section className={s.box}>
        <h3 className={s['box__title']}>Tạo thông tin cá nhân</h3>
        <form className={s.form}>
          <section className={s['form-item']}>
            <input type="text" placeholder=" " className={s['form-item__input']} />
            <label className={s['form-item__label']}>Họ và tên</label>
          </section>
          <section className={s['form-item']}>
            <input type="text" placeholder=" " className={s['form-item__input']} />
            <label className={s['form-item__label']}>Số điện thoại</label>
          </section>
          <section className={s['form-item']}>
            <input type="text" placeholder=" " className={s['form-item__input']} />
            <label className={s['form-item__label']}>Địa chỉ</label>
          </section>
          <button type="submit" className={s['form__submit']}>
            Hoàn tất đăng ký thông tin
          </button>
        </form>
      </section>
    </section>
  );
}

export default NewInfoFormFeature;
