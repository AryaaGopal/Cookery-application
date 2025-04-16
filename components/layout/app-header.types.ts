import { IconType } from 'react-icons/lib';

export interface CategoryItem {
  name: string;
  icon: IconType;
  link: string;
}

export type CategoryList = CategoryItem[];
