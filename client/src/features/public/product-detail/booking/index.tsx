import { Container, Stack, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import clsx from 'clsx';
import { ChangeEvent, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FallbackImg from '~/assets/images/400x500.png';
import { AddIcon, MinusIcon, TruckIcon } from '~/components/icons';
import { formatCurrency } from '~/utils/format-currency';
import { useSnackbar } from 'notistack';

interface ImageBookingProps {
  selected: string;
  handleImgSelected: (num: string) => void;
  data: {
    img: string;
    signal: string;
  }[];
}

interface InformationBookingProps {
  data: any;
  quantity: number;
  handleQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBtnQuantity: (action: string) => void;
  handleAddToCart: (e: React.SyntheticEvent) => void;
}

function Booking({ data }: any) {
  console.log('data', data);
  const { enqueueSnackbar } = useSnackbar();

  const [imageSelect, setImgSelect] = useState<string>(data.img_one);
  const [quantity, setQuantity] = useState<number>(1);

  const imgList = [
    { img: data.img_one, signal: 'one' },
    { img: data.img_two, signal: 'two' },
    { img: data.img_three, signal: 'three' },
  ];

  const handleImgSelected = (num: string) => {
    setImgSelect(data[`img_${num}`]);
  };

  const handleBtnQuantity = (action: string) => {
    if (action === 'add') {
      if (quantity >= data.pro_quantity) setQuantity(data.pro_quantity);
      else setQuantity((prevState) => prevState + 1);
    } else if (action === 'minus') {
      if (quantity <= 1) setQuantity(1);
      else setQuantity((prevState) => prevState - 1);
    }
  };

  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const quantityInput = Number(e.target.value);

    if (quantityInput > data.pro_quantity) setQuantity(data.pro_quantity);
    else if (quantityInput < 1) setQuantity(1);
    else setQuantity(Number(e.target.value));
  };

  const handleAddToCart = (e: React.SyntheticEvent) => {
    e.preventDefault();
    enqueueSnackbar('Đã thêm thành công!!! 🎉🎉🎉', { variant: 'success' });
    console.log('ok');
  };

  return (
    <section className={clsx('booking', 'mt-50 h-[50rem]')}>
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <ImageBooking
            data={imgList}
            selected={imageSelect}
            handleImgSelected={handleImgSelected}
          />
          <InformationBooking
            data={data}
            quantity={quantity}
            handleQuantity={handleQuantity}
            handleBtnQuantity={handleBtnQuantity}
            handleAddToCart={handleAddToCart}
          />
        </Stack>
      </Container>
    </section>
  );
}

const ImageBooking = ({ data, selected, handleImgSelected }: ImageBookingProps) => (
  <Stack className="h-[inherit] w-[35%] basis-[35%] justify-between">
    <section className="h-[40rem] w-full">
      <img
        src={selected || FallbackImg}
        alt="image"
        className="block h-[inherit] w-full object-cover object-center"
      />
    </section>
    <section className="mt-20 h-[8rem] w-full">
      <Swiper direction="horizontal" spaceBetween={20} slidesPerView={4} className="h-[inherit]">
        {data.map((item) => (
          <SwiperSlide key={item.signal}>
            <section
              onClick={() => handleImgSelected(item.signal)}
              className="h-[inherit] hover:cursor-pointer"
            >
              <img
                src={item.img || FallbackImg}
                alt="image item"
                className="block h-[inherit] w-full"
              />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </Stack>
);

const InformationBooking = ({
  data,
  quantity,
  handleQuantity,
  handleBtnQuantity,
  handleAddToCart,
}: InformationBookingProps) => (
  <section className="w-[60%] basis-[60%]">
    <h3 className="text-40">{data.pro_name}</h3>
    <Table className="mt-20 w-full text-left">
      <TableBody>
        <TableRow className="border-b-none">
          <TableCell variant="head" className="w-1/5 border-none text-16">
            Mã sản phẩm
          </TableCell>
          <TableCell className="border-none text-16 italic text-txt-2">{data.id}</TableCell>
        </TableRow>
        <TableRow>
          {data.discount_price && (
            <TableCell colSpan={2} className="border-none bg-[#fafafa] text-35 text-red-1">
              <del className="mr-15 text-20 text-txt-2 line-through decoration-txt-2 decoration-1">
                {formatCurrency.format(data.selling_price)}
              </del>
              {formatCurrency.format(data.discount_price)}
            </TableCell>
          )}
          {!data.discount_price && (
            <TableCell colSpan={2} className="border-none bg-[#fafafa] text-35 text-red-1">
              {formatCurrency.format(data.selling_price)}
            </TableCell>
          )}
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
              value={quantity}
              onChange={handleQuantity}
              InputProps={{
                startAdornment: (
                  <section className="mr-10" onClick={() => handleBtnQuantity('minus')}>
                    <MinusIcon />
                  </section>
                ),
                endAdornment: (
                  <section className="ml-10" onClick={() => handleBtnQuantity('add')}>
                    <AddIcon />
                  </section>
                ),
                className: 'text-14 w-150',
              }}
            />
            <p className="ml-15 text-12 italic text-bd-1">Có {data.pro_quantity} sản phẩm có sẵn</p>
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
      onClick={handleAddToCart}
    >
      Thêm vào giỏ hàng
    </button>
  </section>
);

export { Booking };
