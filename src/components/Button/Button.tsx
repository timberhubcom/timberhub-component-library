import React from 'react';
import styles from './Button.module.scss';
import LoaderWhite from '../Icons/LoaderWhite';
import Loader from '../Icons/Loader';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'plain';
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  loading,
  onClick,
  disabled = false,
  children,
  icon,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <div className={styles.loader}>{type === 'primary' ? <LoaderWhite /> : <Loader />}</div>
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
