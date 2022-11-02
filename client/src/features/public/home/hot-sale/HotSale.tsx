import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BigSale } from './BigSale';
import s from './hot-sale.module.scss';
import { OtherSale } from './OtherSale';

function HotSaleFeature() {
  const theme = useTheme();
  const desktopMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));
  const tabletMedia = useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg'));
  const mobileMedia = useMediaQuery<boolean>(theme.breakpoints.down('sm'));

  const media = {
    tabletMedia,
    mobileMedia,
  };

  return (
    <Container className={s.hot}>
      <h3 className={s['hot__title']}>Hot sale</h3>
      <Stack className={s['hot__content']}>
        {desktopMedia && <BigSale />}
        <OtherSale media={media} />
      </Stack>
    </Container>
  );
}

export default HotSaleFeature;
