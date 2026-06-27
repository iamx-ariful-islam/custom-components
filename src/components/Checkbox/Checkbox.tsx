import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', ...rest }) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={checkboxId}
        className={`${styles.checkbox} ${className}`}
        {...rest}
      />
      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};
