import MuiFormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import React from 'react';

export type FormControlLabelProps = MuiFormControlLabelProps;

const StyledControlLabel = styled(MuiFormControlLabel)`
  gap: 8px;
  margin-left: 0;
`;

export const FormControlLabel = StyledControlLabel as React.FC<FormControlLabelProps>;
