import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';


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