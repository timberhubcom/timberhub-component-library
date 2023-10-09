import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { TypographyVariantOverrides } from '../../types/typography.types';

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides extends TypographyVariantOverrides {}
}

export interface TypographyProps extends MuiTypographyProps {
  /**
   * Applies the theme typography styles.
   * @default 'body_m'
   */
  variant?: MuiTypographyProps['variant'];
}

const Typography = MuiTypography as React.FC<TypographyProps>;

export { Typography };
