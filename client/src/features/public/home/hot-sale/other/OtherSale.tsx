import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';

function OtherSale({ otherSale }: any) {
  console.log('otherSale', otherSale.length);
  const theme = useTheme();
  const media = {
    upXlMedia: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    betweenSmLg: useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };

  return (
    <section className={s.other}>
      <ImageList cols={media.downSm ? 2 : media.betweenSmLg ? 3 : 4} gap={20}>
        {otherSale.map((item: any) => (
          <ImageListItem key={item.id}>
            <ProductItem item={item} />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

export default OtherSale;
