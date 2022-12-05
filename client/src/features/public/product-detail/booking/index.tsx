import { Container, Stack, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import FallbackImg from '~/assets/images/400x500.png';
import { AddIcon, MinusIcon, TruckIcon } from '~/components/icons';

function Booking() {
  return (
    <section className={clsx('booking', 'mt-50 h-[50rem]')}>
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <ImageBooking />
          <InformationBooking />
        </Stack>
      </Container>
    </section>
  );
}

const ImageBooking = () => (
  <Stack className="h-[inherit] w-[35%] basis-[35%] justify-between">
    <section className="h-[40rem] w-full">
      <img src={FallbackImg} alt="image" className="block h-[inherit] w-full object-cover object-center" />
    </section>
    <section className="mt-20 h-[8rem] w-full">
      <Swiper direction="horizontal" spaceBetween={20} slidesPerView={4} className="h-[inherit]">
        {Array.from(new Array(5)).map(() => (
          <SwiperSlide>
            <section className="h-[inherit] hover:cursor-pointer">
              <img src={FallbackImg} alt="image item" className="block h-[inherit] w-full" />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </Stack>
);

const InformationBooking = () => (
  <section className="w-[60%] basis-[60%]">
    <h3 className="text-40">ABCXYZ</h3>
    <Table className="mt-20 w-full text-left">
      <TableBody>
        <TableRow className="border-b-none">
          <TableCell variant="head" className="w-1/5 border-none text-16">
            Mã sản phẩm
          </TableCell>
          <TableCell className="border-none text-16 italic text-txt-2">Cell 1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} className="border-none bg-[#fafafa] text-35 text-red-1">
            <del className="mr-15 text-20 text-txt-2 line-through decoration-txt-2 decoration-1">100đ</del>50đ
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" className="w-1/5 border-none text-16">
            Vận chuyển
          </TableCell>
          <TableCell className="flex items-center border-none text-16">
            <span className="mr-10">
              <TruckIcon />
            </span>
            Miễn phí vận chuyển
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" className="w-1/5 border-none text-16">
            Số lượng
          </TableCell>
          <TableCell className="flex items-center border-none">
            <TextField
              type="number"
              InputProps={{
                startAdornment: (
                  <section className="mr-10">
                    <AddIcon />
                  </section>
                ),
                endAdornment: (
                  <section className="ml-10">
                    <MinusIcon />
                  </section>
                ),
                className: 'text-14 w-150',
              }}
            />
            <p className="ml-15 text-12 italic text-bd-1">Có n sản phẩm có sẵn</p>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <button
      type="submit"
      className={clsx(
        'mt-40 min-h-[5rem] min-w-[20rem] border-none bg-black text-white-1 duration-2',
        'hover:cursor-pointer hover:bg-white-2 hover:text-black'
      )}
    >
      Thêm vào giỏ hàng
    </button>
  </section>
);

export { Booking };
