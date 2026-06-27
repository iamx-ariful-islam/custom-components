import React from 'react';
import styles from './RadioButton.module.css';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ label, id, className = '', ...rest }) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        id={radioId}
        className={`${styles.radio} ${className}`}
        {...rest}
      />
      {label && (
        <label htmlFor={radioId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};
