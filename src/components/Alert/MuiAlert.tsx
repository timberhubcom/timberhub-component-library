import Box, { BoxProps } from '@mui/material/Box';
import React from 'react';
import { tokens } from 'src/theme/tokens';
import { CustomColors } from 'src/types';

export interface IMuiAlertProps extends BoxProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: Omit<CustomColors, 'accent' | 'secondary' | 'primary'>;
}

const variantToColorMapper = {
  success: {
    bg: tokens.colors.shade,
    color: tokens.colors.primary[500],
  },
  grey: {
    bg: tokens.colors.grey[100],
    color: tokens.colors.grey[400],
  },
  error: {
    bg: tokens.colors.error[100],
    color: tokens.colors.error[400],
  },
  warning: {
    bg: tokens.colors.warning[100],
    color: tokens.colors.warning[400],
  },
  info: {
    bg: tokens.colors.info[100],
    color: tokens.colors.info[400],
  },
};

const MuiAlert = ({
  icon,
  children,
  variant = 'grey',
  bgcolor,
  display = 'flex',
  gap = '16px',
  p = '8px 16px',
  ...props
}: IMuiAlertProps) => {
  const validVariant = variantToColorMapper[variant as keyof typeof variantToColorMapper] ?? variantToColorMapper.grey;
  const bgColor = bgcolor || validVariant.bg;
  const svgColor = validVariant.color;

  return (
    <Box bgcolor={bgColor} role="alert" display={display} gap={gap} p={p} {...props}>
      <Box
        display={'flex'}
        flexShrink="0"
        sx={{
          svg: {
            color: svgColor,
          },
        }}
      >
        {icon}
      </Box>
      <Box alignSelf={'center'}>{children}</Box>
    </Box>
  );
};

export { MuiAlert };
