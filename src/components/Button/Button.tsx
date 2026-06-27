import React, { forwardRef } from 'react';
import styles from './Button.module.css';
import { Tooltip } from '../Tooltip';
import type { ButtonProps, ButtonContentProps } from './Button.types';

export const ButtonContent: React.FC<ButtonContentProps> = ({
  children,
  visible,
  hidden,
}) => {
  const contentClassName = [
    styles.content,
    visible && styles.visibleContent,
    hidden && styles.hiddenContent,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={contentClassName}>{children}</span>;
};

ButtonContent.displayName = 'ButtonContent';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      animated = false,
      color,
      textColor,
      leftIcon,
      rightIcon,
      icon,
      iconPosition,
      iconOnly = false,
      shape = 'square',
      tooltip,
      tooltipTitle,
      tooltipDescription,
      tooltipPosition = 'top',
      tooltipDelay = 1000,
      children,
      className = '',
      style,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      loading && styles.loading,
      iconOnly && styles.iconOnly,
      iconOnly && shape === 'circle' && styles.circle,
      icon && iconPosition === 'top' && styles.flexCol,
      icon && iconPosition === 'bottom' && styles.flexColReverse,
      animated === true && styles.btnHorizontal,
      animated === 'vertical' && styles.btnVertical,
      animated === 'fade' && styles.btnFade,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const customStyle: React.CSSProperties = {
      backgroundColor: color,
      color: textColor,
      ...style,
    };

    const buttonElement = (
      <button
        ref={ref}
        type={type}
        className={classes}
        style={customStyle}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {loading ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            <span className={styles.srOnly}>Loading...</span>
          </>
        ) : (
          <>
            {iconOnly ? (
              icon || children
            ) : (
              <>
                {icon && (iconPosition === 'top' || iconPosition === 'bottom') && (
                  <span className={styles.icon}>{icon}</span>
                )}

                {!animated && leftIcon && !iconPosition && (
                  <span className={styles.leftIcon}>{leftIcon}</span>
                )}

                {animated ? (
                  <>
                    <ButtonContent visible>{children}</ButtonContent>
                    <ButtonContent hidden>
                      {rightIcon || leftIcon || children}
                    </ButtonContent>
                  </>
                ) : (
                  children
                )}

                {!animated && rightIcon && !iconPosition && (
                  <span className={styles.rightIcon}>{rightIcon}</span>
                )}
              </>
            )}
          </>
        )}
      </button>
    );

    if (!tooltip && !tooltipTitle && !tooltipDescription) {
      return buttonElement;
    }

    return (
      <Tooltip
        content={tooltip}
        title={tooltipTitle}
        description={tooltipDescription}
        position={tooltipPosition}
        delay={tooltipDelay}
      >
        <span style={{ display: 'inline-block', width: fullWidth ? '100%' : 'auto' }}>
          {buttonElement}
        </span>
      </Tooltip>
    );
  },
);

Button.displayName = 'Button';
