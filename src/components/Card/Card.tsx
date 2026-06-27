import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional header title */
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', ...rest }) => {
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
};
