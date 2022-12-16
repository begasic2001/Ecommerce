import { Container, Table, TableBody, TableCell, TableRow } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataGuide, DataTransport } from './partial-data';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';

interface TabItem {
  children: string;
  isSelected: number;
  index: number;
}

const tableHeadInfo = ['Danh mục', 'Kiểu đóng gói', 'Xuất xứ', 'Kho hàng', 'Gửi từ'];
const tabSliderItem = ['Thông tin sản phẩm', 'Hướng dẫn chăm sóc', 'Đặt hàng & giao hàng'];

function Detail({ data }: any) {
  const [imgSelect, setImgSelect] = useState<number>(0);

  const handleGallerySelect = (num: number) => {
    setImgSelect(num);
  };

  return (
    <section className={clsx('detail', 'mt-150')}>
      <Container className="container">
        <section className="border-b-solid border-b-2 border-b-black">
          <Swiper direction="horizontal" spaceBetween={0} slidesPerView={3}>
            {tabSliderItem.map((tabItem, index) => (
              <SwiperSlide onClick={() => handleGallerySelect(index)} key={uuidv4()}>
                <TabItem isSelected={imgSelect} index={index}>
                  {tabItem}
                </TabItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section>
          {imgSelect === 0 && <DataInfo data={data} />}
          {imgSelect === 1 && <DataGuide />}
          {imgSelect === 2 && <DataTransport />}
        </section>
      </Container>
    </section>
  );
}

const TabItem = ({ children, isSelected, index }: TabItem) => (
  <span
    className={clsx('inline-block w-full py-15 px-25 text-center text-16', 'hover:cursor-pointer', {
      'bg-bd-1 font-semibold': isSelected === index,
    })}
  >
    {children}
  </span>
);

const DataInfo = ({ data }: any) => {
  const summary = [data.Category.cat_name, 'Đơn giản', 'Việt Nam', data.pro_quantity];
  const safeDetail = DOMPurify.sanitize(data.pro_detail);

  return (
    <section className="info">
      <section className="content-product-detail">
        <h3 className="title-product-detail">Thông tin chi tiết sản phẩm</h3>
        <Table className="w-full text-left">
          <TableBody>
            {tableHeadInfo.map((headItem, index) => (
              <TableRow key={uuidv4()}>
                <TableCell variant="head" className="w-1/5 border-none py-15 text-14 font-bold">
                  {headItem}
                </TableCell>
                <TableCell className="border-none text-14">{summary[index]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="content-product-detail">
        <h3 className="title-product-detail">Mô tả sản phẩm</h3>
        <div dangerouslySetInnerHTML={{ __html: safeDetail }}></div>
      </section>
    </section>
  );
};

export { Detail };
