import { Container } from '@mui/material';
import s from './footer.module.scss';
import { LinkPart } from './Link';
import { SocialPart } from './Social';
import { ISFooter } from './interface';

const styles: ISFooter = {
  footer: s.footer,
  footerContainer: s['footer__container'],
};

function FooterLayout() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <LinkPart />
        <SocialPart />
      </Container>
    </footer>
  );
}

export default FooterLayout;
