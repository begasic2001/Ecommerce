import { useEffect, useState } from 'react';
import { productApi } from '~/api';
import { HotSaleFeature } from '~/features/public/home/hot-sale';
import { NewProductsFeature } from '~/features/public/home/new-products';
import { SlideshowFeature } from '~/features/public/home/slideshow';
import { SpecialFeature } from '~/features/public/home/special';
import { IInitialList } from './interface.type';

function Homepage() {
  const [hotSaleList, setHotSaleList] = useState<IInitialList>({
    loading: true,
    data: [],
  });
  const [newList, setNewList] = useState<IInitialList>({
    loading: true,
    data: [],
  });

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
        console.log('ERROR!!! ', err.message);
      }
    };

    getHotList();
  }, []);

  useEffect(() => {
    const getNewList = async () => {
      try {
        const response = await productApi.getNewList();
        const data = response.data.data;
        setNewList({
          ...newList,
          loading: false,
          data,
        });
      } catch (err: any) {
        console.log('ERROR!!! ', err.message);
      }
    };

    getNewList();
  }, []);

  if (hotSaleList.loading || newList.loading) return <h2>Loading...</h2>;
  return (
    <>
      <SlideshowFeature />
      <HotSaleFeature hotSaleList={hotSaleList.data} />
      <SpecialFeature />
      <NewProductsFeature newList={newList.data} />
    </>
  );
}

export default Homepage;
