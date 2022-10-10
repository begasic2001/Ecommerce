import { Link } from 'react-router-dom';
import { DelSVG, LoginSVG, RegisterSVG, SearchSVG, UserSVG } from '~/components/Icons';
import * as S from './public-header.style';

const HeaderFunction = (props) => {
  const {
    functionRef,
    openSearchBox,
    searchValue,
    openLogBox,
    handleSearchValue,
    deleteSearchValue,
  } = props;

  const { btn, input, del } = functionRef.search;
  const { avatar, log } = functionRef.user;

  return (
    <S.Function>
      <S.Search isShowSearch={openSearchBox}>
        <button className="search__btn" ref={btn}>
          <SearchSVG size={'2.5rem'} />
        </button>
        {openSearchBox && (
          <>
            <input
              placeholder="Enter flowers..."
              value={searchValue}
              onChange={handleSearchValue}
              ref={input}
              className="search__input"
            />
            <S.SearchDel onClick={deleteSearchValue} ref={del} hasValue={searchValue}>
              <DelSVG size={'2.5rem'} />
            </S.SearchDel>
          </>
        )}
      </S.Search>

      <S.User>
        <div ref={avatar}>
          <UserSVG size={'3rem'} />
        </div>
        <S.UserLogBox isOpenUserLog={openLogBox} ref={log}>
          <Link to={'/account/login'} className="log-box__link">
            <LoginSVG size={'2rem'} fill={'#ccc'} />
            <span className="log-box__txt">Sign in</span>
          </Link>
          <Link to={'/account/register'} className="log-box__link">
            <RegisterSVG size={'2rem'} fill={'#ccc'} />
            <span className="log-box__txt">Sign up</span>
          </Link>
        </S.UserLogBox>
      </S.User>
    </S.Function>
  );
};

export default HeaderFunction;
