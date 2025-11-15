import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-6 py-3 rounded-lg font-semibold transition-colors',
        {
          'bg-primary text-white hover:bg-opacity-90': variant === 'primary',
          'bg-white text-primary border-2 border-primary hover:bg-gray-50': variant === 'secondary',
          'text-primary hover:underline': variant === 'text',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
