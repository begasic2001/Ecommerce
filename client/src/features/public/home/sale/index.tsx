import { Container, ImageList, ImageListItem, Stack } from '@mui/material';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from '~/components/ui/product-item';

function Sale() {
  return (
    <section className="sale">
      <section className="mx-auto mt-50">
        <Container className="container">
          <h3 className="border-b-solid font-600 border-b border-b-bd-2 pb-10 font-sourceSerifPro text-35">Hot sale</h3>
          <Stack direction="row" className="mt-30 justify-between">
            <BigSale />
            <ListSale />
          </Stack>
        </Container>
      </section>
    </section>
  );
}

const BigSale = () => (
  <section className={clsx('bigSale', 'w-[25%] basis-[25%]')}>
    <Stack
      className={clsx(
        'group',
        'min-h-full overflow-hidden border border-solid border-bd-2 p-25',
        'hover:cursor-pointer'
      )}
    >
      <section className={clsx('group-hover:scale-110', 'duration-2')}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="big sale flower"
          className="block h-[50rem] w-full object-cover object-center"
        />
      </section>
      <p className="mt-auto text-center text-28">Flower</p>
      <p className="mt-50 text-center text-25 font-bold text-red-1">
        <em className="mr-10 text-20 text-txt-4 line-through decoration-[#ccc] decoration-1">2000đ</em>
        3000đ
      </p>
    </Stack>
  </section>
);

const ListSale = () => (
  <section className={clsx('list-sale', 'w-[70%] basis-[70%]')}>
    <ImageList cols={4} gap={20}>
      {Array.from(new Array(8)).map(() => (
        <ImageListItem key={uuidv4()}>
          <ProductItem name="Flower" price="200đ" />
        </ImageListItem>
      ))}
    </ImageList>
  </section>
);

export { Sale };
