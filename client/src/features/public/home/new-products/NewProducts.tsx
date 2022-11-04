import { Container, useMediaQuery, useTheme } from '@mui/material';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import s from './new-products.module.scss';

const styles = {
  new: s.new,
  newContainer: s['new__container'],
  title: s.title,
  slideshow: s.slideshow,
};

function NewProductsFeature() {
  const theme = useTheme();
  const laptopMedia = useMediaQuery<boolean>(theme.breakpoints.between('lg', 'xl'));
  const tabletMedia = useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg'));
  const mobileMedia = useMediaQuery<boolean>(theme.breakpoints.down('sm'));

  return (
    <section className={styles.new}>
      <Container className={styles.newContainer}>
        <h3 className={styles.title}>Sản phẩm mới</h3>
        <section className={styles.slideshow}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={laptopMedia ? 4 : tabletMedia ? 3 : mobileMedia ? 2 : 5}
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
}

export default NewProductsFeature;
