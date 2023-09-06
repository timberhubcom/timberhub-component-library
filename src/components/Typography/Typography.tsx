import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
import React from 'react'

export interface TypographyProps extends MuiTypographyProps {
  /**
   * Applies the theme typography styles.
   * @default 'body_m'
   */
  variant?: MuiTypographyProps['variant']
}

export const Typography = MuiTypography as React.FC<TypographyProps>
