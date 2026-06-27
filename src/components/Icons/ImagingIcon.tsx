import React from 'react';
import { iconSizes, type IconProps } from './types';

export const ImagingIcon: React.FC<IconProps> = ({
  size = 'medium',
  color = 'currentColor',
  title = 'Imaging',
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
      <rect x="2" y="2" width="20" height="20" rx="2.18" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
};

export default ImagingIcon;