import { Container } from '@mui/material';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from '~/components/ui/product-item';

function New() {
  return (
    <section className="new">
      <section className="mt-80">
        <Container className="container">
          <h3 className="border-b-solid border-b border-b-bd-2 pb-10 font-sourceSerifPro text-35">Sản phẩm mới</h3>
          <section className="mt-30">
            <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={5} navigation>
              {Array.from(new Array(10)).map(() => (
                <SwiperSlide key={uuidv4()}>
                  <ProductItem name="Flower" price="200đ" />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </Container>
      </section>
    </section>
  );
}

export { New };

