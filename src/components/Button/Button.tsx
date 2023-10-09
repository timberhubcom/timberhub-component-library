import { styled } from '@mui/material';
import { Button as MuiButton, ButtonProps as MuiBtnProps } from '@mui/material';
import React from 'react';

import { tokens } from '../../theme/tokens';
import { Size } from '../../types';
import Loader from '../Icons/Loader';

export interface ButtonProps extends Omit<MuiBtnProps, 'size' | 'content' | 'rel' | 'rev'> {
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: Size;
}

const StyledButton = styled(MuiButton)`
  font-family: 'Inter', sans-serif;
  text-transform: none;
  border-radius: 100px;
`;

const LoaderWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 18px;
    height: 18px;
    margin-right: 0;
  }
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { color = 'primary', variant = 'contained', loading, disabled, children, icon, startIcon, size, sx = {}, ...rest },
    ref
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
        {...rest}>
        {loading ? (
          <LoaderWrapper>
            <Loader color={tokens.colors.grey['400']} />
          </LoaderWrapper>
        ) : (
          <span>{children}</span>
        )}
      </StyledButton>
    );
  }
);
