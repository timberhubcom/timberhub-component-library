import clsx from 'clsx';
import React from 'react';
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import styles from './Button.module.scss';
import Loader from '../Icons/Loader';
import LoaderWhite from '../Icons/LoaderWhite';
import { colors } from '../../theme/colors.enum';
import { styled } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const variantColorMap = {
  primary: colors.POSITIVE,
  error: colors.NEGATIVE,
  neutral: colors.NEUTRAL,
};

const StyledButton = styled(Button)`
  font-family: 'Inter', sans-serif;
  text-transform: none;
  border-radius: 100px;
`;

const sizeToStyle = {
  xs: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '2px 8px',
  },
  sm: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '6px 16px',
  },
  md: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '10px 16px',
  },
  lg: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '23px',
    padding: '12px 24px',
  },
  xl: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '23px',
    padding: '16px 24px',
  },
};

const MuiButton: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  loading,
  children,
  icon,
  className = '',
  size,
  ...rest
}) => {
  const variantColor = variantColorMap[color] ?? colors.NEUTRAL;

  return (
    <StyledButton
      variant={variant}
      disableElevation
      startIcon={!loading && icon}
      className={clsx(styles.buttonNew)}
      color={color}
      // size={size}
      sx={{
        ...sizeToStyle[size ?? 'md'],
      }}
      {...rest}
    >
      {loading ? (
        <div className={styles.loader}>
          {variant === 'contained' ? <LoaderWhite /> : <Loader color={variantColor} />}
        </div>
      ) : (
        <>{children}</>
      )}
    </StyledButton>
  );
};

export default MuiButton;
