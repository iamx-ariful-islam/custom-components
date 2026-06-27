import React from 'react';
import { iconSizes, type IconProps } from './types';

export const VitalsIcon: React.FC<IconProps> = ({
  size = 'medium',
  color = 'currentColor',
  title = 'Vitals',
  className = '',
  ...props
}) => {
  const pixelSize = typeof size === 'string' ? iconSizes[size] || 20 : size;

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
};

export default VitalsIcon;