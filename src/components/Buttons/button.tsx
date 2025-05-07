import React, { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  disabled:boolean;
  onClick:  MouseEventHandler<HTMLButtonElement>,
  
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <button
  onClick={onClick}
  className={`relative overflow-hidden  uppercase font-semibold text-sm group
    ${variant === 'secondary' ? 'text-[#adf802] ' : 'text-black'}
  `}
>
  <span
    className={`absolute inset-0 z-0 ${
      variant === 'secondary'
        ? 'bg-[#adf802] taper-secondary'
        : 'bg-[#adf802] taper-primary'
    }`}
  />
  <span
    className={`relative z-10 ${
      variant === 'secondary'
        ? 'bg-black taper-secondary-inner'
        : 'bg-[#adf802] taper-primary'
    } px-6 py-3 block`}
  >
    {children}
  </span>
</button>
  );
};

export default Button;