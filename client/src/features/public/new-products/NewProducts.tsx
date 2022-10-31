import { Container, useMediaQuery, useTheme } from '@mui/material';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import s from './new-products.module.scss';

const NewProductsFeature = () => {
  const theme = useTheme();
  const mediumMedia = useMediaQuery<boolean>(theme.breakpoints.between('lg', 'xl'));
  const smallMedia = useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg'));
  const extraSmallMedia = useMediaQuery<boolean>(theme.breakpoints.down('sm'));

  return (
    <section className={s.new}>
      <Container className={s['new__container']}>
        <h3 className={s.title}>Sản phẩm mới</h3>
        <section className={s.slideshow}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={mediumMedia ? 4 : smallMedia ? 3 : extraSmallMedia ? 2 : 5}
            navigation
          >
            {Array(10)
              .fill(0)
              .map(() => (
                <SwiperSlide key={uuidv4()}>
                  <ProductItem />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </Container>
    </section>
  );
};

export default NewProductsFeature;
