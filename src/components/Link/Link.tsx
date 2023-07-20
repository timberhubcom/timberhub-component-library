import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { TypographyVariantOverrides } from '../../types/typography.types';
import { TypographyProps } from '@mui/material/Typography';

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides extends TypographyVariantOverrides {}
}

export interface LinkProps extends MuiLinkProps {
  /**
   * Applies the theme typography styles.
   * @default 'body_m'
   */
  variant?: TypographyProps['variant'];
}

const Link = MuiLink as React.FC<LinkProps>;

export { Link };
