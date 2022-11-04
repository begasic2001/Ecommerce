import { FilterAlt as FilterAltIcon } from '@mui/icons-material';
import { Button, Drawer, ImageList, ImageListItem, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import { FilterPartContent } from './Filter';
import { IResultPartProps, ISReuslt } from './interface';
import s from './product-list.module.scss';

const styles: ISReuslt = {
  result: s.result,
  resultTitle: s['result-title'],
  resultPagination: s['result-pagination'],
  filterDrawer: s['filter__drawer'],
};

export function Result({ resultPartProps, filterPartProps }: IResultPartProps) {
  if (!resultPartProps) return null;
  const { currentPage, handleChangeCurrentPage, media } = resultPartProps;
  const { laptopMedia, tabletMedia, mobileMedia, smallTabletMedia } = media;

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
    <section className={styles.result}>
      <Stack className={styles.resultTitle}>
        <h3>Kết quả tìm kiếm</h3>
        {(tabletMedia || smallTabletMedia || mobileMedia) && (
          <>
            <Button onClick={() => toggleDrawer(true)}>
              <FilterAltIcon sx={{ width: '2.5rem', height: '2.5rem', color: '#000' }} />
            </Button>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => toggleDrawer(false)}
              className={styles.filterDrawer}
            >
              <FilterPartContent filterPartProps={filterPartContentProps} />
            </Drawer>
          </>
        )}
      </Stack>
      <ImageList cols={laptopMedia || tabletMedia ? 4 : mobileMedia ? 2 : 3} gap={20}>
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
        className={styles.resultPagination}
      />
    </section>
  );
}
