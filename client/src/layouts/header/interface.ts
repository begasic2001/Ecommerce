import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IMenuProps {
  media: {
    upXlMedia: boolean;
    betweenMdXlMedia: boolean;
    downMdMedia: boolean;
  };
}

export interface IFunctionProps {
  media: {
    upXlMedia: boolean;
    betweenMdXlMedia: boolean;
    downMdMedia: boolean;
  };
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IMenuLinkPath {
  id: string;
  name: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
