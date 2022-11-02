import { ImageList, ImageListItem, Stack } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';
import { IOtherSaleProps } from './interface';

export function OtherSale({ media }: IOtherSaleProps) {
  if (!media) return null;
  const { tabletMedia, mobileMedia } = media;

  return (
    <Stack className={s.other}>
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
