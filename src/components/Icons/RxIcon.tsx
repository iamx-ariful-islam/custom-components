import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const RxIcon: React.FC<IconProps> = ({
  size = 24,
  stroke = "currentColor",
  ...props
}) => {
  const { stroke: _stroke, ...restProps } = props as any;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      <path d="M5 20V4h6.5a4.5 4.5 0 1 1 0 9H5" />
      <path d="M10 13l4.5 4.5" />
      <path d="M13.5 16.5l4.5 4.5" />
      <path d="M13.5 21l4.5 -4.5" />
    </svg>
  );
};

RxIcon.displayName = "RxIcon";
