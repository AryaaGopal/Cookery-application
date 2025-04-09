import RecipeTile from '@/components/molecules/tiles/recepie-tiles.';
import React from 'react';
import { RecipeGridProps } from './recepie-grid.types';



const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeTile key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
