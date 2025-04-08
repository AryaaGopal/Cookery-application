import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  error?: boolean;
  className?: string;
}

const Field: React.FC<FieldProps> = ({
  helperText,
  error = false,
  className = '',
  ...inputProps 
}) => {

  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        {...inputProps}
        id={inputProps.name}
        className={clsx(
          'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          inputProps.disabled && 'bg-gray-100 cursor-not-allowed',
          error && 'border-red-500',
          className
        )}
      />
      {helperText && (
        <p className={clsx('text-xs', error ? 'text-red-500' : 'text-gray-500')}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Field;
