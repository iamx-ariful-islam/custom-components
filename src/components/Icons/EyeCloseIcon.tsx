import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const EyeCloseIcon: React.FC<IconProps> = ({ size = 24, stroke = "currentColor", ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a19.5 19.5 0 0 1 4.35-4.44M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 7 10 7a19.5 19.5 0 0 1-2.73 3.6" />
      <line x1="1" y1="1" x2="23" y2="23" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
    </svg>
  );
};
