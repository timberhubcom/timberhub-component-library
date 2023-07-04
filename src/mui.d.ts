import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    headline_ss_xxl: React.CSSProperties;
    headline_ss_xl: React.CSSProperties;
    headline_ss_l: React.CSSProperties;
    headline_ss_m: React.CSSProperties;
    headline_ss_s: React.CSSProperties;
    headline_ss_xs: React.CSSProperties;
    headline_ss_xxs: React.CSSProperties;
    body_Xl: React.CSSProperties;
    body_L: React.CSSProperties;
    body_M: React.CSSProperties;
    body_S: React.CSSProperties;
    caption: React.CSSProperties;
  }
  interface TypographyOptions {
    headline_ss_xxl: React.CSSProperties;
    headline_ss_xl: React.CSSProperties;
    headline_ss_l: React.CSSProperties;
    headline_ss_m: React.CSSProperties;
    headline_ss_s: React.CSSProperties;
    headline_ss_xs: React.CSSProperties;
    headline_ss_xxs: React.CSSProperties;
    body_Xl?: React.CSSProperties;
    body_L?: React.CSSProperties;
    body_M?: React.CSSProperties;
    body_S?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    headline_ss_xxl: React.CSSProperties;
    headline_ss_xl: React.CSSProperties;
    headline_ss_l: React.CSSProperties;
    headline_ss_m: React.CSSProperties;
    headline_ss_s: React.CSSProperties;
    headline_ss_xs: React.CSSProperties;
    headline_ss_xxs: React.CSSProperties;
    body_Xl?: React.CSSProperties;
    body_L?: React.CSSProperties;
    body_M?: React.CSSProperties;
    body_S?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  interface Palette {
    accent: Palette['primary'];
    whiteScale: Palette['primary'];
    grey: Palette['primary'];
  }

  interface PaletteOptions {
    accent: PaletteOptions['primary'];
    whiteScale: PaletteOptions['primary'];
    grey: Palette['primary'];
  }

  interface PaletteColor {
    shade?: string;
  }

  interface SimplePaletteColorOptions {
    shade?: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body_Xl: true;
    body_L: true;
    body_M: true;
    body_S: true;
    caption: true;
    h3: false;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    grey: true;
    accent: true;
  }
}

declare module '@mui/material' {
    interface ButtonPropsColorOverrides {
    grey: true;
    accent: true;
  }
}
