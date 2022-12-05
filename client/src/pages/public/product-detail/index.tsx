import { BookingFeature, DetailFeature } from '~/features/public/product-detail';

function ProductDetail() {
  return (
    <section className="product-detail">
      <BookingFeature />
      <DetailFeature />
    </section>
  );
}

export default ProductDetail;
