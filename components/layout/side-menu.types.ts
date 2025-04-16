import { IconType } from 'react-icons/lib';

/**
 * Represents the type of elements of the menu list array.
 */
export interface MenuListItem {
  /** The name of the menu item. */
  name: string;
  /** The icon component for the menu item */
  icon: IconType;
  /** The permissions required for the menu item. */
  /** The link associated with the menu item */
  link: string;
  /** Indicates whether a warning icon is present for the menu item. */
}

/**
 * Represents the properties of the side menu.
 */
export interface SideMenuProps {
  /** The child components of the side menu. */
  children?: React.ReactNode;
  /** Expand or Collapse of the side menu. */
  isSideMenuOpen: boolean;
}

/**
 * Represents an array of menu items.
 */
export type MenuList = Array<MenuListItem>;

/**
 * Represents the properties of the warning icon.
 */
