import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body_Xl: React.CSSProperties;
    body_L: React.CSSProperties;
    body_M: React.CSSProperties;
    body_S: React.CSSProperties;
    caption: React.CSSProperties;
  }
  interface TypographyOptions {
    body_Xl?: React.CSSProperties;
    body_L?: React.CSSProperties;
    body_M?: React.CSSProperties;
    body_S?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body_Xl?: React.CSSProperties;
    body_L?: React.CSSProperties;
    body_M?: React.CSSProperties;
    body_S?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  interface Theme {
    customSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }

  interface ThemeOptions {
    customSizes?: {
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };
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
