import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { v4 as uuidv4 } from 'uuid';
import { ArrowLeftSVG, ArrowRightSVG } from '~/components/icons';
import { ProductItem } from '~/components/product-item';
import * as S from './products.style';

const items: number[] = Array(20).fill(0);

export const ProductList = () => {
  const [currentItems, setCurrentItems] = useState<number[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (e) => {
    console.log(e);
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <S.List>
      <h3>Kết quả tìm kiếm</h3>
      <S.ListProduct>
        {currentItems && currentItems.map(() => <ProductItem key={uuidv4()} />)}
      </S.ListProduct>
      <S.ListPaginate>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ArrowRightSVG />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<ArrowLeftSVG />}
        />
      </S.ListPaginate>
    </S.List>
  );
};
