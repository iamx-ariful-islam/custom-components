import React from 'react';
import { type IconProps } from './types';

const MoonIcon: React.FC<IconProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  role = 'img',
  onClick,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={role}
      onClick={onClick}
      {...props}
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
};

export default MoonIcon;