import * as S from './special.style';

const Special = () => {
  return (
    <S.Special>
      <S.Content>
        <S.Img>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
            alt="special scene"
            className="special__img"
          />
        </S.Img>
        <S.Announce>
          <h3 className="announce__title">
            Suprise Your <span className="announce__emphasize">Special Day</span>! Let us arrange a
            smile.
          </h3>
          <p className="announce__desc">
            Where flowers are our inspiration to create lasting memories. Whatever the occasion...
          </p>
          <S.AnnounceList>
            <li>Hand picked just for you.</li>
            <li>Unique flower arrangements</li>
            <li>Best way to say you care.</li>
          </S.AnnounceList>
        </S.Announce>
      </S.Content>
    </S.Special>
  );
};

export default Special;
