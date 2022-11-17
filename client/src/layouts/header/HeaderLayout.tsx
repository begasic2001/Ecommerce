import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductListBySearch } from '~/app/productSlice';
import FunctionComp from './function';
import s from './header.module.scss';
import { ISearchParams } from './interface';
import MenuComp from './menu';
import { useNavigate } from 'react-router-dom';

function HeaderLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scrollPage, setScrollPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY: number = window.scrollY;
      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage, setScrollPage]);

  const handleSearch = async (params: ISearchParams) => {
    try {
      const action: any = getProductListBySearch(params);
      await dispatch(action);
      await navigate('/products');
    } catch (err: any) {
      console.log('ERROR!!!', err.message);
    }
  };

  return (
    <header className={clsx(s.header, scrollPage && s.headerScrolled)}>
      <Container className={s.container}>
        <Stack direction="row" className={s.row}>
          <MenuComp />
          <FunctionComp handleSearch={handleSearch} />
        </Stack>
      </Container>
    </header>
  );
}

export default HeaderLayout;
