import React from 'react';
import clsx from 'clsx';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  raised?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  raised = false,
}) => {
  return (
    <div
      data-testid="tailwind-card"
      className={clsx(
        'bg-white p-6 sm:p-8 shadow-sm transition-all duration-300',
        raised && 'shadow-md hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
