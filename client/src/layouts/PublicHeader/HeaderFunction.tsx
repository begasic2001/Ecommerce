import { Link } from 'react-router-dom';
import { DelSVG, LoginSVG, RegisterSVG, SearchSVG, UserSVG } from '~/components/Icons';
import { IFunctionProps } from './interface';
import * as S from './public-header.style';

export const HeaderFunction = ({ functionProps }: IFunctionProps) => {
  if (!functionProps) return null;

  const {
    searchListRef,
    userListRef,
    toggleSearchBox,
    searchValue,
    toggleLogBox,
    handleSearchValue,
    deleteSearchValue,
  } = functionProps;

  return (
    <S.Function>
      <S.Search isShowSearch={toggleSearchBox}>
        <button className="search__btn" ref={searchListRef.btn}>
          <SearchSVG size={'2.5rem'} />
        </button>
        {toggleSearchBox && (
          <>
            <input
              placeholder="Enter flowers..."
              value={searchValue}
              onChange={handleSearchValue}
              ref={searchListRef.input}
            />
            <S.SearchDel onClick={deleteSearchValue} hasValue={searchValue} ref={searchListRef.del}>
              <DelSVG size={'2.5rem'} />
            </S.SearchDel>
          </>
        )}
      </S.Search>

      <S.User>
        <div ref={userListRef.avatar}>
          <UserSVG size={'3rem'} />
        </div>
        <S.UserLogBox isOpenUserLog={toggleLogBox} ref={userListRef.log}>
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
