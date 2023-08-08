import MuiFormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import { TypographyVariantOverrides } from '../../types/typography.types';
import { styled } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides extends TypographyVariantOverrides {}
}

export interface FormControlLabelProps extends MuiFormControlLabelProps {}

const StyledControlLabel = styled(MuiFormControlLabel)`
  gap: 8px;
  margin-left: 0px;
`;

const FormControlLabel = StyledControlLabel as React.FC<FormControlLabelProps>;

export { FormControlLabel };
