import { Container, useMediaQuery, useTheme } from '@mui/material';
import BigSaleComp from './big';
import s from './hot-sale.module.scss';
import { IHotSaleArrayItemProps } from '~/interface/props.type';
import OtherSaleComp from './other/OtherSale';

function HotSaleFeature({ hotSaleList }: IHotSaleArrayItemProps) {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  const bigSale = hotSaleList[0];
  const otherSale = hotSaleList.slice(1);

  return (
    <section className={s.hot}>
      <Container className={s.container}>
        <h3 className={s.title}>Hot sale</h3>
        <section className={s.content}>
          {upXlMedia && <BigSaleComp bigSale={bigSale} />}
          <OtherSaleComp otherSale={otherSale} />
        </section>
      </Container>
    </section>
  );
}

export default HotSaleFeature;
