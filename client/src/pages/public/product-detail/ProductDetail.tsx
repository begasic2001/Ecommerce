import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi, categoryApi, brandApi } from '~/api';
import { BookingFeature } from '~/features/public/product-detail/booking';
import { InformationFeature } from '~/features/public/product-detail/information';
import ProductDetailProvider from '~/store/product-detail.store';

interface IInitial {
  loading: boolean;
  data: {
    product: any;
    category: any;
    brand: any;
  };
  err: string | null;
}

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState<IInitial>({
    loading: true,
    data: {
      product: {},
      category: {},
      brand: {},
    },
    err: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseProduct = await productApi.getSpecific(productId);
        const dataProduct = responseProduct.data;
        const responseCategory = await categoryApi.getSpecific(dataProduct.categoryId);
        const dataCategory = responseCategory.data;
        const responseBrand = await brandApi.getSpecific(dataProduct.brandId);
        const dataBrand = responseBrand.data;

        setProduct({
          ...product,
          loading: false,
          data: {
            ...product.data,
            product: dataProduct,
            category: dataCategory,
            brand: dataBrand,
          },
        });
      } catch (err: any) {
        console.log('ERROR!!!', err.message);
        setProduct({
          ...product,
          loading: false,
          err: err.message,
        });
      }
    };

    fetchProduct();
  }, []);

  if (product.loading) return <h2 style={{ marginTop: '15rem' }}>Loading...</h2>;
  return (
    <ProductDetailProvider productDetail={product.data}>
      <>
        <BookingFeature />
        <InformationFeature />
      </>
    </ProductDetailProvider>
  );
}

export default ProductDetail;
