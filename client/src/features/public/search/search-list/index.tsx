import { ImageList, ImageListItem, Pagination } from '@mui/material';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import ProductItem from '~/components/ui/product-item';
import { useNavigate } from 'react-router-dom';

interface ProductListProps {
  currentPage: number;
  handleChangeCurrentPage: (e: React.ChangeEvent<unknown>, value: number) => void;
  productList: any;
}

function ProductList({ currentPage, handleChangeCurrentPage, productList }: ProductListProps) {
  const navigate = useNavigate();
  const productSelector = useSelector((state: any) => state.product.filter);

  const directSpecificProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="product-List w-full">
      <h3 className="mb-20 text-25">Kết quả tìm kiếm</h3>
      <ImageList cols={4} gap={20}>
        {productList.data.map((item: any) => (
          <ImageListItem key={item.id} onClick={() => directSpecificProduct(item.id)}>
            <ProductItem data={item} isLoading={productList.loading} />
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
