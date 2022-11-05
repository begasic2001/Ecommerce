import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BigSale } from './BigSale';
import s from './hot-sale.module.scss';
import { OtherSale } from './OtherSale';
import { ISHotSale } from './interface';

const styles: ISHotSale = {
  hot: s.hot,
  hotTitle: s['hot__title'],
  hotContent: s['hot__content'],
};

function HotSaleFeature() {
  const theme = useTheme();
  const lapMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));
  const mobTabMedia = useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg'));
  const mobMedia = useMediaQuery<boolean>(theme.breakpoints.down('sm'));

  const media = {
    mobTabMedia,
    mobMedia,
  };

  return (
    <Container className={styles.hot}>
      <h3 className={styles.hotTitle}>Hot sale</h3>
      <Stack className={styles.hotContent}>
        {lapMedia && <BigSale />}
        <OtherSale media={media} />
      </Stack>
    </Container>
  );
}

export default HotSaleFeature;
