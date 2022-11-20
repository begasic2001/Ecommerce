import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductListBySearch, toggleSearch } from '~/app/productSlice';
import { IProductParams } from '~/interface/api.type';
import FunctionComp from './function';
import s from './header.module.scss';
import MenuComp from './menu';
import HeaderProvider from '~/store/header.store';

function HeaderLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrollPage, setScrollPage] = useState<boolean>(false);

  const handleSearch = async (params: IProductParams) => {
    try {
      const action: any = getProductListBySearch(params);
      await dispatch(toggleSearch(Object.keys(params).length > 0 && true));
      await dispatch(action);
      await navigate('/products');
    } catch (err: any) {
      console.log('ERROR!!!', err.message);
    }
  };

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY: number = window.scrollY;
      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage, setScrollPage]);

  return (
    <HeaderProvider handleSearch={handleSearch}>
      <header className={clsx(s.header, scrollPage && s.headerScrolled)}>
        <Container className={s.container}>
          <Stack direction="row" className={s.row}>
            <MenuComp />
            <FunctionComp />
          </Stack>
        </Container>
      </header>
    </HeaderProvider>
  );
}

export default HeaderLayout;
