import React from 'react';
import styles from './TextArea.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Optional label for accessibility */
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, id, className = '', ...rest }) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
        </label>
      )}
      <textarea id={textareaId} className={`${styles.textarea} ${className}`} {...rest} />
    </div>
  );
};
