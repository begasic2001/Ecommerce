import { CheckSVG, FilterSVG } from '~/components/Icons';
import * as S from './products.style';

export const ProductFilter = () => {
  return (
    <S.Filter>
      <S.FilterTitle>
        <FilterSVG size={'2.5rem'} />
        <span>Bộ lọc</span>
      </S.FilterTitle>
      <S.FilterBox>
        <p>Các ngày lễ</p>
        <S.FilterItem>
          <label htmlFor="teach-day">Ngày Nhà Giáo Việt Nam</label>
          <input type="checkbox" name="filter" id="teach-day" />
          <label htmlFor="teach-day" className="filter-item__custom"></label>
          <CheckSVG />
        </S.FilterItem>
        <S.FilterItem>
          <label htmlFor="woman-day">Ngày phụ nữ Việt Nam</label>
          <input type="checkbox" name="filter" id="woman-day" />
          <label htmlFor="woman-day" className="filter-item__custom"></label>
          <CheckSVG />
        </S.FilterItem>
        <S.FilterItem>
          <label htmlFor="birthday">Ngày sinh nhật</label>
          <input type="checkbox" name="filter" id="birthday" />
          <label htmlFor="birthday" className="filter-item__custom"></label>
          <CheckSVG />
        </S.FilterItem>
      </S.FilterBox>
      <S.FilterBox>
        <p className="filter-box__title">Các kệ hoa</p>
        <S.FilterItem>
          <label htmlFor="birthday-shelf">Kệ sinh nhật</label>
          <input type="checkbox" name="filter" id="birthday-shelf" />
          <label htmlFor="birthday-shelf" className="filter-item__custom"></label>
          <CheckSVG />
        </S.FilterItem>
        <S.FilterItem>
          <label htmlFor="grand-opening-shelf">Kệ khai trương</label>
          <input type="checkbox" name="filter" id="grand-opening-shelf" />
          <label htmlFor="grand-opening-shelf" className="filter-item__custom"></label>
          <CheckSVG />
        </S.FilterItem>
      </S.FilterBox>
      <S.FilterBox>
        <p className="filter-box__title">Chọn mức giá</p>
        <S.FilterPrice>
          <input type="number" name="" placeholder="Từ 1.000đ" />
          <div></div>
          <input type="number" name="" placeholder="Đến 999.999đ" />
        </S.FilterPrice>
      </S.FilterBox>
    </S.Filter>
  );
};
