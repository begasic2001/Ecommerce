import { useTheme, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import s from './special.module.scss';

function SpecialFeature() {
  const theme = useTheme();
  const downSmMedia = useMediaQuery<boolean>(theme.breakpoints.down('sm'));

  return (
    <section className={s.special}>
      <Container className={s.container}>
        <Stack direction={downSmMedia ? 'column' : 'row'} className={s.row}>
          <div className={s.image}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
              alt="special scene"
            />
          </div>
          <section className={s.announce}>
            <h3 className={s.announceTitle}>
              Suprise Your <em>Special Day</em>! Let us arrange a smile.
            </h3>
            <p className={s.announceTxt}>
              Where flowers are our inspiration to create lasting memories. Whatever the occasion...
            </p>
            <ul className={s.announceList}>
              <li>Hand picked just for you.</li>
              <li>Unique flower arrangements</li>
              <li>Best way to say you care.</li>
            </ul>
          </section>
        </Stack>
      </Container>
    </section>
  );
}

export default SpecialFeature;
