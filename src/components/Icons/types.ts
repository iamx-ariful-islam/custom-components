import { type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: number | 'small' | 'medium' | 'large';
  color?: string;
  title?: string;
  className?: string;
}

export interface IconRegistry {
  [key: string]: React.ComponentType<IconProps>;
}

export const iconSizes = {
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
} as const;
export type IconSize = keyof typeof iconSizes;