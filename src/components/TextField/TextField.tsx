import { Color, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiTextField, { OutlinedTextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import React from 'react';
import { dropdownIconPath } from 'src/icons/dropdownIconPath';

export interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  variant?: TextFieldVariants;
}

export const outlinedInputStyles = (theme: Theme) => ({
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
  '& .MuiInputBase-input': {
    ...theme.typography.body_m,
    color: theme.palette.secondary.main,
  },
  '&.Mui-error:hover fieldset, &.Mui-error.Mui-focused fieldset': {
    borderColor: (theme.palette.error as unknown as Color)['400'],
  },
  '&.Mui-error .MuiInputBase-input': {
    color: `${(theme.palette.error as unknown as Color)['400']} !important`,
  },
  '& .MuiSelect-icon path': {
    d: `path("${dropdownIconPath}")`,
  },
});

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  fontFamily: 'Inter',
  color: theme.palette.grey['900'],
  '& .MuiOutlinedInput-root': {
    ...outlinedInputStyles(theme),
    '&.MuiInputBase-sizeSmall:not(.MuiInputBase-multiline)': {
      height: '48px',
      maxHeight: '48px',
    },
  },
  '& .MuiInputLabel-root': {
    ...theme.typography.body_m,
  },
  '& .MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)': {
    transform: 'translate(14px, 50%) scale(1)',
  },
}));

export const TextField = ({ helperText = null, variant = 'outlined', size = 'small', ...props }: TextFieldProps) => {
  return <StyledTextField variant={variant} size={size} helperText={helperText} {...props} />;
};
