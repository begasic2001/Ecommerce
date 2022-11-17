import { useState, useEffect } from 'react';
import { HotSaleFeature } from '~/features/public/home/hot-sale';
import { NewProductsFeature } from '~/features/public/home/new-products';
import { SlideshowFeature } from '~/features/public/home/slideshow';
import { SpecialFeature } from '~/features/public/home/special';
import { productApi } from '~/api';

function Homepage() {
  const [hotSaleList, setHotSaleList] = useState({
    loading: true,
    data: [],
  });
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const getHotList = async () => {
      try {
        const response = await productApi.getHotList();
        const data = response.data.data;
        setHotSaleList({
          ...hotSaleList,
          loading: false,
          data,
        });
      } catch (err: any) {
        console.log(err.message);
      }
    };

    getHotList();
  }, []);

  if (hotSaleList.loading) return <h2>Loading...</h2>
  return (
    <>
      <SlideshowFeature />
      <HotSaleFeature hotSaleList={hotSaleList.data} />
      <SpecialFeature />
      <NewProductsFeature />
    </>
  );
}

export default Homepage;
