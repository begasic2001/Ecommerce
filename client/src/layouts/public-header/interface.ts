import React from 'react';

export interface ISearchBox {
  toggle: boolean;
  value: string;
}

interface IFunction {
  ref: {
    searchBtnRef: any;
    searchInputRef: any;
    searchDelRef: any;
    userAvaRef: any;
    userLogBoxRef: any;
  };
  toggleSearchBox: boolean;
  searchValue: string;
  toggleLogBox: boolean;
  handleSearchValue: React.ChangeEventHandler<HTMLInputElement>;
  deleteSearchValue: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IFunctionProps {
  functionProps?: IFunction;
}
