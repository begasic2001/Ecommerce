import { Stack, Skeleton } from '@mui/material';
import clsx from 'clsx';
import InitialImg from '~/assets/images/400x500.png';
import { formatCurrency } from '~/utils/format-currency';

interface ProductItemProps {
  data?: any;
  isLoading?: boolean;
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

function ProductItem({ data, isLoading = true }: ProductItemProps) {
  return (
    <>
      {isLoading && <ProductIsLoading />}
      {!isLoading && <ProductIsNotLoading data={data} />}
    </>
  );
}

const ProductIsNotLoading = ({ data }: ProductItemProps) => (
  <Stack className={clsx(styles.item.group, styles.item.base, styles.item.hover)}>
    <div>
      <img
        src={data.img_one || InitialImg}
        alt="other hot sale flower"
        className={clsx(styles.img.groupHover, styles.img.base)}
      />
    </div>
    <p className={styles.name}>{data.pro_name}</p>
    {data.discount_price === 0 && (
      <p className="mt-50 text-center font-bold text-red-1">
        {formatCurrency.format(data.selling_price)}
      </p>
    )}
    {data.discount_price !== 0 && (
      <p className="mt-50 text-center font-bold text-red-1">
        <em className="mr-10 text-txt-4 line-through decoration-[#ccc] decoration-1">
          {formatCurrency.format(data.selling_price)}
        </em>
        {formatCurrency.format(data.discount_price)}
      </p>
    )}
  </Stack>
);

const ProductIsLoading = () => (
  <Stack className={clsx(styles.item.group, styles.item.base, styles.item.hover)}>
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Skeleton variant="text" width="100%" height={20} className="mt-auto" />
    <Skeleton variant="text" width="100%" height={20} className="mt-30" />
  </Stack>
);

export default ProductItem;
