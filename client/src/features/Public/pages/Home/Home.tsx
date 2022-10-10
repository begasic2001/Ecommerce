import { Slideshow } from '../../components/Slideshow';
import { HotSale } from '../../components/HotSale';
import { Special } from '../../components/Special';
import { NewProducts } from '../../components/NewProducts';

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
