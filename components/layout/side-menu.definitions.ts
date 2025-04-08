import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { MenuList } from './side-menu.types';

export const menuList: MenuList = [
  {
    name: 'DASHBOARD',
    icon: DashboardOutlinedIcon,
    link: '/dashboard',
  },
  {
    name: 'ANALYTICS',
    icon: ArticleOutlinedIcon,
    link: '/analytics',
  },
  {
    name: 'SETTINGS',
    icon: SettingsOutlinedIcon,
    link: '/settings',
  },
];
