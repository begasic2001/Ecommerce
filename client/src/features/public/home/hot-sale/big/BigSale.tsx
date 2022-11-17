import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import s from './big-sale.module.scss';

function BigSale({ bigSale }: any) {
  const formatCurrency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const navigate = useNavigate();

  const price = formatCurrency.format(bigSale.price);
  const newPrice = formatCurrency.format(bigSale.newPrice);

  const navigateToSpecificProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <Stack onClick={() => navigateToSpecificProduct(bigSale.id)} className={s.big}>
      <section className={s.image}>
        <img src={bigSale.images[0]} alt="big sale flower" />
      </section>
      <p className={s.name}>{bigSale.name}</p>
      <p className={s.price}>
        <em>{price}</em> {newPrice}
      </p>
    </Stack>
  );
}

export default BigSale;
