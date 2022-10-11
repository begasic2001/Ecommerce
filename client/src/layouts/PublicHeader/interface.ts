import React from "react";

export interface ISearchBox {
  toggle: boolean;
  value: string;
}

export interface ISearchListRef {
  btn: any;
  input: any;
  del: any;
}

export interface IUserListRef {
  avatar: any;
  log: any;
}

interface IFunction {
  searchListRef: {
    btn: any;
    input: any;
    del: any;
  };
  userListRef: {
    avatar: any;
    log: any;
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
