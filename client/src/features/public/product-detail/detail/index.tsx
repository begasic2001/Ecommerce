import { Container, Table, TableBody, TableCell, TableRow } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataGuide, DataTransport } from './partial-data';
import { v4 as uuidv4 } from 'uuid';

interface TabItem {
  children: string;
  isSelected: number;
  index: number;
}

const tableHeadInfo = ['Danh mục', 'Kiểu đóng gói', 'Xuất xứ', 'Kho hàng', 'Gửi từ'];
const tabSliderItem = ['Thông tin sản phẩm', 'Hướng dẫn chăm sóc', 'Đặt hàng & giao hàng'];

function Detail() {
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
          {imgSelect === 0 && <DataInfo />}
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

const DataInfo = () => (
  <section className="info">
    <section className="content-product-detail">
      <h3 className="title-product-detail">Thông tin chi tiết sản phẩm</h3>
      <Table className="w-full text-left">
        <TableBody>
          {tableHeadInfo.map((headItem) => (
            <TableRow key={uuidv4()}>
              <TableCell variant="head" className="w-1/5 border-none py-15 text-14 font-bold">
                {headItem}
              </TableCell>
              <TableCell className="border-none text-14">ABCXYZ</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
    <section className="content-product-detail">
      <h3 className="title-product-detail">Mô tả sản phẩm</h3>
      <p className="text-product-detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis dignissimos ipsa dolorum
        excepturi distinctio velit repellat, fugiat exercitationem unde maiores sequi recusandae?
        Voluptas harum debitis quam enim. Nobis, nesciunt!
      </p>
    </section>
  </section>
);

export { Detail };
