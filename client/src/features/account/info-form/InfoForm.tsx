import * as S from './info-form.style';

const InfoForm = () => {
  return (
    <S.InfoForm>
      <S.Content>
        <h3>Tạo thông tin cá nhân</h3>
        <S.Form>
          <S.FormItem>
            <input type="text" placeholder=" " />
            <label>Họ và tên</label>
          </S.FormItem>
          <S.FormItem>
            <input type="text" placeholder=" " />
            <label>Số điện thoại</label>
          </S.FormItem>
          <S.FormItem>
            <input type="text" placeholder=" " />
            <label>Địa chỉ</label>
          </S.FormItem>
          <button type="submit">Hoàn tất đăng ký thông tin</button>
        </S.Form>
      </S.Content>
    </S.InfoForm>
  );
};

export default InfoForm;
