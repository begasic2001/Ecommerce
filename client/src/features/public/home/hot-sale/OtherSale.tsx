import { ImageList, ImageListItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';
import { IMediaProps } from './interface';

export function OtherSaleComponent({ media }: IMediaProps) {
  return (
    <section className={s.other}>
      <ImageList cols={media.downSm ? 2 : media.betweenSmLg ? 3 : 4} gap={20}>
        {Array(8)
          .fill(0)
          .map(() => (
            <ImageListItem key={uuidv4()}>
              <ProductItem />
            </ImageListItem>
          ))}
      </ImageList>
    </section>
  );
}
