import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import {
  Button,
  Drawer,
  ImageList,
  ImageListItem,
  Pagination
} from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import { FilterContent } from './FilterComp';
import { IResultPartProps } from './interface';
import s from './product-list.module.scss';

export function ResultComponent({ resultPartProps, filterPartProps }: IResultPartProps) {
  const { currentPage, handleChangeCurrentPage, media } = resultPartProps;

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
      <section className={s['result-title']}>
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
        {Array(8)
          .fill(0)
          .map(() => (
            <ImageListItem key={uuidv4()}>
              <ProductItem />
            </ImageListItem>
          ))}
      </ImageList>
      <Pagination
        count={5}
        page={currentPage}
        onChange={handleChangeCurrentPage}
        className={s['result-pagination']}
      />
    </section>
  );
}
