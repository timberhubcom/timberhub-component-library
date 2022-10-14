import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'plain';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = 'primary', onClick, disabled = false, children, icon, ...rest }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
