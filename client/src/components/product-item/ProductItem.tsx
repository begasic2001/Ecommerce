import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import s from './product-item.module.scss';
import { IProductItemProps } from '~/interface/props.type';

const ProductItem = ({ item }: IProductItemProps) => {
  const navigate = useNavigate();

  const formatCurrency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const price = formatCurrency.format(item?.price);

  const navigateToSpecificProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <Stack onClick={() => navigateToSpecificProduct(item.id)} className={s.item}>
      <div>
        <img src={item?.images[0].image} alt="other hot sale flower" className={s.itemImg} />
      </div>
      <p className={s.itemName}>{item?.name}</p>
      <p className={s.itemPrice}>{price}</p>
    </Stack>
  );
};

export default ProductItem;
