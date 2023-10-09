import React from 'react';
export interface ButtonProps {
    type?: 'primary' | 'secondary' | 'plain';
    variant?: 'positive' | 'negative' | 'neutral';
    loading?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    icon?: React.ReactNode;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
