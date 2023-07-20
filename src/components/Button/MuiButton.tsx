import Button, { ButtonProps as MuiBtnProps } from '@mui/material/Button';
import React, { forwardRef } from 'react';

import { styled } from '@mui/material';
import Loader from '../Icons/Loader';
import styles from './Button.module.scss';
import { tokens } from '../../theme/tokens';
import { Size } from '../../types/size.type';
import { CustomColorOverrides } from 'src/types/color.type';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends CustomColorOverrides {}
}

export interface MuiButtonProps extends Omit<MuiBtnProps, 'size'> {
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: Size;
}

const StyledButton = styled(Button)`
  font-family: 'Inter', sans-serif;
  text-transform: none;
  border-radius: 100px;
`;

const sizeToStyle = {
  xs: {
    ...tokens.typography.headline_ss_xxs,
    padding: '2px 8px',
    height: 24,
  },
  sm: {
    ...tokens.typography.headline_ss_xxs,
    padding: '6px 16px',
    height: 32,
  },
  md: {
    ...tokens.typography.headline_ss_xxs,
    padding: '10px 16px',
    height: 40,
  },
  lg: {
    ...tokens.typography.headline_ss_xs,
    padding: '12px 24px',
    height: 48,
  },
  xl: {
    ...tokens.typography.headline_ss_xs,
    padding: '16px 24px',
    height: 56,
  },
};

const MuiButton: React.FC<MuiButtonProps> = forwardRef(
  (
    { color = 'primary', variant = 'contained', loading, disabled, children, icon, startIcon, size, sx = {}, ...rest },
    ref,
  ) => {
    const isIconOnly = !children && (icon || startIcon) && !loading;

    let sizeStyle: Partial<typeof sizeToStyle.xs> = sizeToStyle[size ?? 'md'] ?? sizeToStyle.md;
    if (variant === 'text') {
      if (size === 'xs') {
        sizeStyle = tokens.typography.headline_ss_xxs;
      } else {
        sizeStyle = tokens.typography.headline_ss_xs;
      }
    }

    return (
      <StyledButton
        ref={ref}
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
          ...sx,
        }}
        {...rest}
      >
        {loading ? (
          <div className={styles.loader}>
            <Loader color={tokens.colors.grey['400']} />
          </div>
        ) : (
          <span>{children}</span>
        )}
      </StyledButton>
    );
  },
);

export default MuiButton;
