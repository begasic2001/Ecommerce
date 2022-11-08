import { Container } from '@mui/material';
import s from './footer.module.scss';
import { LinkComponent } from './Link';
import { SocialComponent } from './Social';
import { ISFooter } from './interface';

const styles: ISFooter = {
  footer: s.footer,
  footerContainer: s['footer__container'],
};

function FooterLayout() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <LinkComponent />
        <SocialComponent />
      </Container>
    </footer>
  );
}

export default FooterLayout;
