import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'plain';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = 'primary', onClick, disabled = false, children, ...rest }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
