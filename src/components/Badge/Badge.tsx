import React from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'neutral', children, className = '', ...rest }) => {
  const variantClass = styles[variant] || '';
  return (
    <span className={`${styles.badge} ${variantClass} ${className}`} {...rest}>
      {children}
    </span>
  );
};
