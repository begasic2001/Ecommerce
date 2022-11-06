import { ImageList, ImageListItem, Stack } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';
import { IOtherSaleProps, ISOtherSale } from './interface';
import { v4 as uuidv4 } from 'uuid';

const styles: ISOtherSale = {
  other: s.other,
};

export function OtherSale({ media }: IOtherSaleProps) {
  if (!media) return null;
  const { mobTabMedia, mobMedia } = media;

  return (
    <Stack className={styles.other}>
      <ImageList cols={mobTabMedia ? 3 : mobMedia ? 2 : 4} gap={20}>
        {Array(8)
          .fill(0)
          .map(() => (
            <ImageListItem key={uuidv4()}>
              <ProductItem />
            </ImageListItem>
          ))}
      </ImageList>
    </Stack>
  );
}

export default OtherSale;
