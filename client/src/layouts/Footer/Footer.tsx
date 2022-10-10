import { PaypalImg, VisaImg } from '~/assets/payment';
import * as S from './footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <div className="footer__content">
        <S.Link>
          <section>
            <p className="item__title">Customer Service</p>
            <S.LinkList>
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </S.LinkList>
          </section>
          <section>
            <p className="item__title">Company</p>
            <S.LinkList>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ Page</li>
              <li>Contact Us</li>
            </S.LinkList>
          </section>
          <section>
            <p className="item__title">Social Media</p>
            <S.LinkList>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Tumblr</li>
              <li>Pinterest</li>
            </S.LinkList>
          </section>
          <section>
            <p className="item__title">Archive</p>
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
          <S.InfoImg>
            <img src={VisaImg} alt="visa image" />
            <img src={PaypalImg} alt="paypal image" className="img__paypal" />
          </S.InfoImg>
          <S.InfoSocial>
            <span className="social__txt">Instagram</span>
            <span className="social__txt social__txt--facebook">Facebook</span>
          </S.InfoSocial>
        </S.Info>
      </div>
    </S.Footer>
  );
};

export default Footer;
