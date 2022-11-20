import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { ProductItem } from '~/components/product-item';
import { IProductItem } from '~/interface/props.type';
import { useProductContext } from '~/store/products.store';
import FilterContent from '../filter';
import { IFilterPartProps } from './interface.type';
import s from './result.module.scss';

function Result({ filterPartProps }: IFilterPartProps) {
  const theme = useTheme();
  const media = {
    downLg: useMediaQuery<boolean>(theme.breakpoints.down('lg')),
    upMd: useMediaQuery<boolean>(theme.breakpoints.up('md')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };
  const productTheme = useProductContext();
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
        {productTheme?.productData.map((item: IProductItem) => (
          <ImageListItem key={item.id}>
            <ProductItem item={item} />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={productTheme?.pagination._totalPages}
        page={productTheme?.currentPage}
        onChange={productTheme?.handleChangeCurrentPage}
        className={s.resultPagination}
      />
    </section>
  );
}

export default Result;
