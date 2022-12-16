import { NewFeature, SaleFeature, SlideshowFeature, SpecialFeature } from '~/features/public/home';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getHotProducts } from '~/app/productSlide';

function Home() {
  const dispatch = useDispatch();

  const hotProductSelector = useSelector((state: any) => state.product.hot);

  useEffect(() => {
    const getHotProductList = () => {
      const action: any = getHotProducts();
      dispatch(action);
    };

    getHotProductList();
  }, []);

  return (
    <section className="home">
      <SlideshowFeature />
      <SaleFeature hotProductList={hotProductSelector} />
      <SpecialFeature />
      <NewFeature hotProductList={hotProductSelector} />
    </section>
  );
}

export default Home;
