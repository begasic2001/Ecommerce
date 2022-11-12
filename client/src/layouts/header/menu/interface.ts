import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IMedia {
  upXl: boolean;
  upMd: boolean;
}

//-----------------------------------------------

export interface IMediaProps {
  media: IMedia;
}

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

export interface IDrawerProps {
  openDrawer: boolean;
  toggleDrawer: (toggle: boolean) => void;
}
