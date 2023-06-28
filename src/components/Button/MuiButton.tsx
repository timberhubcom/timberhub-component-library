import Button, { ButtonProps as MuiBtnProps } from '@mui/material/Button';
import React from 'react';

import { styled } from '@mui/material';
import Loader from '../Icons/Loader';
import styles from './Button.module.scss';
import { tokens } from '../../theme/tokens';

export interface MuiButtonProps extends Omit<MuiBtnProps, 'size'> {
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

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

const MuiButton: React.FC<MuiButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  loading,
  disabled,
  children,
  icon,
  startIcon,
  className = '',
  size,
  ...rest
}) => {
  const isIconOnly = !children && (icon || startIcon) && !loading;

  const sizeStyle = sizeToStyle[size] ?? sizeToStyle.md;

  return (
    <StyledButton
      variant={variant}
      startIcon={!loading && (icon || startIcon)}
      color={color}
      disableElevation
      disabled={disabled || loading}
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
          <Loader color={tokens.colors.grey400} />
        </div>
      ) : (
        <span>{children}</span>
      )}
    </StyledButton>
  );
};

export default MuiButton;
