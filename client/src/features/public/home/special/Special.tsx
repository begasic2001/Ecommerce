import { Container, Stack } from '@mui/material';
import { ISSpecial } from './interface';
import s from './special.module.scss';

const styles: ISSpecial = {
  special: s.special,
  specialContainer: s['special__container'],
  specialRow: s['special__row'],
  image: s.image,
  announce: s.announce,
  announceTitle: s['announce__title'],
  announceParagraph: s['announce__paragraph'],
  announceList: s['announce-list'],
};

function SpecialFeature() {
  return (
    <section className={styles.special}>
      <Container className={styles.specialContainer}>
        <Stack className={styles.specialRow}>
          <div className={styles.image}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
              alt="special scene"
            />
          </div>
          <section className={styles.announce}>
            <h3 className={styles.announceTitle}>
              Suprise Your <em>Special Day</em>! Let us arrange a smile.
            </h3>
            <p className={styles.announceParagraph}>
              Where flowers are our inspiration to create lasting memories. Whatever the occasion...
            </p>
            <ul className={styles.announceList}>
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
