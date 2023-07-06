import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { CustomVariants } from '../../types/typography.types';

export interface LinkProps extends MuiLinkProps {
  /**
   * Applies the theme typography styles.
   * @default 'body_m'
   */
  variant?: CustomVariants;
}

const Link = MuiLink as React.FC<LinkProps>;

export { Link };
