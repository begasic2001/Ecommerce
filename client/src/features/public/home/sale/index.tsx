import { Container, ImageList, ImageListItem, Skeleton, Stack } from '@mui/material';
import clsx from 'clsx';
import ProductItem from '~/components/ui/product-item';
import { formatCurrency } from '~/utils/format-currency';
import { useNavigate } from 'react-router-dom';

interface SaleProps {
  isLoading: boolean;
  saleData: any;
}

function Sale({ hotProductList }: any) {
  const { loading, data } = hotProductList;

  const bigSaleData = data?.rows?.[0] || [];
  const listSaleData = data.rows || [];
  console.log('bigSaleData', data.rows);

  return (
    <section className="sale">
      <section className="mx-auto mt-50">
        <Container className="container">
          <h3 className="border-b-solid font-600 border-b border-b-bd-2 pb-10 font-sourceSerifPro text-35">
            Hot sale
          </h3>
          <Stack direction="row" className="mt-30 justify-between">
            <BigSale saleData={bigSaleData} isLoading={loading} />
            <ListSale isLoading={loading} saleData={listSaleData} />
          </Stack>
        </Container>
      </section>
    </section>
  );
}

const BigSale = ({ isLoading, saleData }: SaleProps) => {
  const navigate = useNavigate();

  const directSpecificProduct = () => {
    navigate(`/products/${saleData.id}`);
  };

  return (
    <section className={clsx('bigSale', 'w-[25%] basis-[25%]')} onClick={directSpecificProduct}>
      <Stack
        className={clsx(
          'group',
          'min-h-full overflow-hidden border border-solid border-bd-2 p-25',
          'hover:cursor-pointer'
        )}
      >
        {isLoading && (
          <>
            <Skeleton variant="rectangular" width="100%" height={500} />
            <Skeleton variant="text" width="100%" height={42} className="mt-auto" />
            <Skeleton variant="text" width="100%" height={40} className="mt-50" />
          </>
        )}
        {!isLoading && (
          <>
            <section className={clsx('group-hover:scale-110', 'duration-2')}>
              <img
                src={saleData.img_one}
                alt="big sale flower"
                className="block h-[50rem] w-full object-cover object-center"
              />
            </section>
            <p className="mt-auto text-center text-28">{saleData.pro_name}</p>
            <p className="mt-50 text-center text-25 font-bold text-red-1">
              <em className="mr-10 text-20 text-txt-4 line-through decoration-[#ccc] decoration-1">
                {formatCurrency.format(saleData.selling_price)}
              </em>
              {formatCurrency.format(saleData.discount_price)}
            </p>
          </>
        )}
      </Stack>
    </section>
  );
};

const ListSale = ({ isLoading, saleData }: SaleProps) => {
  const navigate = useNavigate();

  const directSpecificProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className={clsx('list-sale', 'w-[70%] basis-[70%]')}>
      <ImageList cols={4} gap={20}>
        {saleData.map((item: any) => (
          <ImageListItem key={item.id} onClick={() => directSpecificProduct(item.id)}>
            <ProductItem data={item} isLoading={isLoading} />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
};

export { Sale };
