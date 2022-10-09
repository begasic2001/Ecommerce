import { PaypalImg, VisaImg } from '~/assets/payment';
import * as S from './footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.Link>
          <section>
            <S.LinkTitle>Customer Service</S.LinkTitle>
            <S.LinkList>
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </S.LinkList>
          </section>
          <section>
            <S.LinkTitle>Company</S.LinkTitle>
            <S.LinkList>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ Page</li>
              <li>Contact Us</li>
            </S.LinkList>
          </section>
          <section>
            <S.LinkTitle>Social Media</S.LinkTitle>
            <S.LinkList>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Tumblr</li>
              <li>Pinterest</li>
            </S.LinkList>
          </section>
          <section>
            <S.LinkTitle>Archive</S.LinkTitle>
            <S.LinkList>
              <li>Designer Shoes</li>
              <li>Gallery</li>
              <li>Pricing</li>
              <li>Feature Index</li>
            </S.LinkList>
          </section>
        </S.Link>
        <S.Info>
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
          <S.InfoPayment>
            <img src={VisaImg} alt="visa img" />
            <img src={PaypalImg} alt="paypal img" />
          </S.InfoPayment>
          <S.InfoSocial>
            <span>Instagram</span>
            <span>Facebook</span>
          </S.InfoSocial>
        </S.Info>
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
