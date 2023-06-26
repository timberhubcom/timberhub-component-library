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

const smallToMedium = {
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
};
const largeToXLarge = {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '23px',
};

const sizeToStyle = {
  xs: {
    ...smallToMedium,
    padding: '2px 8px',
    height: 24,
  },
  sm: {
    ...smallToMedium,
    padding: '6px 16px',
    height: 32,
  },
  md: {
    ...smallToMedium,
    padding: '10px 16px',
    height: 40,
  },
  lg: {
    ...largeToXLarge,
    padding: '12px 24px',
    height: 48,
  },
  xl: {
    ...largeToXLarge,
    padding: '16px 24px',
    height: 56,
  },
};

const MuiButton: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  loading,
  children,
  icon,
  startIcon,
  className = '',
  size,
  ...rest
}) => {
  const variantColor = variantColorMap[color] ?? colors.NEUTRAL;
  const isIconOnly = !children && (icon || startIcon);

  const sizeStyle = sizeToStyle[size] ?? sizeToStyle.md;

  return (
    <StyledButton
      variant={variant}
      disableElevation
      startIcon={!loading && (icon || startIcon)}
      className={clsx(styles.buttonNew)}
      color={color}
      sx={{
        ...sizeStyle,
        ...(isIconOnly && { minWidth: sizeStyle.height, width: sizeStyle.height }),
        '> .MuiButton-startIcon': {
          marginRight: '4px',
          ...((size === 'lg' || size === 'xl') && { marginLeft: '-8px' }),
          ...(isIconOnly && { margin: 0 }),
        },
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
