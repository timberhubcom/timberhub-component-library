import MuiFormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import { TypographyVariantOverrides } from '../../types/typography.types';

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides extends TypographyVariantOverrides {}
}

export interface FormControlLabelProps extends MuiFormControlLabelProps {}

const FormControlLabel = MuiFormControlLabel as React.FC<FormControlLabelProps>;

export { FormControlLabel };
