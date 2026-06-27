import React from 'react';
import { type IconProps } from './types';

const LogoIcon: React.FC<IconProps> = ({ 
  className = '', 
  size = 40, 
  color = 'currentColor',
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel = 'xHospital-ERP Logo',
  role = 'img',
  onClick,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={role}
      onClick={onClick}
      {...props}
    >
      {/* Medical Cross + Tech Integration Symbol */}
      <rect x="2" y="2" width="36" height="36" rx="8" fill="none" stroke={color} strokeWidth="2.5" />
      <path d="M20 10v20M10 20h20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="6" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
      <circle cx="20" cy="20" r="2" fill={color} opacity="0.8" />
    </svg>
  );
};

export default LogoIcon;