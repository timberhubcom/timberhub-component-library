import { createTheme } from '@mui/material/styles';
import { tokens } from '../../theme/tokens';
import { buttonVariants } from './button/variants';

const muiTheme = createTheme({
  typography: {
    fontFamily: ['Inter', 'GT Super Text', 'sans-serif'].join(','),
    // text
    headline_ss_xxl: tokens.typography.headline_ss_xxl,
    headline_ss_xl: tokens.typography.headline_ss_xl,
    headline_ss_l: tokens.typography.headline_ss_l,
    headline_ss_m: tokens.typography.headline_ss_m,
    headline_ss_s: tokens.typography.headline_ss_s,
    headline_ss_xs: tokens.typography.headline_ss_xs,
    headline_ss_xxs: tokens.typography.headline_ss_xxs,
    headline_xxl: tokens.typography.headline_xxl,
    headline_xl: tokens.typography.headline_xl,
    headline_l: tokens.typography.headline_l,
    headline_m: tokens.typography.headline_m,
    headline_s: tokens.typography.headline_s,
    body_xl: tokens.typography.body_xl,
    body_l: tokens.typography.body_l,
    body_m: tokens.typography.body_m,
    body_s: tokens.typography.body_s,
    text_link_m: tokens.typography.text_link_m,
    text_link_s: tokens.typography.text_link_s,
    caption: tokens.typography.caption,
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: undefined,
    body2: undefined,
    button: undefined,
    overline: undefined,
  },
  palette: {
    primary: {
      shade: tokens.colors.shade,
      light: tokens.colors.primary['400'],
      main: tokens.colors.primary['500'],
      dark: tokens.colors.primary['600'],
      ...tokens.colors.primary,
      contrastText: tokens.colors.accent,
    },
    secondary: {
      main: tokens.colors.black,
      contrastText: tokens.colors.white,
    },
    accent: {
      main: tokens.colors.accent,
      contrastText: tokens.colors.primary['500'],
    },
    grey: tokens.colors.grey,
    warning: tokens.colors.warning,
    error: tokens.colors.error,
    info: tokens.colors.info,
    whiteScale: tokens.colors.whiteScale,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          headline_ss_xxl: 'h1',
          headline_ss_xl: 'h2',
          headline_ss_l: 'h3',
          headline_ss_m: 'h4',
          headline_ss_s: 'h5',
          headline_ss_xs: 'h6',
          headline_ss_xxs: 'h6',
          headline_xxl: 'h1',
          headline_xl: 'h2',
          headline_l: 'h3',
          headline_m: 'h4',
          headline_s: 'h5',
          body_xl: 'p',
          body_l: 'p',
          body_m: 'p',
          body_s: 'p',
          text_link_m: 'span',
          text_link_s: 'span',
          caption: 'span',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
      },
      variants: buttonVariants,
    },
  },
});

export { muiTheme };
