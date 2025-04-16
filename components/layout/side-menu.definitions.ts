import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import { MenuList } from './side-menu.types';

export const menuList: MenuList = [
  {
    name: 'DASHBOARD',
    icon: MdOutlineDashboard,
    link: '/dashboard',
  },
  {
    name: 'ANALYTICS',
    icon: TbReportAnalytics,
    link: '/analytics',
  },
  {
    name: 'SETTINGS',
    icon: IoSettingsOutline,
    link: '/settings',
  },
];
