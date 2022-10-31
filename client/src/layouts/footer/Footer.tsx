import { Container } from '@mui/material';
import s from './footer.module.scss';
import { LinkPart } from './Link';
import { SocialPart } from './Social';

function FooterLayout() {
  return (
    <footer className={s.footer}>
      <Container component={'section'} className={s['footer__container']}>
        <LinkPart />
        <SocialPart />
      </Container>
    </footer>
  );
}

export default FooterLayout;
