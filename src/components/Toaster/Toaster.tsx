import React, { useState, useEffect } from 'react';
import styles from './Toaster.module.css';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
export type ToasterPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

type ToastCallback = (toast: ToastMessage) => void;
const listeners = new Set<ToastCallback>();

export const toast = {
  show: (message: string, type: ToastType = 'info', duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    listeners.forEach((listener) => listener({ id, message, type, duration }));
  },
  success: (msg: string, duration?: number) => toast.show(msg, 'success', duration),
  error: (msg: string, duration?: number) => toast.show(msg, 'error', duration),
  info: (msg: string, duration?: number) => toast.show(msg, 'info', duration),
  warning: (msg: string, duration?: number) => toast.show(msg, 'warning', duration),
};

const ToastItem: React.FC<{ toast: ToastMessage; position: ToasterPosition; onRemove: (id: string) => void }> = ({
  toast,
  position,
  onRemove,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, toast.duration || 4000);

    return () => clearTimeout(timer);
  }, [toast, onRemove]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'warning': return '⚠';
      default: return 'ℹ';
    }
  };

  const animationClass = position.includes('right') ? styles.slideFromRight : styles.slideFromLeft;

  return (
    <div className={`${styles.toast} ${styles[toast.type]} ${animationClass}`}>
      <span className={styles.icon}>{getIcon()}</span>
      <p className={styles.message}>{toast.message}</p>
      <button className={styles.closeBtn} onClick={() => onRemove(toast.id)}>
        ✕
      </button>
    </div>
  );
};

export const Toaster: React.FC<{ position?: ToasterPosition }> = ({ position = 'top-right' }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleNewToast = (newToast: ToastMessage) => {
      setToasts((prev) => [...prev, newToast]);
    };

    listeners.add(handleNewToast);
    return () => {
      listeners.delete(handleNewToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const positionClass = styles[position] || styles['top-right'];

  return (
    <div className={`${styles.toasterContainer} ${positionClass}`}>
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} position={position} onRemove={removeToast} />
      ))}
    </div>
  );
};
