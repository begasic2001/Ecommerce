import { BookingFeature } from '~/features/public/product-detail/booking';
import { InformationFeature } from '~/features/public/product-detail/information';
import { arrGallery } from './DetailData';

function ProductDetail() {
  return (
    <>
      <BookingFeature arrGallery={arrGallery} />
      <InformationFeature />
    </>
  );
}

export default ProductDetail;
