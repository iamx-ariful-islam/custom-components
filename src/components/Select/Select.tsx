import React from 'react';
import styles from './Select.module.css';

export interface SelectOption<T = string> {
  value: T;
  label: string;
}

export interface SelectProps<T = string> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption<T>[];
  label?: string;
}

export const Select = <T extends string>({ options, label, id, className = '', ...rest }: SelectProps<T>) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      )}
      <select id={selectId} className={`${styles.select} ${className}`} {...rest}>
        {options.map((opt) => (
          <option key={String(opt.value)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
