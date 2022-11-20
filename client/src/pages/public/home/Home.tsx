import { useEffect, useState } from 'react';
import { productApi } from '~/api';
import HotSaleFeature from '~/features/public/home/hot-sale';
import { NewProductsFeature } from '~/features/public/home/new-products';
import SlideshowFeature from '~/features/public/home/slideshow';
import { SpecialFeature } from '~/features/public/home/special';
import { IInitialFetch } from '~/interface/state.type';

function Homepage() {
  const [hotSaleList, setHotSaleList] = useState<IInitialFetch>({
    loading: true,
    data: [],
    err: null,
  });
  const [newList, setNewList] = useState<IInitialFetch>({
    loading: true,
    data: [],
    err: null,
  });

  useEffect(() => {
    const getHotList = async () => {
      try {
        const response = await productApi.getHotList();
        const { data } = response;
        const dataRes = data.data;
        setHotSaleList({
          ...hotSaleList,
          loading: false,
          data: dataRes,
        });
      } catch (err: any) {
        console.log('ERROR!!! ', err.message);
        setHotSaleList({
          ...hotSaleList,
          loading: false,
          err: err.message,
        });
      }
    };

    getHotList();
  }, []);

  useEffect(() => {
    const getNewList = async () => {
      try {
        const response = await productApi.getNewList();
        const { data } = response;
        const dataRes = data.data;
        setNewList({
          ...newList,
          loading: false,
          data: dataRes,
        });
      } catch (err: any) {
        console.log('ERROR!!! ', err.message);
        setNewList({
          ...newList,
          loading: false,
          err: err.message,
        });
      }
    };

    getNewList();
  }, []);

  if (hotSaleList.loading || newList.loading)
    return <h2 style={{ marginTop: '15rem' }}>Loading...</h2>;
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
