import React from 'react';
import styles from './Button.module.scss';
import LoaderWhite from '../Icons/LoaderWhite';
import Loader from '../Icons/Loader';
import { colors } from '../../theme/colors.enum';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'plain';
  variant?: 'positive' | 'negative' | 'neutral';
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantColorMap = {
  positive: colors.POSITIVE,
  negative: colors.NEGATIVE,
  neutral: colors.NEUTRAL,
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
  const variantColor = variantColorMap[variant] ?? colors.NEUTRAL;

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
