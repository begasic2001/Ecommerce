import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '~/api';
import { BookingFeature, DetailFeature } from '~/features/public/product-detail';

interface ProductAsyncData {
  loading: boolean;
  data: any;
  err: any;
}

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState<ProductAsyncData>({
    loading: true,
    data: {},
    err: null,
  });

  useEffect(() => {
    const getSpecificProduct = async () => {
      try {
        const res = await productApi.getSpecificProduct(productId);
        setProduct({
          ...product,
          loading: false,
          data: res.data.productData.rows[0],
        });
      } catch (err: any) {
        const errAnnounce = {
          message: err.message,
          data: err.response.data,
          status: err.response.status,
          headers: err.response.headers,
        };
        setProduct({
          ...product,
          loading: false,
          err: errAnnounce,
        });
        console.error('Something wrong', errAnnounce);
      }
    };

    getSpecificProduct();
  }, []);

  if (product.loading) return <h2 className="mt-15">Loading...</h2>;
  return (
    <section className="product-detail">
      <BookingFeature data={product.data} />
      <DetailFeature data={product.data} />
    </section>
  );
}

export default ProductDetail;
