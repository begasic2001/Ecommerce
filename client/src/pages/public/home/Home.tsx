import { HotSaleFeature } from '~/features/public/home/hot-sale';
import { NewProductsFeature } from '~/features/public/home/new-products';
import { SlideshowFeature } from '~/features/public/home/slideshow';
import { SpecialFeature } from '~/features/public/home/special';

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
