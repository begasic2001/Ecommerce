import { useState, useEffect } from 'react';
import { HeaderPublicLarge } from './ResponsiveLarge';
import { HeaderPublicMedium } from './ResponsiveMedium';
import { HeaderPublicSmall } from './ResponsiveSmall';
import { useDebounce } from '~/hooks';

const HeaderPublic = () => {
  const [pageWidth, setPageWidth] = useState(() => window.innerWidth);
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedResponsive = useDebounce<number>(pageWidth, 500);
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
  }, [pageWidth, debouncedResponsive]);

  if (debouncedResponsive >= 1200)
    return <HeaderPublicLarge searchValue={searchValue} handleSearchValue={handleSearchValue} />;
  if (debouncedResponsive >= 768)
    return <HeaderPublicMedium searchValue={searchValue} handleSearchValue={handleSearchValue} />;
  return <HeaderPublicSmall searchValue={searchValue} handleSearchValue={handleSearchValue} />;
};

export default HeaderPublic;
