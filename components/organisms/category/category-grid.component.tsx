import React from 'react';
import Link from 'next/link';
import { Props } from './category-grid.types';


const CategoryGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Link
            href={item.link}
            key={idx}
            className="bg-orange-100 hover:bg-orange-200 transition-colors p-4 rounded shadow text-center text-sm font-medium flex justify-center items-center gap-2"
          >
            <Icon className="text-orange-600 w-6 h-6" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryGrid;
