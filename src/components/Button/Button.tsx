import clsx from 'clsx';
import React from 'react';
import { colors } from '../../theme/colors.enum';
import Loader from '../Icons/Loader';
import LoaderWhite from '../Icons/LoaderWhite';
import styles from './Button.module.scss';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'plain';
  variant?: 'positive' | 'negative' | 'neutral';
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  name?: string;
}

const variantColorMap = {
  positive: colors.POSITIVE,
  negative: colors.NEGATIVE,
  neutral: colors.NEUTRAL,
};

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  variant = 'positive',
  loading,
  onClick,
  disabled = false,
  children,
  icon,
  className = '',
  name,
  ...rest
}) => {
  const variantColor = variantColorMap[variant] ?? colors.NEUTRAL;

  return (
    <button
      className={className || clsx(styles.button, styles[type], disabled && styles.disabled, styles[variant])}
      disabled={disabled}
      onClick={onClick}
      name={name}
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
