import React, { ReactNode } from 'react';

interface ISearch {
  showSearch: boolean;
  searchRef: ISearchRef;
}
interface IUser {
  anchorEl: HTMLElement | null;
  handleMenuClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  openMenu: boolean;
}

interface ISearchParams {
  name_like: string;
  _page: number;
  _limit: number;
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
