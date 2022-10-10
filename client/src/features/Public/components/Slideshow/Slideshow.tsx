import * as S from './slideshow.style';

const Slideshow = () => {
  return (
    <S.Slideshow>
      <div className="slideshow__overlay" />
      <S.Img>
        <img
          src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/F5461D_LOL.jpeg?v=1648846897"
          alt="slideshow image"
          className="slideshow__img"
        />
      </S.Img>
      <S.Content>
        <h2 className="slideshow__title">
          Send <span className='slideshow__emphasize'>flowers</span> like you mean it.
        </h2>
        <p className="slideshow__desc">
          Where flowers are our inspiration to create lasting memories. Whatever the occasion, our
          flowers will make it special cursus a sit amet mauris.
        </p>
      </S.Content>
    </S.Slideshow>
  );
};

export default Slideshow;
