import { SlideshowFeature } from '~/features/public/slideshow';
import { HotSaleFeature } from '~/features/public/hot-sale';

const Homepage = () => {
  return (
    <>
      <SlideshowFeature />
      <HotSaleFeature />
    </>
  );
};

export default Homepage;
