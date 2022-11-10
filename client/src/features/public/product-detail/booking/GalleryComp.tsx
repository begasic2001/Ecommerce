import clsx from 'clsx';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './booking.module.scss';
import { IGalleryPartProps } from './interface';

export function GalleryComponent({
  arrGallery,
  imgGallerySelect,
  handleGallerySelect,
}: IGalleryPartProps) {
  return (
    <section className={s.gallery}>
      <section className={s['gallery-spec']}>
        <img src={arrGallery[imgGallerySelect].url} alt="image" />
      </section>
      <section className={s['gallery-list']}>
        <Swiper direction="horizontal" spaceBetween={20} slidesPerView={4}>
          {arrGallery.map((item, index) => (
            <SwiperSlide key={item.id}>
              <section
                onClick={() => handleGallerySelect(index)}
                className={clsx(
                  s['gallery-list__item'],
                  imgGallerySelect === index && s['gallery-list__item--selected']
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
