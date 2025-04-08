export interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    cuisine: string;
    mealType: string;
  }
  
  export interface RecipeGridProps {
    recipes: Recipe[];
  }