import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AddSVG, MinusSVG, TruckSVG } from '~/components/Icons';
import * as S from './detail.style';
import { DetailData, arrGallery } from './DetailData';
import { IImageSelect } from './interface';

const Detail = () => {
  const [imageSelect, setImageSelect] = useState<IImageSelect>(() => {
    return {
      id: arrGallery[0].id || '',
      url: arrGallery[0].url || '',
    };
  });
  const [quantity, setQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(300);
  const [tabSelect, setTabSelect] = useState(1);

  const handleGallerySelect = (id) => {
    const galleryItem = arrGallery.find((item) => item.id === id);
    if (!galleryItem || imageSelect.id === id) return;
    setImageSelect({
      ...imageSelect,
      id: galleryItem.id,
      url: galleryItem.url,
    });
  };

  const handleQuantityFlowers = (e) => {
    setQuantity(e.target.value);
  };

  const handleQuantityBtn = (action) => {
    if (action === 'add') {
      if (quantity > maxQuantity) return;
      setQuantity((prevState) => prevState + 1);
    } else {
      if (quantity <= 1) return;
      setQuantity((prevState) => prevState - 1);
    }
  };

  const handleTabSelect = (num) => {
    setTabSelect(num);
  };

  useEffect(() => {
    if (quantity < 1) setQuantity(0);
    else if (quantity > maxQuantity) setQuantity(maxQuantity);
  }, [quantity]);

  return (
    <S.Detail>
      <S.Content>
        <S.Product>
          <S.Gallery>
            <S.GalleryList>
              <Swiper direction={'vertical'} spaceBetween={0} slidesPerView={5}>
                {arrGallery.map((item) => (
                  <SwiperSlide>
                    <S.GalleryListItem
                      key={item.id}
                      onClick={() => handleGallerySelect(item.id)}
                      isSelected={imageSelect.id === item.id && true}
                    >
                      <img src={item.url} alt="image item" />
                    </S.GalleryListItem>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.GalleryList>
            <S.GallerySpecific>
              <img src={imageSelect.url} alt="image item is show" />
            </S.GallerySpecific>
          </S.Gallery>
          <S.Summary>
            <h3>Hoa hướng dương</h3>
            <S.SummaryTable>
              <tbody>
                <tr>
                  <th>Mã sản phẩm</th>
                  <td className="summary__code">HHD001</td>
                </tr>
                <tr className="summary__price">
                  <td colSpan={2}>
                    <span>1.450.000đ</span> 1.235.000đ
                  </td>
                </tr>
                <tr>
                  <th>Vận chuyển</th>
                  <td>
                    <TruckSVG /> Miễn phí vận chuyển
                  </td>
                </tr>
                <tr>
                  <th>Số lượng</th>
                  <td className="summary__quantity">
                    <div className="summary__input">
                      <div
                        onClick={() => handleQuantityBtn('minus')}
                        className="summary-quantity__btn"
                      >
                        <MinusSVG />
                      </div>
                      <input type="number" value={quantity} onChange={handleQuantityFlowers} />
                      <div
                        onClick={() => handleQuantityBtn('add')}
                        className="summary-quantity__btn"
                      >
                        <AddSVG />
                      </div>
                    </div>
                    <p>Có {maxQuantity} sản phẩm có sẵn</p>
                  </td>
                </tr>
              </tbody>
            </S.SummaryTable>
            <button>Thêm vào giỏ hàng</button>
          </S.Summary>
        </S.Product>
        <S.Desc>
          <S.DescTab>
            <span
              onClick={() => handleTabSelect(1)}
              className={tabSelect === 1 ? 'tab__selected' : ''}
            >
              Thông tin sản phẩm
            </span>
            <span
              onClick={() => handleTabSelect(2)}
              className={tabSelect === 2 ? 'tab__selected' : ''}
            >
              Hướng dẫn chăm sóc
            </span>
            <span
              onClick={() => handleTabSelect(3)}
              className={tabSelect === 3 ? 'tab__selected' : ''}
            >
              Đặt hàng & giao hàng
            </span>
          </S.DescTab>
          <section>
            <DetailData tabNum={tabSelect} />
          </section>
        </S.Desc>
      </S.Content>
    </S.Detail>
  );
};

export default Detail;
