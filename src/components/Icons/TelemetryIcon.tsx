import React from 'react';
import { iconSizes, type IconProps } from './types';

export const TelemetryIcon: React.FC<IconProps> = ({
  size = 'medium',
  color = 'currentColor',
  title = 'Telemetry',
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
      <line x1="8" y1="16" x2="8" y2="8" />
      <line x1="16" y1="16" x2="16" y2="12" />
    </svg>
  );
};

export default TelemetryIcon;