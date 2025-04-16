import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FaPizzaSlice, FaAppleAlt } from 'react-icons/fa';
import CategoryGrid from './category-grid.component';



describe('CategoryGrid', () => {
  const items = [
    { name: 'Pizza', link: '/pizza', icon: FaPizzaSlice },
    { name: 'Fruits', link: '/fruits', icon: FaAppleAlt },
  ];

  it('renders all category items', () => {
    render(<CategoryGrid items={items} />);

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Fruits')).toBeInTheDocument();

    expect(screen.getByText('Pizza').closest('a')).toHaveAttribute('href', '/pizza');
    expect(screen.getByText('Fruits').closest('a')).toHaveAttribute('href', '/fruits');

  });

 
});
