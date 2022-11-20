import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import { IOtherSaleArrayItemProps } from '~/interface/props.type';
import s from './hot-sale.module.scss';

function OtherSale({ otherSale }: IOtherSaleArrayItemProps) {
  const theme = useTheme();
  const media = {
    upXlMedia: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    betweenSmLg: useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };

  return (
    <section className={s.other}>
      <ImageList cols={media.downSm ? 2 : media.betweenSmLg ? 3 : 4} gap={20}>
        {otherSale.map((item) => (
          <ImageListItem key={item.id}>
            <ProductItem item={item} />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

export default OtherSale;
