import { FilterSVG, CheckSVG } from '~/components/Icons';
import { ProductItem } from '~/components/ProductItem';
import * as S from './product-list.style';

const ProductList = () => {
  return (
    <S.Products>
      <S.Content>
        <S.Filter>
          <S.FilterTitle>
            <FilterSVG size={'2.5rem'} />
            <span className="filter__title">Bộ lọc</span>
          </S.FilterTitle>
          <S.FilterBox>
            <p className="filter-box__title">Các ngày lễ</p>
            <S.FilterItem>
              <label htmlFor="teach-day">Ngày Nhà Giáo Việt Nam</label>
              <input type="checkbox" name="filter" id="teach-day" className="filter-item__input" />
              <label htmlFor="teach-day" className="filter-item__input-custom"></label>
              <CheckSVG />
            </S.FilterItem>
            <S.FilterItem>
              <label htmlFor="woman-day">Ngày phụ nữ Việt Nam</label>
              <input type="checkbox" name="filter" id="woman-day" className="filter-item__input" />
              <label htmlFor="woman-day" className="filter-item__input-custom"></label>
              <CheckSVG />
            </S.FilterItem>
            <S.FilterItem>
              <label htmlFor="birthday">Ngày sinh nhật</label>
              <input type="checkbox" name="filter" id="birthday" className="filter-item__input" />
              <label htmlFor="birthday" className="filter-item__input-custom"></label>
              <CheckSVG />
            </S.FilterItem>
          </S.FilterBox>
          <S.FilterBox>
            <p className="filter-box__title">Các kệ hoa</p>
            <S.FilterItem>
              <label htmlFor="birthday-shelf">Kệ sinh nhật</label>
              <input
                type="checkbox"
                name="filter"
                id="birthday-shelf"
                className="filter-item__input"
              />
              <label htmlFor="birthday-shelf" className="filter-item__input-custom"></label>
              <CheckSVG />
            </S.FilterItem>
            <S.FilterItem>
              <label htmlFor="grand-opening-shelf">Kệ khai trương</label>
              <input
                type="checkbox"
                name="filter"
                id="grand-opening-shelf"
                className="filter-item__input"
              />
              <label htmlFor="grand-opening-shelf" className="filter-item__input-custom"></label>
              <CheckSVG />
            </S.FilterItem>
          </S.FilterBox>
          <S.FilterBox>
            <p className="filter-box__title">Chọn mức giá</p>
            <S.FilterPrice>
              <input
                type="number"
                name=""
                placeholder="Từ 1.000đ"
                className="filter-price__input"
              />
              <div className="filter-price__divided"></div>
              <input
                type="number"
                name=""
                placeholder="Đến 999.999đ"
                className="filter-price__input"
              />
            </S.FilterPrice>
          </S.FilterBox>
        </S.Filter>
        <S.List>
          <h3 className="list__title">Kết quả tìm kiếm</h3>
          <S.ListProduct>
            {Array(10)
              .fill(0)
              .map(() => (
                <ProductItem />
              ))}
          </S.ListProduct>
        </S.List>
      </S.Content>
    </S.Products>
  );
};

export default ProductList;
