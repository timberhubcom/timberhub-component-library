import React from 'react';
import styles from './Button.module.scss';
import LoaderWhite from '../Icons/LoaderWhite';
import Loader from '../Icons/Loader';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'plain';
  variant?: 'positive' | 'negative' | 'neutral';
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  variant = 'positive',
  loading,
  onClick,
  disabled = false,
  children,
  icon,
  ...rest
}) => {
  const variantColor = variant === 'positive' ? '#23d899' : variant === 'negative' ? '#fda4af' : '#d5d5d5';
  return (
    <button
      className={`${styles.button} ${styles[type]} ${disabled && styles.disabled} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <div className={styles.loader}>{type === 'primary' ? <LoaderWhite /> : <Loader color={variantColor} />}</div>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
