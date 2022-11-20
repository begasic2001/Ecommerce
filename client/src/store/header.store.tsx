import { useContext, createContext } from 'react';
import { IStoreHeaderContext, IStoreHeaderProps } from '~/interface/store.type';

const ThemeContext = createContext<IStoreHeaderContext | null>(null);

function HeaderProvider(props: IStoreHeaderProps) {
  const { handleSearch, children } = props;

  const valueContext = {
    handleSearch,
  };

  return <ThemeContext.Provider value={valueContext}>{children}</ThemeContext.Provider>;
}

function useHeaderContext() {
  const context = useContext(ThemeContext);
  if (typeof context === 'undefined')
    throw new Error('useHeaderContext must be used within a HeaderProvider');

  return context;
}

export { useHeaderContext };
export default HeaderProvider;
