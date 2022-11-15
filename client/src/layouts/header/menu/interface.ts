import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IMedia {
  upXl: boolean;
  upMd: boolean;
}

interface IMenuLink {
  id: string;
  name: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}

interface IMenu {
  openDrawer: boolean;
  toggleDrawer: (toggle: boolean) => void;
  media: IMedia;
}

export interface IMenuProps {
  menuProps: IMenu;
}

export interface IMenuLinkProps {
  item: IMenuLink;
}
