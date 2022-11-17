import Container from '@mui/material/Container';
import s from './footer.module.scss';
import LinkComp from './link';
import SocialComp from './social';

function FooterLayout() {
  return (
    <footer className={s.footer}>
      <Container className={s.container}>
        <LinkComp />
        <SocialComp />
      </Container>
    </footer>
  );
}

export default FooterLayout;
