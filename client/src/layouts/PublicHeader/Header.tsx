import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { HeaderFunction } from './HeaderFunction';
import { HeaderMenu } from './HeaderMenu';
import { ISearchBox, ISearchListRef, IUserListRef } from './interface';
import * as S from './public-header.style';

const Header = () => {
  const [searchBox, setSearchBox] = useState<ISearchBox>({
    toggle: false,
    value: '',
  });
  const [toggleLogBox, setLogBox] = useState<boolean>(false);
  const [isScrollPage, setScrollPage] = useState<boolean>(false);

  const debounceSearchValue: string = useDebounce(searchBox.value, 500);
  const searchListRef: ISearchListRef = {
    btn: useRef(null),
    input: useRef(null),
    del: useRef(null),
  };
  const userListRef: IUserListRef = {
    avatar: useRef(null),
    log: useRef(null),
  };

  const handleSearchValue = (e) => {
    const searchValue = e.target.value;
    setSearchBox({
      ...searchBox,
      value: searchValue,
    });
  };

  const deleteSearchValue = () => {
    setSearchBox({
      ...searchBox,
      value: '',
    });
  };

  useEffect(() => {
    const toggleInput = (e) => {
      const { btn, input, del } = searchListRef;
      const nodeBtn = btn.current;
      const nodeInput = input.current;
      const nodeDel = del.current;
      const nodeTarget = e.target;

      if (nodeBtn && nodeBtn.contains(nodeTarget))
        setSearchBox({
          ...searchBox,
          toggle: !searchBox.toggle,
        });
      else if (nodeDel && nodeDel.contains(nodeTarget))
        setSearchBox({
          ...searchBox,
          toggle: true,
        });
      else if (nodeInput && !nodeInput.contains(nodeTarget))
        setSearchBox({
          ...searchBox,
          toggle: false,
        });
    };

    document.addEventListener('click', toggleInput);
    return () => document.removeEventListener('click', toggleInput);
  }, [searchBox.toggle, setSearchBox]);

  useEffect(() => {
    const toggleUserLogBox = (e) => {
      const { avatar, log } = userListRef;
      const nodeAvatar = avatar.current;
      const nodeLog = log.current;
      const nodeTarget = e.target;

      if (nodeAvatar && nodeAvatar.contains(nodeTarget)) setLogBox(!toggleLogBox);
      else if (nodeLog && nodeLog.contains(nodeTarget)) setLogBox(true);
      else if (nodeAvatar && !nodeAvatar.contains(nodeTarget)) setLogBox(false);
    };

    document.addEventListener('click', toggleUserLogBox);
    return () => document.removeEventListener('click', toggleUserLogBox);
  }, [toggleLogBox, setLogBox]);

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY = window.scrollY;
      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    document.addEventListener('scroll', handleScrollPage);
    return () => document.removeEventListener('scroll', handleScrollPage);
  }, []);

  const functionProps = {
    searchListRef: searchListRef,
    userListRef: userListRef,
    toggleSearchBox: searchBox.toggle,
    searchValue: searchBox.value,
    toggleLogBox: toggleLogBox,
    handleSearchValue: handleSearchValue,
    deleteSearchValue: deleteSearchValue,
  };

  return (
    <S.Header isScrollPage={isScrollPage}>
      <S.Content>
        <HeaderMenu />
        <HeaderFunction functionProps={functionProps} />
      </S.Content>
    </S.Header>
  );
};

export default Header;
