import React from 'react';
import { ReactNode } from 'react';

interface ISearch {
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showSearch: boolean;
  searchRef: ISearchRef;
}
interface IUser {
  anchorEl: HTMLElement | null;
  handleMenuClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  openMenu: boolean;
}

export interface ISearchRef {
  btn: React.MutableRefObject<null | HTMLButtonElement>;
  input: React.MutableRefObject<null | HTMLDivElement>;
  inputBtn: React.MutableRefObject<null | HTMLDivElement>;
}

export interface ISearchProps {
  searchProps: ISearch;
}

export interface IUserAccountItem {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface IUserProps {
  userProps: IUser;
}
