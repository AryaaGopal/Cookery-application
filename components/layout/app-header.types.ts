import { SvgIconComponent } from '@mui/icons-material';

export interface CategoryItem {
  name: string;
  icon: SvgIconComponent;
  link: string;
}

export type CategoryList = CategoryItem[];
