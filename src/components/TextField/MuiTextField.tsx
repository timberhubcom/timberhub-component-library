import { Color } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Palette } from '@mui/material/styles/createPalette';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';

export type ITextField = TextFieldProps;

const StyledTextField = styled(TextField)(({ theme }) => ({
  fontFamily: 'Inter',
  // '& label.Mui-focused': {
  //   color: '#A0AAB4',
  // },
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
    '& .MuiInputBase-sizeSmall': {
      height: 48,
      maxHeight: 48,
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
}));

const MuiTextField = ({ helperText = ' ', ...props }: ITextField) => {
  return <StyledTextField variant="outlined" size="small" helperText={helperText} {...props} />;
};

export { MuiTextField };
