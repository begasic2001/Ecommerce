import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Stack, Table, TableBody, TableCell, TableRow } from '@mui/material';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormSetValue
} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as yup from 'yup';
import { paymentApi } from '~/api';
import { add } from '~/app/cartSlice';
import FallbackImg from '~/assets/images/400x500.png';
import { CustomQuantityField } from '~/components/form/input';
import { TruckIcon } from '~/components/icons';
import { formatCurrency } from '~/utils/format-currency';
import { useSelector } from 'react-redux';

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
  control: Control<FieldValues, any>;
  setValue: UseFormSetValue<FieldValues>;
  handleAddToCart: (value: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

function Booking({ data }: any) {
  const schemaValidate = yup.object({
    quantity: yup
      .number()
      .min(1, 'Không được bé hơn 1')
      .max(data.pro_quantity, 'Không được vượt quá số lượng'),
  });

  const { enqueueSnackbar } = useSnackbar();
  const userSelector = useSelector((state: any) => state.user.data);
  console.log('userSelector', userSelector);
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidate),
  });
  const dispatch = useDispatch();

  const [imageSelect, setImgSelect] = useState<string>(data.img_one);

  const imgList = [
    { img: data.img_one, signal: 'one' },
    { img: data.img_two, signal: 'two' },
    { img: data.img_three, signal: 'three' },
  ];

  const handleImgSelected = (num: string) => {
    setImgSelect(data[`img_${num}`]);
  };

  const handleAddToCart = async (value: any) => {
    try {
      if (Cookies.get('user') === undefined) throw 'Bạn chưa đăng nhập !!! ❌❌❌';

      const productItem = {
        id: data.id,
        code: data.pro_code,
        name: data.pro_name,
        image: data.img_one,
        basePrice: Number(data.discount_price) || Number(data.selling_price),
        price: Number(data.discount_price) || Number(data.selling_price),
        quantity: Number(value.quantity),
      };

      dispatch(add(productItem));
      await paymentApi.addCart(data.id, userSelector.accessToken);
      enqueueSnackbar('Thêm vào giỏ hàng thành công!!! 🎉🎉🎉', { variant: 'success' });
    } catch (err: any) {
      enqueueSnackbar(err, { variant: 'error' });
    }
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
            control={control}
            setValue={setValue}
            handleAddToCart={handleAddToCart}
            handleSubmit={handleSubmit}
            errors={errors}
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
  control,
  setValue,
  errors,
  handleSubmit,
  handleAddToCart,
}: InformationBookingProps) => (
  <section className="w-[60%] basis-[60%]">
    <form onSubmit={handleSubmit(handleAddToCart)}>
      <h3 className="text-40">{data.pro_name}</h3>
      <Table className="mt-20 w-full text-left">
        <TableBody>
          <TableRow className="border-b-none">
            <TableCell variant="head" className="w-1/5 border-none text-16">
              Mã sản phẩm
            </TableCell>
            <TableCell className="border-none text-16 italic text-txt-2">{data.pro_code}</TableCell>
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
              <CustomQuantityField
                control={control}
                name="quantity"
                defaultValue="1"
                setValue={setValue}
                min={1}
                max={data.pro_quantity}
                error={errors.quantity?.message}
              />
              <p className="ml-15 text-12 italic text-bd-1">
                Có {data.pro_quantity} sản phẩm có sẵn
              </p>
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
    </form>
  </section>
);

export { Booking };

