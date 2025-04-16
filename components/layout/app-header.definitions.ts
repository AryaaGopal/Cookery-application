
import { GiHamburger } from "react-icons/gi";
import { GiIndiaGate } from "react-icons/gi";
import { HiTrendingUp } from "react-icons/hi";
import { TbBowlChopsticksFilled } from "react-icons/tb";
import { GiElephant } from "react-icons/gi";
import { CategoryList } from './app-header.types';


export const categoryList: CategoryList = [
    {
      name: 'Italian',
      icon: GiHamburger,
      link: '/dashboard/recipes/italian',

    },
    {
      name: 'Chinese',
      icon: TbBowlChopsticksFilled,
      link: '/dashboard/recipes/chinese',
    },
    {
      name: 'North Indian',
      icon: GiIndiaGate,
      link: '/dashboard/recipes/north-indian',
    },
    {
      name: 'South Indian',
      icon: GiElephant,
      link: '/dashboard/recipes/south-indian',
    },
    {
      name: 'Trending',
      icon: HiTrendingUp,
      link: '/dashboard/recipes/trending',
    }
  ];
  