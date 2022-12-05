import { ImageList, ImageListItem, Pagination } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from '~/components/ui/product-item';

function ProductList() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChangeCurrentPage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <section className={clsx('product-List', 'w-9/12 basis-9/12')}>
      <h3 className="mb-20 text-25">Kết quả tìm kiếm</h3>
      <ImageList cols={4} gap={20}>
        {Array.from(new Array(12)).map(() => (
          <ImageListItem key={uuidv4()}>
            <ProductItem name="Flower" price="100đ" />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={12}
        page={currentPage}
        onChange={handleChangeCurrentPage}
        classes={{
          ul: 'justify-center',
        }}
        className={clsx(
          'mt-30',
          '[&_.MuiButtonBase-root]:text-16 [&_.MuiButtonBase-root]:text-txt-2',
          '[&_.Mui-selected]:text-txt-1'
        )}
      />
    </section>
  );
}

export { ProductList };
