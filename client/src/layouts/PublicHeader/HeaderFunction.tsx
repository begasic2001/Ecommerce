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
        <S.SearchBtn ref={btn}>
          <SearchSVG size={'2.5rem'} />
        </S.SearchBtn>
        {openSearchBox && (
          <>
            <input
              placeholder="Enter flowers..."
              value={searchValue}
              onChange={handleSearchValue}
              ref={input}
            />
            <S.SearchDel hasValue={searchValue} onClick={deleteSearchValue} ref={del}>
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
          <Link to={'/account/login'}>
            <LoginSVG size={'2rem'} fill={'#ccc'} />
            <span>Sign in</span>
          </Link>
          <Link to={'/account/register'}>
            <RegisterSVG size={'2rem'} fill={'#ccc'} />
            <span>Sign up</span>
          </Link>
        </S.UserLogBox>
      </S.User>
    </S.Function>
  );
};

export default HeaderFunction;
