import { useMediaQuery, useTheme } from '@mui/material';
import s from './slideshow.module.scss';
import { ISSlideshow } from './interface';

const styles: ISSlideshow = {
  slideshow: s.slideshow,
  slideshowOverlay: s['slideshow__overlay'],
  image: s.image,
  content: s.content,
  contentTitle: s['content__title'],
  contentParagraph: s['content__paragraph'],
};

function SlideshowFeature() {
  const theme = useTheme();
  const mobileMedia = useMediaQuery<boolean>(theme.breakpoints.down('md'));

  return (
    <section className={styles.slideshow}>
      <div className={styles.slideshowOverlay} />
      <section className={styles.image}>
        <img
          src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/F5461D_LOL.jpeg?v=1648846897"
          alt="slideshow image"
        />
      </section>
      {!mobileMedia && (
        <section className={styles.content}>
          <h2 className={styles.contentTitle}>
            Send <em>flowers</em> like you mean it.
          </h2>
          <p className={styles.contentParagraph}>
            Where flowers are our inspiration to create lasting memories. Whatever the occasion, our
            flowers will make it special cursus a sit amet mauris.
          </p>
        </section>
      )}
    </section>
  );
}

export default SlideshowFeature;
