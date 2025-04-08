
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { CategoryList } from './app-header.types';


export const categoryList: CategoryList = [
    {
      name: 'Italian',
      icon: LunchDiningOutlinedIcon,
      link: '/dashboard/recipes/italian',
    },
    {
      name: 'North Indian',
      icon: RestaurantMenuOutlinedIcon,
      link: '/dashboard/recipes/north-indian',
    },
    {
      name: 'Trending',
      icon: TrendingUpOutlinedIcon,
      link: '/dashboard/recipes/trending',
    },
  ];
  