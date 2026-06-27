import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { Button } from '../Button'; 
import { CloseIcon } from '../Icons/CloseIcon'; 

export type ModalAlignment = 'left' | 'center' | 'right';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'; 
export type ModalHeightPreset = 'auto' | 'sm' | 'md' | 'lg' | 'full'; 

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  headerActions?: React.ReactNode;
  align?: ModalAlignment;
  closePolicy?: boolean;
  size?: ModalSize;      
  heightPreset?: ModalHeightPreset;
  width?: string | number;
  height?: string | number;
  footer?: React.ReactNode | false; 
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle,
  headerActions,
  align = 'left',
  closePolicy = true,
  size = 'md',          
  heightPreset = 'auto',      
  width,
  height,
  footer = false,       
  children, 
  className = '', 
  style,
  ...rest 
}) => {
  
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (closePolicy && e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handler);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, [isOpen, onClose, closePolicy]);

  if (!isOpen) return null;

  const alignmentClass = styles[align] || styles.left;
  
  const sizeClass = width ? '' : (styles[`width-${size}`] || styles['width-md']);
  const heightClass = height ? '' : (styles[`height-${heightPreset}`] || styles['height-auto']);

  const customModalStyle: React.CSSProperties = {
    ...(width && { 
      maxWidth: typeof width === 'number' ? `${width}px` : width,
      width: '100%' 
    }),
    ...(height && { 
      height: typeof height === 'number' ? `${height}px` : height 
    }),
    ...style
  };

  const handleOverlayClick = () => {
    if (closePolicy) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div 
        key={isOpen ? 'modal-active' : 'modal-inactive'}
        className={`${styles.modal} ${alignmentClass} ${sizeClass} ${heightClass} ${className}`} 
        onClick={e => e.stopPropagation()} 
        style={customModalStyle}
        {...rest}
      >
        
        <div className={styles.header}>
          <div className={styles.headerTitleArea}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          
          <div className={styles.headerActionsWrapper}>
            {headerActions && <div className={styles.customActions}>{headerActions}</div>}
            
            <Button 
              variant="ghost" 
              onClick={onClose} 
              iconOnly 
              shape="square"
              className={styles.closeButtonOverride}
              aria-label="Close modal"
            >
              <CloseIcon />
            </Button>
          </div>
        </div>

        <div className={styles.content}>{children}</div>

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
