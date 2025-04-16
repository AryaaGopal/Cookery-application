import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeTile from './recepie-tiles.';



describe('RecipeTile', () => {
  const props = {
    title: 'Spaghetti Carbonara',
    imageUrl: '/carbonara.jpg',
    cuisine: 'Italian',
    mealType: 'Dinner',
  };

  it('renders title, image, and meta info correctly', () => {
    render(<RecipeTile {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.imageUrl);
    expect(screen.getByRole('img')).toHaveAttribute('alt', props.title);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(`${props.cuisine} • ${props.mealType}`)).toBeInTheDocument();
  });
});
