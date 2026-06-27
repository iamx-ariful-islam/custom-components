import React from 'react';
import { iconSizes, type IconProps } from './types';

export const MedicalIcon: React.FC<IconProps> = ({
  size = 'medium',
  color = 'currentColor',
  title = 'Medical Records',
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
};

export default MedicalIcon;