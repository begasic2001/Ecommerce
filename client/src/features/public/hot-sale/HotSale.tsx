import { ProductItem } from '~/components/product-item';
import * as S from './hot-sale.style';

const HotSale = () => {
  return (
    <S.HotSale>
      <S.Content>
        <h3>Hot sale</h3>
        <S.FlexBoxBetween>
          <S.HotBig>
            <S.BigImg>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                alt="big sale flower"
              />
            </S.BigImg>
            <S.HotBigInfo>
              <p className="info__name">Hoa Tang</p>
              <p className="info__price">
                <span>$300</span> $225
              </p>
            </S.HotBigInfo>
            <S.HotBigRemain>
              <p className="remain__txt">Còn lại</p>
              <p className="remain__time">43 : 22 : 17</p>
            </S.HotBigRemain>
          </S.HotBig>
          <S.HotOther>
            {Array(6)
              .fill(0)
              .map(() => (
                <ProductItem />
              ))}
          </S.HotOther>
        </S.FlexBoxBetween>
      </S.Content>
    </S.HotSale>
  );
};

export default HotSale;
