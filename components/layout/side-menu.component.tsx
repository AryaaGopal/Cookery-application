'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { MenuListItem, SideMenuProps } from './side-menu.types';
import { menuList } from './side-menu.definitions';
import TabPanel from '../atoms/tab-panel/tab-panel.component';

function SideMenu({ children, isSideMenuOpen }: SideMenuProps) {
  const [value, setValue] = useState<string>('Profile');
  const router = useRouter();


  const handleChange = (newValue: string) => {
    const menuItem: MenuListItem | undefined = menuList.find(({ name }) => name === newValue);
    if (menuItem) {
      setValue(newValue);
      router.push(menuItem.link);
    }
  };

  return (
    <div className="flex h-full" data-testid="side-menu">
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
        <div className="p-4 flex justify-center mb-4"> 
        <Image
              src="/cookery.jpg"
              alt="Cookery"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <div role="tablist" aria-label="menu" className="flex flex-col gap-1">
            {menuList.map(({ name, icon: IconComponent }, idx) => {
              const isSelected = value === name;
              return (
                <button
                  key={idx}
                  onClick={() => handleChange(name)}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
                    ${isSelected ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                  role="tab"
                  aria-selected={isSelected}
                >
                  <IconComponent className="w-5 h-5 mr-3 text-current" />
                  {!isSideMenuOpen && (
                    <span className="flex items-center gap-1">
                      {name}
                
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4 text-center text-xs text-gray-400">
          <span className="block md:hidden">V 0.0.0</span>
          <span className="hidden md:block">Version 0.0.0</span>
        </div>
      </div>

      <div className="flex-1 p-6">
      <TabPanel id={value} className="">
  {children}
</TabPanel>
      </div>
    </div>
  );
}

export default SideMenu;
