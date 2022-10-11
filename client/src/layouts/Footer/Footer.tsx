import { FooterLink } from './FooterLink';
import { FooterInfo } from './FooterInfo';
import * as S from './footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <FooterLink />
        <FooterInfo />
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
