import clsx from 'clsx';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './booking.module.scss';
import { IGalleryPartProps } from './interface';
import { useProductDetailContext } from '~/store/product-detail.store';

export function GalleryComponent({ imgGallerySelect, handleGallerySelect }: IGalleryPartProps) {
  const theme = useProductDetailContext();

  return (
    <section className={s.gallery}>
      <section className={s['gallery-spec']}>
        <img src={theme?.productDetail?.product.images[imgGallerySelect].image} alt="image" />
      </section>
      <section className={s['gallery-list']}>
        <Swiper direction="horizontal" spaceBetween={20} slidesPerView={4}>
          {theme?.productDetail?.product.images.map((item: any, index: number) => (
            <SwiperSlide key={item.id}>
              <section
                onClick={() => handleGallerySelect(index)}
                className={clsx(
                  s['gallery-list__item'],
                  imgGallerySelect === index && s['gallery-list__item--selected']
                )}
              >
                <img src={item.image} alt="image item" />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
