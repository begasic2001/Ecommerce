import { Stack } from '@mui/material';
import clsx from 'clsx';
import InitialImg from '~/assets/images/400x500.png';

interface ProductItemProps {
  image?: string;
  name: string;
  price: string;
}

const styles = {
  item: {
    group: 'group',
    base: 'min-h-[35rem] items-center border border-solid border-bd-2 p-10 text-center',
    hover: 'hover:cursor-pointer',
  },
  img: {
    groupHover: 'group-hover:scale-110',
    base: 'block h-200 w-full object-cover object-center duration-2',
  },
  name: 'mt-auto text-16 font-bold',
  price: 'mt-30',
};

function ProductItem({ image = InitialImg, name, price }: ProductItemProps) {
  return (
    <Stack className={clsx(styles.item.group, styles.item.base, styles.item.hover)}>
      <div>
        <img src={image} alt="other hot sale flower" className={clsx(styles.img.groupHover, styles.img.base)} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price}</p>
    </Stack>
  );
}

export default ProductItem;
