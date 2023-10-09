import '@mui/material/styles'
import React from 'react'
import { CustomCheckboxPropsSizeOverrides, CustomColorOverrides, TypographyVariantOverrides } from './types'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    headline_ss_xxl: React.CSSProperties
    headline_ss_xl: React.CSSProperties
    headline_ss_l: React.CSSProperties
    headline_ss_m: React.CSSProperties
    headline_ss_s: React.CSSProperties
    headline_ss_xs: React.CSSProperties
    headline_ss_xxs: React.CSSProperties
    headline_xxl: React.CSSProperties
    headline_xl: React.CSSProperties
    headline_l: React.CSSProperties
    headline_m: React.CSSProperties
    headline_s: React.CSSProperties
    body_xl: React.CSSProperties
    body_l: React.CSSProperties
    body_m: React.CSSProperties
    body_s: React.CSSProperties
    text_link_m: React.CSSProperties
    text_link_s: React.CSSProperties
    caption: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    headline_ss_xxl: React.CSSProperties
    headline_ss_xl: React.CSSProperties
    headline_ss_l: React.CSSProperties
    headline_ss_m: React.CSSProperties
    headline_ss_s: React.CSSProperties
    headline_ss_xs: React.CSSProperties
    headline_ss_xxs: React.CSSProperties
    headline_xxl: React.CSSProperties
    headline_xl: React.CSSProperties
    headline_l: React.CSSProperties
    headline_m: React.CSSProperties
    headline_s: React.CSSProperties
    body_xl?: React.CSSProperties
    body_l?: React.CSSProperties
    body_m?: React.CSSProperties
    body_s?: React.CSSProperties
    text_link_m?: React.CSSProperties
    text_link_s?: React.CSSProperties
    caption?: React.CSSProperties
  }

  interface Palette {
    accent: Palette['primary']
    whiteScale: Palette['primary']
    grey: Palette['primary']
  }

  interface PaletteOptions {
    accent: PaletteOptions['primary']
    whiteScale: PaletteOptions['primary']
    grey: Palette['primary']
  }

  interface PaletteColor {
    shade?: string
  }

  interface SimplePaletteColorOptions {
    shade?: string
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headline_ss_xxl: true
    headline_ss_xl: true
    headline_ss_l: true
    headline_ss_m: true
    headline_ss_s: true
    headline_ss_xs: true
    headline_ss_xxs: true
    headline_xxl: true
    headline_xl: true
    headline_l: true
    headline_m: true
    headline_s: true
    body_xl: true
    body_l: true
    body_m: true
    body_s: true
    text_link_m: true
    text_link_s: true
    caption: true
    h1: false
    h2: false
    h3: false
    h4: false
    h5: false
    h6: false
    subtitle1: false
    subtitle2: false
    body1: false
    body2: false
    button: false
    overline: false
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends CustomColorOverrides {}
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides extends CustomCheckboxPropsSizeOverrides {}
  interface CheckboxPropsColorOverrides extends CustomColorOverrides {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends TypographyVariantOverrides {}
}
