import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecipeGridProps } from './recepie-grid.types';
import RecipeGrid from './recepie-grid.component';


const mockRecipes: RecipeGridProps['recipes'] = [
  { id: '1', title: 'Pasta', imageUrl: '/pasta.jpg', cuisine: 'Italian', mealType: 'Dinner' },
  { id: '2', title: 'Sushi', imageUrl: '/sushi.jpg', cuisine: 'Japanese', mealType: 'Lunch' },
];

describe('RecipeGrid', () => {
  it('renders all recipe tiles', () => {
    render(<RecipeGrid recipes={mockRecipes} />);

    expect(screen.getByText('Pasta')).toBeInTheDocument();
    expect(screen.getByText('Sushi')).toBeInTheDocument();
  });

  
});
