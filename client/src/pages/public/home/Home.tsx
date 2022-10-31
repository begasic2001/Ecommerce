import { SlideshowFeature } from '~/features/public/slideshow';
import { HotSaleFeature } from '~/features/public/hot-sale';
import { SpecialFeature } from '~/features/public/special';
import { NewProductsFeature } from '~/features/public/new-products';

function Homepage() {
  return (
    <>
      <SlideshowFeature />
      <HotSaleFeature />
      <SpecialFeature />
      <NewProductsFeature />
    </>
  );
}

export default Homepage;
