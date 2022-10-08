import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { IHeaderFunctionRef } from '~/interface';
import HeaderFunction from './HeaderFunction';
import HeaderMenu from './HeaderMenu';
import { SHeader } from './public-header.style';

const PublicHeader = () => {
  const headerFunctionRef: IHeaderFunctionRef = {
    search: {
      btn: useRef(null),
      input: useRef(null),
      del: useRef(null),
    },
    user: {
      avatar: useRef(null),
      log: useRef(null),
    },
  };

  const [searchBox, setSearchBox] = useState({
    toggle: false,
    value: '',
  });
  const [openLogBox, setLogBox] = useState(false);
  const [isScrollPage, setScrollPage] = useState(false);

  const debounceSearchValue = useDebounce(searchBox.value, 500);

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
      const { btn, input, del } = headerFunctionRef.search;

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
      const { avatar, log } = headerFunctionRef.user;

      const nodeAvatar = avatar.current;
      const nodeLog = log.current;
      const nodeTarget = e.target;

      if (nodeAvatar && nodeAvatar.contains(nodeTarget)) setLogBox(!openLogBox);
      else if (nodeLog && nodeLog.contains(nodeTarget)) setLogBox(true);
      else if (nodeAvatar && !nodeAvatar.contains(nodeTarget)) setLogBox(false);
    };

    document.addEventListener('click', toggleUserLogBox);
    return () => document.removeEventListener('click', toggleUserLogBox);
  }, [openLogBox, setLogBox]);

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY = window.scrollY;

      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    document.addEventListener('scroll', handleScrollPage);
    return () => document.removeEventListener('scroll', handleScrollPage);
  }, []);

  return (
    <SHeader.Cover isScrollPage={isScrollPage}>
      <SHeader.Content>
        <HeaderMenu />
        <HeaderFunction
          functionRef={headerFunctionRef}
          openSearchBox={searchBox.toggle}
          searchValue={searchBox.value}
          openLogBox={openLogBox}
          handleSearchValue={handleSearchValue}
          deleteSearchValue={deleteSearchValue}
        />
      </SHeader.Content>
    </SHeader.Cover>
  );
};

export default PublicHeader;
