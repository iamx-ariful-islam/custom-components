import React from 'react';
import { iconSizes, type IconProps } from './types';

export const InventoryIcon: React.FC<IconProps> = ({
  size = 'medium',
  color = 'currentColor',
  title = 'Inventory',
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
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
};

export default InventoryIcon;