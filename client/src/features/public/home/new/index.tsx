import { Container } from '@mui/material';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '~/components/ui/product-item';
import { useNavigate } from 'react-router-dom';

function New({ hotProductList }: any) {
  const { loading, data } = hotProductList;

  const navigate = useNavigate();

  const listSaleData = data.rows || [];

  const directSpecificProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="new">
      <section className="mt-80">
        <Container className="container">
          <h3 className="border-b-solid border-b border-b-bd-2 pb-10 font-sourceSerifPro text-35">
            Sản phẩm mới
          </h3>
          <section className="mt-30">
            <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={5} navigation>
              {listSaleData.map((item: any) => (
                <SwiperSlide key={item.id} onClick={() => directSpecificProduct(item.id)}>
                  <ProductItem data={item} isLoading={loading} />
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

