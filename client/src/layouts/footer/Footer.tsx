import { Container, Grid, Stack } from '@mui/material';
import PaypalIcon from '~/assets/logo/paypal.png';
import VisaIcon from '~/assets/logo/visa.png';
import s from './footer.module.scss';

const FooterLayout = () => {
  return (
    <footer className={s.footer}>
      <Container component={'section'} className={s['footer__container']}>
        <Grid container component={'section'} rowSpacing={'3rem'} className={s.link}>
          <Grid item className={s['link__item']}>
            <p className={s['link__title']}>Customer Service</p>
            <ul className={s['link__list']}>
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </ul>
          </Grid>
          <Grid item className={s['link__item']}>
            <p className={s['link__title']}>Company</p>
            <ul className={s['link__list']}>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ Page</li>
              <li>Contact Us</li>
            </ul>
          </Grid>
          <Grid item className={s['link__item']}>
            <p className={s['link__title']}>Social Media</p>
            <ul className={s['link__list']}>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Tumblr</li>
              <li>Pinterest</li>
            </ul>
          </Grid>
          <Grid item className={s['link__item']}>
            <p className={s['link__title']}>Archive</p>
            <ul className={s['link__list']}>
              <li>Designer Shoes</li>
              <li>Gallery</li>
              <li>Pricing</li>
              <li>Feature Index</li>
            </ul>
          </Grid>
        </Grid>
        <Stack className={s.social}>
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
          <section>
            <img src={VisaIcon} alt="visa image" />
            <img src={PaypalIcon} alt="paypal image" className={s['social__icn--paypal']} />
          </section>
          <section>
            <span className={s['social__txt']}>Instagram</span>
            <span className={s['social__txt']}>Facebook</span>
          </section>
        </Stack>
      </Container>
    </footer>
  );
};

export default FooterLayout;
