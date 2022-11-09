import { useTheme, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './booking.module.scss';
import { IGalleryPartProps, ISGallery } from './interface';

const styles: ISGallery = {
  gallery: s.gallery,
  galleryList: s['gallery-list'],
  galleryListItem: s['gallery-list__item'],
  galleryListItemSelected: s['gallery-list__item--selected'],
  gallerySpec: s['gallery-spec'],
};

export function GalleryComponent(props: IGalleryPartProps) {
  if (!props) return null;
  const { arrGallery, imgGallerySelect, handleGallerySelect } = props;

  const theme = useTheme();
  const betweenLgXlMedia = useMediaQuery<boolean>(theme.breakpoints.between('lg', 'xl'));

  return (
    <section className={styles.gallery}>
      <section className={styles.gallerySpec}>
        <img src={arrGallery[imgGallerySelect].url} alt="image" />
      </section>
      <section className={styles.galleryList}>
        <Swiper direction="horizontal" spaceBetween={20} slidesPerView={4}>
          {arrGallery.map((item, index) => (
            <SwiperSlide key={item.id}>
              <section
                onClick={() => handleGallerySelect(index)}
                className={clsx(
                  styles.galleryListItem,
                  imgGallerySelect === index && styles.galleryListItemSelected
                )}
              >
                <img src={item.url} alt="image item" />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
