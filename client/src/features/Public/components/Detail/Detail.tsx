import * as S from './detail.style';

const Detail = () => {
  return (
    <S.Detail>
      <S.Content>
        <S.Product>
          <S.Gallery>
            <S.GalleryList>
              <S.GalleryListItem>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                  alt="image item"
                />
              </S.GalleryListItem>
              <S.GalleryListItem>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                  alt="image item"
                />
              </S.GalleryListItem>
            </S.GalleryList>
            <S.GallerySpecific>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                alt="image item is show"
              />
            </S.GallerySpecific>
          </S.Gallery>
          <S.Summary></S.Summary>
        </S.Product>
        <S.Description>
          <h3>Hoa hướng dương</h3>
          <p>200$</p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
            augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
          </p>
        </S.Description>
      </S.Content>
    </S.Detail>
  );
};

export default Detail;
