import { SlideshowFeature } from '~/features/public/slideshow';
import { HotSaleFeature } from '~/features/public/hot-sale';
import { SpecialFeature } from '~/features/public/special';

const Homepage = () => {
  return (
    <>
      <SlideshowFeature />
      <HotSaleFeature />
      <SpecialFeature />
    </>
  );
};

export default Homepage;
