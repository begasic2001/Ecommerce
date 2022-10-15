import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import * as S from './new-product.style';

const NewProducts = () => {
  return (
    <S.NewProduct>
      <S.Content>
        <h3>Sản phẩm mới</h3>
        <S.Slideshow>
          <Swiper modules={[Navigation]} slidesPerView={5} navigation>
            {Array(10)
              .fill(0)
              .map(() => (
                <SwiperSlide key={uuidv4()}>
                  <ProductItem />
                </SwiperSlide>
              ))}
          </Swiper>
        </S.Slideshow>
      </S.Content>
    </S.NewProduct>
  );
};

export default NewProducts;
