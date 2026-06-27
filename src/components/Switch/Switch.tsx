import React, { forwardRef } from 'react';
import type { SwitchProps } from './Switch.types';
import styles from './Switch.module.css';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ 
  label, 
  labelPosition = 'right', 
  size = 'medium', 
  disabled = false, 
  checked, 
  onChange, 
  className = '', 
  ...props 
}, ref) => {
  
  const containerClass = `
    ${styles.switchContainer} 
    ${styles[size]} 
    ${disabled ? styles.disabled : ''} 
    ${className}
  `.trim();

  return (
    <label className={containerClass}>
      {label && labelPosition === 'left' && <span>{label}</span>}
      
      <input 
        type="checkbox" 
        ref={ref} 
        className={styles.screenReaderInput} 
        disabled={disabled} 
        checked={checked} 
        onChange={onChange} 
        {...props} 
      />
      
      <div className={styles.track}>
        <div className={styles.thumb} />
      </div>
      
      {label && labelPosition === 'right' && <span>{label}</span>}
    </label>
  );
});

Switch.displayName = 'Switch';
