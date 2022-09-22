import React from 'react';
export interface ButtonProps {
    type?: 'primary' | 'secondary' | 'plain';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
