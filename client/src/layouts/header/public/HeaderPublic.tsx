import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import s from './header-public.module.scss';
import { HeaderPublicLarge } from './ResponsiveLarge';
import { HeaderPublicMedium } from './ResponsiveMedium';
import { HeaderPublicSmall } from './ResponsiveSmall';

const HeaderPublic = () => {
  const [pageWidth, setPageWidth] = useState<number>(() => window.innerWidth);
  const [scrollPage, setScrollPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce<string>(searchValue, 300);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleWindowSize = (e) => {
      setPageWidth(e.target.innerWidth);
    };

    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, [pageWidth]);

  useEffect(() => {
    const handleScrollPage = () => {
      const getCoordinateY = window.scrollY;

      if (getCoordinateY >= 100) setScrollPage(true);
      else setScrollPage(false);
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollPage]);

  if (pageWidth >= 1200)
    return (
      <header className={clsx(s.header, scrollPage && s['header--isScroll'])}>
        <HeaderPublicLarge searchValue={searchValue} handleSearchValue={handleSearchValue} />
      </header>
    );

  if (pageWidth >= 768)
    return (
      <header className={clsx(s.header, scrollPage && s['header--isScroll'])}>
        <HeaderPublicMedium searchValue={searchValue} handleSearchValue={handleSearchValue} />
      </header>
    );

  return (
    <header className={clsx(s.header, scrollPage && s['header--isScroll'])}>
      <HeaderPublicSmall searchValue={searchValue} handleSearchValue={handleSearchValue} />
    </header>
  );
};

export default HeaderPublic;
