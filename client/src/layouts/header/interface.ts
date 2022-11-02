import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IMedia {
  desktopMedia: boolean;
  tabletMedia: boolean;
  mobileMedia: boolean;
}

export interface IMenuProps {
  media: IMedia;
}

export interface IFunctionProps {
  media: IMedia;
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IMenuLinkPath {
  id: string;
  name: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
