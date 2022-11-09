import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';

// Menu component
export interface IMenuLink {
  id: string;
  name: string;
  path: string;
}

export interface IMenuLinkDrawer extends IMenuLink {
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}

export interface IMenuLinkProps {
  item: IMenuLinkDrawer;
}

// ---------------------------------------------------------
// Function component
export interface IFunctionProps {
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFunctionAccountItem {
  title: string;
  path: string;
  icon: ReactNode;
}

// ---------------------------------------------------------
// Styles CSS
export interface ISHeader {
  header: string;
  headerScrolled: string;
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
