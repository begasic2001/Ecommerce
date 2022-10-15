import { Link } from 'react-router-dom';
import { DelSVG, LoginSVG, RegisterSVG, SearchSVG, UserSVG } from '~/components/icons';
import { IFunctionProps } from './interface';
import * as S from './public-header.style';

export const HeaderFunction = ({ functionProps }: IFunctionProps) => {
  if (!functionProps) return null;

  const { ref } = functionProps;

  return (
    <S.Function>
      <S.Search isShowSearch={functionProps.toggleSearchBox}>
        <button ref={ref.searchBtnRef}>
          <SearchSVG size={'2.5rem'} />
        </button>
        {functionProps.toggleSearchBox && (
          <>
            <input
              placeholder="Enter flowers..."
              value={functionProps.searchValue}
              onChange={functionProps.handleSearchValue}
              ref={ref.searchInputRef}
            />
            <S.SearchDel
              onClick={functionProps.deleteSearchValue}
              hasValue={functionProps.searchValue}
              ref={ref.searchDelRef}
            >
              <DelSVG size={'2.5rem'} />
            </S.SearchDel>
          </>
        )}
      </S.Search>

      <S.User>
        <div ref={ref.userAvaRef}>
          <UserSVG size={'3rem'} />
        </div>
        <S.UserLogBox isOpenUserLog={functionProps.toggleLogBox} ref={ref.userLogBoxRef}>
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
