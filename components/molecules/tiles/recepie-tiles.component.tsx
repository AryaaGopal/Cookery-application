import React from 'react';
import { RecipeTileProps } from './recepie-tiles.types';



const RecipeTile: React.FC<RecipeTileProps> = ({ title, imageUrl, cuisine, mealType }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{cuisine} • {mealType}</p>
      </div>
    </div>
  );
};

export default RecipeTile;
