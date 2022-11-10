import { Container } from '@mui/material';
import s from './footer.module.scss';
import { LinkComponent } from './Link';
import { SocialComponent } from './Social';

function FooterLayout() {
  return (
    <footer className={s.footer}>
      <Container className={s['footer__container']}>
        <LinkComponent />
        <SocialComponent />
      </Container>
    </footer>
  );
}

export default FooterLayout;
