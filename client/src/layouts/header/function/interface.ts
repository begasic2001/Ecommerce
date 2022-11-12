import React from 'react';
import { ReactNode } from 'react';

interface ISearchInput {
  showSearch: boolean;
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchBtnRef: React.MutableRefObject<HTMLButtonElement | null>;
  searchInputBtnRef: React.MutableRefObject<HTMLDivElement | null>;
  searchInputRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface IUserFunction {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

//---------------------------------------------

export interface IFunctionProps {
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFunctionAccountItem {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface ISearchInputProps {
  searchInputProps: ISearchInput;
}

export interface IUserFunctionProps {
  userFunctionProps: IUserFunction;
}
