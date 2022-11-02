import { Container, Stack } from '@mui/material';
import s from './special.module.scss';

function SpecialFeature() {
  return (
    <section className={s.special}>
      <Container className={s['special__container']}>
        <Stack className={s['special__row']}>
          <div className={s.image}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
              alt="special scene"
            />
          </div>
          <section className={s.announce}>
            <h3 className={s['announce__title']}>
              Suprise Your <em>Special Day</em>! Let us arrange a smile.
            </h3>
            <p className={s['announce__paragraph']}>
              Where flowers are our inspiration to create lasting memories. Whatever the occasion...
            </p>
            <ul className={s['announce-list']}>
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
