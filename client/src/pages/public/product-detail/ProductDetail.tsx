import { BookingFeature } from '~/features/public/product-detail/booking';
import { arrGallery } from './DetailData';

function ProductDetail() {
  return <BookingFeature arrGallery={arrGallery} />;
}

export default ProductDetail;
