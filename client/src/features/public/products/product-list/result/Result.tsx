import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import FilterContent from '../filter';
import { IResultPartProps } from './interface.type';
import s from './result.module.scss';

function Result({ resultPartProps, filterPartProps, productList }: IResultPartProps) {
  const { currentPage, handleChangeCurrentPage } = resultPartProps;

  const theme = useTheme();
  const media = {
    downLg: useMediaQuery<boolean>(theme.breakpoints.down('lg')),
    upMd: useMediaQuery<boolean>(theme.breakpoints.up('md')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const isFilterDrawer: boolean = true;

  const toggleDrawer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const filterPartContentProps = {
    ...filterPartProps,
    isDrawer: isFilterDrawer,
  };

  return (
    <section className={s.result}>
      <section className={s.resultTitle}>
        <h3>Kết quả tìm kiếm</h3>
        {media.downLg && (
          <>
            <Button onClick={() => toggleDrawer(true)}>
              <FilterAltIcon sx={{ width: '2.5rem', height: '2.5rem', color: '#000' }} />
            </Button>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => toggleDrawer(false)}
              className={s['filter__drawer']}
            >
              <FilterContent filterPartProps={filterPartContentProps} />
            </Drawer>
          </>
        )}
      </section>
      <ImageList cols={media.upMd ? 4 : media.downSm ? 2 : 3} gap={20}>
        {productList.map((item) => (
          <ImageListItem key={item.id}>
            <ProductItem item={item} />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={5}
        page={currentPage}
        onChange={handleChangeCurrentPage}
        className={s.resultPagination}
      />
    </section>
  );
}

export default Result;
