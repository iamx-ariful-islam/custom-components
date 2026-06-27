import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { TooltipPosition } from '../Tooltip';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonAnimation = boolean | 'vertical' | 'fade';
export type IconPosition = 'top' | 'bottom';
export type ButtonShape = 'square' | 'circle';

export interface ButtonContentProps {
  children: ReactNode;
  visible?: boolean;
  hidden?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  animated?: ButtonAnimation;
  color?: string;
  textColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  iconOnly?: boolean;
  shape?: ButtonShape;
  tooltip?: ReactNode;
  tooltipTitle?: string;
  tooltipDescription?: string;
  tooltipPosition?: TooltipPosition;
  tooltipDelay?: number;
  style?: CSSProperties;
}