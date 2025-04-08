'use client';

import React, { JSX } from 'react';

type TailwindAlertProps = {
  title?: string;
  content: React.ReactNode;
  severity?: 'success' | 'error' | 'info' | 'warning';
  variant?: 'filled' | 'outlined' | 'standard';
  className?: string;
  setAlertOpen: (value: boolean) => void;
};

const severityStyles = {
  success: 'bg-green-100 border-green-400 text-green-700',
  error: 'bg-red-100 border-red-400 text-red-700',
  info: 'bg-blue-100 border-blue-400 text-blue-700',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
};

const variantStyles = {
  filled: '',
  outlined: 'border-2',
  standard: 'bg-transparent border-none',
};

export default function Alert({
  title,
  content,
  severity = 'error',
  variant = 'standard',
  className = '',
  setAlertOpen,
}: TailwindAlertProps): JSX.Element {
  return (
    <div
      className={`
        relative p-4 rounded-md mb-4
        ${severityStyles[severity]} 
        ${variantStyles[variant]} 
        ${className}
      `}
    >
      <button
        className="absolute top-2 right-2 text-xl font-bold"
        onClick={() => setAlertOpen(false)}
        aria-label="Close Alert"
      >
        ×
      </button>
      {title && <h4 className="font-semibold text-lg mb-1">{title}</h4>}
      <div>{content}</div>
    </div>
  );
}
