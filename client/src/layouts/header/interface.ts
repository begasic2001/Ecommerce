import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';

interface IMedia {
  upMdMedia: boolean;
  upXlMedia: boolean;
  downMdMedia: boolean;
}

export interface IMenuProps {
  media: IMedia;
}

export interface IMenuLinkPath {
  id: string;
  name: string;
  path: string;
}

export interface IMenuLinkPathDrawer extends IMenuLinkPath {
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}

export interface IMenuLinkPathProps {
  item: IMenuLinkPathDrawer;
}

export interface IFunctionProps {
  media: IMedia;
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFunctionAccountItem {
  path: string;
  icon: ReactNode;
  title: string;
}

export interface ISHeader {
  header: string;
  headerScroll: string;
  container: string;
  row: string;
}

export interface ISMenuHeader {
  column: string;
  homeLink: string;
  nav: string;
  navItem: string;
  drawer: string;
  drawerLogo: string;
  drawerItem: string;
}

export interface ISFunction {
  column: string;
  search: string;
  user: string;
  userMenu: string;
  userLink: string;
}
