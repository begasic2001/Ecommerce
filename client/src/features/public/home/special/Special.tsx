import { Container } from '@mui/material';
import { ISSpecial } from './interface';
import styles from './special.module.scss';

const s: ISSpecial = {
  special: styles.special,
  container: styles['special__container'],
  row: styles['special__row'],
  image: styles.image,
  announce: styles.announce,
  announceTitle: styles['announce__title'],
  announceTxt: styles['announce__txt'],
  announceList: styles['announce-list'],
};

function SpecialFeature() {
  return (
    <section className={s.special}>
      <Container className={s.container}>
        <section className={s.row}>
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
        </section>
      </Container>
    </section>
  );
}

export default SpecialFeature;
