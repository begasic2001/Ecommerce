import { Link } from 'react-router-dom';
import { DelSVG, LoginSVG, RegisterSVG, SearchSVG, UserSVG } from '~/components/Icons';
import { SHeader, SSearch, SUser } from './public-header.style';

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
    <SHeader.Function>
      <SSearch.Cover haveSearchValue={searchValue} isShowSearch={openSearchBox}>
        <SSearch.Btn ref={btn}>
          <SearchSVG />
        </SSearch.Btn>
        {openSearchBox && (
          <>
            <SSearch.Input
              type="text"
              placeholder="Enter flowers..."
              value={searchValue}
              onChange={handleSearchValue}
              ref={input}
            />
            <SSearch.Del hasValue={searchValue} onClick={deleteSearchValue} ref={del}>
              <DelSVG />
            </SSearch.Del>
          </>
        )}
      </SSearch.Cover>
      <SUser.Cover>
        <div ref={avatar}>
          <UserSVG size={'3rem'} />
        </div>
        <SUser.LogBox isOpenUserLog={openLogBox} ref={log}>
          <Link to={'/account/login'} className="user_log">
            <LoginSVG size={'2rem'} fill={'#ccc'} />
            <span>Sign in</span>
          </Link>
          <Link to={'/account/register'} className="user_log">
            <RegisterSVG size={'2rem'} fill={'#ccc'} />
            <span>Sign up</span>
          </Link>
        </SUser.LogBox>
      </SUser.Cover>
    </SHeader.Function>
  );
};

export default HeaderFunction;
