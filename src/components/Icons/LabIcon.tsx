import React from 'react';
import { iconSizes, type IconProps } from './types';

export const LabIcon: React.FC<IconProps> = ({
  size = 'medium',
  color = 'currentColor',
  title = 'Laboratory',
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
      <path d="M6 2L18 2" />
      <path d="M12 2L12 6" />
      <path d="M6 6L18 6" />
      <path d="M6 10L18 10" />
      <path d="M12 10L12 14" />
      <path d="M6 14L18 14" />
    </svg>
  );
};

export default LabIcon;