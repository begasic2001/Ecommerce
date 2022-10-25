import { useMediaQuery, useTheme } from '@mui/material';
import s from './slideshow.module.scss';

const SlideshowFeature = () => {
  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <section className={s.slideshow}>
      <div className={s['slideshow__overlay']} />
      <section className={s.image}>
        <img
          src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/F5461D_LOL.jpeg?v=1648846897"
          alt="slideshow image"
        />
      </section>
      {!smallMedia && (
        <section className={s.content}>
          <h2 className={s['content__title']}>
            Send <span>flowers</span> like you mean it.
          </h2>
          <p className={s['content__paragraph']}>
            Where flowers are our inspiration to create lasting memories. Whatever the occasion, our
            flowers will make it special cursus a sit amet mauris.
          </p>
        </section>
      )}
    </section>
  );
};

export default SlideshowFeature;
