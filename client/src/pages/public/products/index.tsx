import { Container, Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { productApi } from '~/api';
import { FilterFeature, ProductListFeature } from '~/features/public/products';

function Products() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productList, setProductList] = useState({
    loading: true,
    data: [],
    err: {},
  });

  const handleChangeCurrentPage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const handleLoadProduct = async () => {
      try {
        const params = {
          page: currentPage,
          limit: 12,
        };

        const res = await productApi.getAll(params);
        setProductList({
          ...productList,
          loading: false,
          data: res.data.productData.rows,
        });
        console.log('res', res);
      } catch (err: any) {
        setProductList({
          ...productList,
          loading: false,
          err: {
            message: err.message,
            data: err.response.data,
            status: err.response.status,
            headers: err.response.headers,
          },
        });
      }
    };

    handleLoadProduct();
  }, [currentPage]);

  if (productList.loading) return <h2 className="mt-150">Loading...</h2>;

  return (
    <section className="products mt-50">
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <FilterFeature />
          <ProductListFeature
            currentPage={currentPage}
            handleChangeCurrentPage={handleChangeCurrentPage}
            productList={productList}
          />
        </Stack>
      </Container>
    </section>
  );
}

export default Products;
