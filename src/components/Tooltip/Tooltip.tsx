import React, { useState, useRef } from 'react';
import styles from './Tooltip.module.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content?: React.ReactNode;
  title?: string;
  description?: string;
  position?: TooltipPosition;
  delay?: number;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  title,
  description,
  position = 'top',
  delay = 200,
  children,
}) => {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasTooltip = content || title || description;

  if (!hasTooltip) {
    return children;
  }

  const showTip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(false);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onFocus={showTip}
      onBlur={hideTip}
    >
      {children}
      
      <div className={`${styles.tipBox} ${styles[position]} ${active ? styles.visible : ''}`}>
        {content && <div className={styles.contentOnly}>{content}</div>}

        {(title || description) && (
          <div className={styles.richContent}>
            {title && <h5 className={styles.title}>{title}</h5>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
