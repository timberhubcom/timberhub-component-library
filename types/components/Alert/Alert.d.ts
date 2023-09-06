import React from 'react';
export interface AlertProps {
    variant?: 'green' | 'blue' | 'yellow' | 'red' | 'grey';
    className?: string;
    title?: string;
    children: React.ReactNode;
    buttonTitle?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
