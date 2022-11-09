import { useMediaQuery, useTheme } from '@mui/material';
import styles from './slideshow.module.scss';
import { ISSlideshow } from './interface';

const s: ISSlideshow = {
  slideshow: styles.slideshow,
  overlay: styles.overlay,
  image: styles.image,
  content: styles.content,
  contentTitle: styles['content__title'],
  contentTxt: styles['content__txt'],
};

function SlideshowFeature() {
  const theme = useTheme();
  const upMdMedia = useMediaQuery<boolean>(theme.breakpoints.up('md'));

  return (
    <section className={s.slideshow}>
      <div className={s.overlay}></div>
      <section className={s.image}>
        <img
          src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/F5461D_LOL.jpeg?v=1648846897"
          alt="slideshow image"
        />
      </section>
      {upMdMedia && (
        <section className={s.content}>
          <h2 className={s.contentTitle}>
            Send <em>flowers</em> like you mean it.
          </h2>
          <p className={s.contentTxt}>
            Where flowers are our inspiration to create lasting memories. Whatever the occasion, our
            flowers will make it special cursus a sit amet mauris.
          </p>
        </section>
      )}
    </section>
  );
}

export default SlideshowFeature;
