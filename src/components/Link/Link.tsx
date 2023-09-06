import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { TypographyProps } from '@mui/material/Typography'
import React from 'react'

export interface LinkProps extends MuiLinkProps {
  /**
   * Applies the theme typography styles.
   * @default 'body_m'
   */
  variant?: TypographyProps['variant']
}

export const Link = MuiLink as React.FC<LinkProps>
