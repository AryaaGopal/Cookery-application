"use client"
import RecipeGrid from '@/components/organisms/grid/recepie-grid.component';

const Recipes = [
  {
    id: '1',
    title: 'Creamy Garlic Pasta',
    imageUrl: '/creamy.jpg',
    cuisine: 'Italian',
    mealType: 'Dinner',
  },
  {
    id: '2',
    title: 'Creamy mashroom Pasta',
    imageUrl: '/pasta.jpg',
    cuisine: 'Italian',
    mealType: 'Dinner',
  },
  {
    id: '3',
    title: 'Ricotta-Polpette',
    imageUrl: '/Ricotta-Polpette.jpg',
    cuisine: 'Italian',
    mealType: 'Dinner',
  },
  {
    id: '4',
    title: 'Spicy Chickpea Curry',
    imageUrl: '/chickpea.jpg',
    cuisine: 'Indian',
    mealType: 'Lunch',
  },
];

const CategoryRecipesPage = () => {
 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize"> Recipes</h1>
      <RecipeGrid recipes={Recipes} />
    </div>
  );
};

export default CategoryRecipesPage;
