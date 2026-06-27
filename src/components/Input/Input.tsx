import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';
import { EyeOpenIcon } from '../Icons/EyeOpenIcon';   
import { EyeCloseIcon } from '../Icons/EyeCloseIcon'; 

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  label?: string; 
  material?: boolean; 
  password?: boolean; 
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode; 
  animatedPlaceholders?: string[]; 
  width?: string | number;
  height?: string | number;
}

export const Input: React.FC<InputProps> = ({
  label,
  material = false, 
  password = false, 
  id,
  type = 'text',
  placeholder,
  leftIcon,
  rightIcon, 
  animatedPlaceholders = [],
  width = 120, 
  height,
  disabled = false,
  required = false,
  className = '',
  style,
  value,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isAnimatingPlaceholder, setIsAnimatingPlaceholder] = useState(false);

  const isControlled = value !== undefined;
  const currentInputValue = isControlled ? String(value) : internalValue;
  const hasValue = currentInputValue.length > 0;

  useEffect(() => {
    if (material || animatedPlaceholders.length === 0 || hasValue || disabled) {
      setIsAnimatingPlaceholder(false);
      return;
    }

    setIsAnimatingPlaceholder(true);
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % animatedPlaceholders.length);
    }, 2800); 

    return () => clearInterval(interval);
  }, [material, animatedPlaceholders, hasValue, disabled]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const resolvedType = password ? (showPassword ? 'text' : 'password') : type;

  const wrapperStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    ...style,
  };

  const isFloated = material && (isFocused || hasValue);
  const hasRightIconArea = !!rightIcon;

  return (
    <div 
      className={`${styles.wrapper} ${material ? styles.materialWrapper : styles.normalWrapper} ${disabled ? styles.disabled : ''}`} 
      style={wrapperStyle}
    >
      {!material && label && (
        <label htmlFor={inputId} className={styles.normalLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}> *</span>}
        </label>
      )}

      <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`}>
        
        {leftIcon && <div className={styles.leftIconWrapper}>{leftIcon}</div>}

        <input
          id={inputId}
          type={resolvedType}
          disabled={disabled}
          required={required}
          value={currentInputValue}
          onChange={handleInputChange}
          placeholder={!material && !hasValue ? placeholder : undefined} 
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          className={`${styles.input} ${leftIcon ? styles.hasLeftIcon : ''} ${
            hasRightIconArea ? styles.hasRightIcon : ''
          } ${className}`}
          {...rest}
        />

        {material && label && (
          <label 
            htmlFor={inputId} 
            className={`${styles.materialLabel} ${isFloated ? styles.floating : ''} ${leftIcon && !isFloated ? styles.labelWithLeftIcon : ''}`}
          >
            {label}
            {required && <span className={styles.requiredAsterisk}> *</span>}
          </label>
        )}

        {!material && isAnimatingPlaceholder && animatedPlaceholders.length > 0 && !hasValue && (
          <div className={`${styles.animatedPlaceholderContainer} ${leftIcon ? styles.placeholderWithLeftIcon : ''}`}>
            <span key={placeholderIndex} className={styles.scrollingText}>
              {animatedPlaceholders[placeholderIndex]}
            </span>
          </div>
        )}

        {hasRightIconArea && (
          <div className={styles.rightIconWrapper}>
            {password ? (
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)} 
                tabIndex={-1}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
              </button>
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>
    </div>
  );
};
