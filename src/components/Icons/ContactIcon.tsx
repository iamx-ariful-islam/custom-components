import React from 'react';
import { type IconProps } from './types';

const ContactIcon: React.FC<IconProps> = ({ 
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
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
};

export default ContactIcon;