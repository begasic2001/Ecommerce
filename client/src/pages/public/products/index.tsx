import { Container, Stack } from '@mui/system';
import { FilterFeature, ProductListFeature } from '~/features/public/products';

function Products() {
  return (
    <section className="products mt-50">
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <FilterFeature />
          <ProductListFeature />
        </Stack>
      </Container>
    </section>
  );
}

export default Products;
