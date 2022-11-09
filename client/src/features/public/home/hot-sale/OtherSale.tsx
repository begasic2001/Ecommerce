import { ImageList, ImageListItem, Stack, useTheme, useMediaQuery } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';
import { IOtherSaleProps, ISOtherSale } from './interface';
import { v4 as uuidv4 } from 'uuid';

const styles: ISOtherSale = {
  other: s.other,
};

export function OtherSaleComponent() {
  const theme = useTheme();
  const media = {
    betweenSmLg: useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };

  return (
    <section className={styles.other}>
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
