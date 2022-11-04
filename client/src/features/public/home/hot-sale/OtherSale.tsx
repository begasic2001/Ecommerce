import { ImageList, ImageListItem, Stack } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';
import { IOtherSaleProps, ISOtherSale } from './interface';

const styles: ISOtherSale = {
  other: s.other,
};

export function OtherSale({ media }: IOtherSaleProps) {
  if (!media) return null;
  const { tabletMedia, mobileMedia } = media;

  return (
    <Stack className={styles.other}>
      <ImageList cols={tabletMedia ? 3 : mobileMedia ? 2 : 4} gap={20}>
        {Array(8)
          .fill(0)
          .map(() => (
            <ImageListItem>
              <ProductItem />
            </ImageListItem>
          ))}
      </ImageList>
    </Stack>
  );
}

export default OtherSale;
