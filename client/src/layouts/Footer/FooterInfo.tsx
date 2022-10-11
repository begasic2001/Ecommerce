import { PaypalImg, VisaImg } from '~/assets/payment';
import * as S from './footer.style';

export const FooterInfo = () => {
  return (
    <S.Info>
      <p>© 2018 Qode Interactive, All Rights Reserved</p>
      <S.InfoImg>
        <img src={VisaImg} alt="visa image" />
        <img src={PaypalImg} alt="paypal image" className="img__paypal" />
      </S.InfoImg>
      <S.InfoSocial>
        <span className="social__txt">Instagram</span>
        <span className="social__txt social__txt--facebook">Facebook</span>
      </S.InfoSocial>
    </S.Info>
  );
};
