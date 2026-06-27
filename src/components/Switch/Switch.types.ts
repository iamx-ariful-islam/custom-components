import type React from 'react';

interface SwitchOwnProps {
  label?: string;
  labelPosition?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
}

export type SwitchProps = SwitchOwnProps & 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof SwitchOwnProps | 'type'>;
