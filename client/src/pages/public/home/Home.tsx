import { Slideshow } from '~/features/public/slideshow';
import { HotSale } from '~/features/public/hot-sale';
import { Special } from '~/features/public/special';
import { NewProducts } from '~/features/public/new-products';

const Home = () => {
  return (
    <>
      <Slideshow />
      <HotSale />
      <Special />
      <NewProducts />
    </>
  );
};

export default Home;
