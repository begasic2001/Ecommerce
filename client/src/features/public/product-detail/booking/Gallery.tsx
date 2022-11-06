import { Stack } from '@mui/material';
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
  galleryListImg: s['gallery-list__img'],
  gallerySpec: s['gallery-spec'],
  gallerySpecImg: s['gallery-spec__img'],
};

export function GalleryPart(props: IGalleryPartProps) {
  if (!props) return null;
  const { arrGallery, imgGallerySelect, handleGallerySelect } = props;

  return (
    <Stack className={styles.gallery}>
      <section className={styles.galleryList}>
        <Swiper direction="vertical" spaceBetween={0} slidesPerView={5}>
          {arrGallery.map((item) => (
            <SwiperSlide key={item.id}>
              <section
                onClick={() => handleGallerySelect(item.id)}
                className={clsx(
                  styles.galleryListItem,
                  imgGallerySelect.id === item.id && styles.galleryListItemSelected
                )}
              >
                <img src={item.url} alt="image item" className={styles.galleryListImg} />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={styles.gallerySpec}>
        <img src={imgGallerySelect.url} alt="image" className={styles.gallerySpecImg} />
      </section>
    </Stack>
  );
}
