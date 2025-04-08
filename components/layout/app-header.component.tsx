import React from 'react';
import Image from 'next/image';
import { categoryList } from './app-header.definitions';
import CategoryGrid from '../organisms/category/category-grid.component';


const AppHeader = () => {
  return (
    <div className="w-full bg-white shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold text-orange-600">Cookery App</div>
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">Arya Gopal</span>
        </div>
      </div>

      <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded mb-6 text-sm">
        🍳 Discover Premium Recipes – Sign Up for Weekly Specials!
      </div>

      <CategoryGrid items={categoryList} />
    </div>
  );
};

export default AppHeader;
