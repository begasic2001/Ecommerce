import { Container } from '@mui/material';
import { LinkListFeature, SocialFeature } from '~/features/footer';

function Footer() {
  return (
    <footer className="mt-auto">
      <section className="bg-white-2 text-txt-2">
        <Container className="container">
          <LinkListFeature />
          <SocialFeature />
        </Container>
      </section>
    </footer>
  );
}

export default Footer;
