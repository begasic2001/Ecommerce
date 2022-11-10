import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';

// Header component
interface IMedia {
  upXl: boolean;
  upMd: boolean;
}

export interface IMediaProps {
  media: IMedia;
}

// ---------------------------------------------------------
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
  media: IMedia;
}

export interface IFunctionAccountItem {
  title: string;
  path: string;
  icon: ReactNode;
}
