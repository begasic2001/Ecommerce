import { Container } from '@mui/material';
import s from './footer.module.scss';
import { LinkComponent } from './link';
import { SocialComponent } from './social';

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
