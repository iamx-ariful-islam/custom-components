import React from 'react';
import { type IconProps } from './types';

const CheckmarkIcon: React.FC<IconProps> = ({ 
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
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
};

export default CheckmarkIcon;