import { Container } from '@mui/material';
import styles from './footer.module.scss';
import { LinkComponent } from './Link';
import { SocialComponent } from './Social';
import { ISFooter } from './interface';

const s: ISFooter = {
  footer: styles.footer,
  container: styles['footer__container'],
};

function FooterLayout() {
  return (
    <footer className={s.footer}>
      <Container className={s.container}>
        <LinkComponent />
        <SocialComponent />
      </Container>
    </footer>
  );
}

export default FooterLayout;
