import { ImageList, ImageListItem, Pagination } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import { IResultPartProps } from './interface';
import s from './product-list.module.scss';

export function Result({ resultPartProps }: IResultPartProps) {
  if (!resultPartProps) return null;
  const { currentPage, handleChangeCurrentPage } = resultPartProps;

  return (
    <section className={s.result}>
      <h3>Kết quả tìm kiếm</h3>
      <ImageList cols={4} gap={20}>
        {Array(8)
          .fill(0)
          .map(() => (
            <ImageListItem key={uuidv4()}>
              <ProductItem />
            </ImageListItem>
          ))}
      </ImageList>
      <Pagination count={5} page={currentPage} onChange={handleChangeCurrentPage} />
    </section>
  );
}
