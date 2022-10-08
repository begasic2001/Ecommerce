import { PaypalImg, VisaImg } from '~/assets/payment';
import { SFooter, SInfo, SLink } from './footer.style';

const Footer = () => {
  return (
    <SFooter.Cover>
      <SFooter.Content>
        <SLink.Cover>
          <section>
            <SLink.Title>Customer Service</SLink.Title>
            <SLink.List>
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </SLink.List>
          </section>
          <section>
            <SLink.Title>Company</SLink.Title>
            <SLink.List>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ Page</li>
              <li>Contact Us</li>
            </SLink.List>
          </section>
          <section>
            <SLink.Title>Social Media</SLink.Title>
            <SLink.List>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Tumblr</li>
              <li>Pinterest</li>
            </SLink.List>
          </section>
          <section>
            <SLink.Title>Archive</SLink.Title>
            <SLink.List>
              <li>Designer Shoes</li>
              <li>Gallery</li>
              <li>Pricing</li>
              <li>Feature Index</li>
            </SLink.List>
          </section>
        </SLink.Cover>
        <SInfo.Cover>
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
          <SInfo.Payment>
            <img src={VisaImg} alt="visa img" />
            <img src={PaypalImg} alt="paypal img" />
          </SInfo.Payment>
          <SInfo.Social>
            <span>Instagram</span>
            <span>Facebook</span>
          </SInfo.Social>
        </SInfo.Cover>
      </SFooter.Content>
    </SFooter.Cover>
  );
};

export default Footer;
