import React from 'react';
import { ReactNode } from 'react';

export interface IFunctionProps {
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFunctionAccountItem {
  title: string;
  path: string;
  icon: ReactNode;
}
