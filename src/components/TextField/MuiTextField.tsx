import { Color } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField, { OutlinedTextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import React from 'react';

export interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  variant?: TextFieldVariants;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  fontFamily: 'Inter',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 10,
      borderWidth: '1px !important',
      borderStyle: 'solid !important',
      borderColor: theme.palette.grey['400'],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grey['700'],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.light,
    },
    '&.Mui-disabled fieldset': {
      borderColor: theme.palette.grey['300'],
      background: theme.palette.grey['50'],
    },
    '&.MuiInputBase-sizeSmall': {
      height: '48px',
      maxHeight: '48px',
    },
    '& .MuiInputBase-input': {
      ...theme.typography.body_m,
      color: theme.palette.secondary.main,
    },
    '&.Mui-error:hover fieldset, &.Mui-error.Mui-focused fieldset': {
      borderColor: (theme.palette.error as unknown as Color)['400'],
    },
    '&.Mui-error .MuiInputBase-input': {
      color: (theme.palette.error as unknown as Color)['400'],
    },
  },
  '& .MuiInputLabel-root': {
    ...theme.typography.body_m,
  },
  '& .MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)': {
    transform: 'translate(14px, 50%) scale(1)',
  },
}));

const MuiTextField = ({ helperText = ' ', variant = 'outlined', ...props }: TextFieldProps) => {
  return <StyledTextField variant={variant} size="small" helperText={helperText} {...props} />;
};

export { MuiTextField };
