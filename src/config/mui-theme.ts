import { Theme, createTheme } from '@mui/material/styles';
import { tokens } from '../theme/tokens';

const muiTheme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
    subtitle1: {
      fontSize: 12,
    },
    // text
    body_Xl: {
      fontSize: 20,
      lineHeight: 28,
    },
    body_L: {
      fontSize: 18,
      lineHeight: 26,
    },
    body_M: {
      fontSize: 16,
      lineHeight: 23,
    },
    body_S: {
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      lineHeight: 18,
    },
    // heading
  },
  palette: {
    primary: {
      shade: tokens.colors.shade,
      light: tokens.colors.primary400,
      main: tokens.colors.primary500,
      dark: tokens.colors.primary600,
      400: tokens.colors.primary400,
      500: tokens.colors.primary500,
      600: tokens.colors.primary600,
      contrastText: tokens.colors.accent,
    },
    secondary: {
      main: tokens.colors.black,
      contrastText: tokens.colors.white,
    },
    accent: {
      main: tokens.colors.accent,
      contrastText: tokens.colors.primary500,
    },
    grey: {
      50: tokens.colors.grey50,
      100: tokens.colors.grey100,
      200: tokens.colors.grey200,
      300: tokens.colors.grey300,
      400: tokens.colors.grey400,
      500: tokens.colors.grey500,
      600: tokens.colors.grey600,
      700: tokens.colors.grey700,
      800: tokens.colors.grey800,
      900: tokens.colors.grey900,
    },
    warning: {
      100: tokens.colors.warning100,
      200: tokens.colors.warning200,
      300: tokens.colors.warning300,
      400: tokens.colors.warning400,
      500: tokens.colors.warning500,
      600: tokens.colors.warning600,
      700: tokens.colors.warning700,
    },
    error: {
      100: tokens.colors.error100,
      200: tokens.colors.error200,
      300: tokens.colors.error300,
      400: tokens.colors.error400,
      500: tokens.colors.error500,
      600: tokens.colors.error600,
      700: tokens.colors.error700,
    },
    info: {
      100: tokens.colors.info100,
      200: tokens.colors.info200,
      300: tokens.colors.info300,
      400: tokens.colors.info400,
      500: tokens.colors.info500,
      600: tokens.colors.info600,
      700: tokens.colors.info700,
    },
    whiteScale: {
      100: tokens.colors.white100,
      200: tokens.colors.white200,
      300: tokens.colors.white300,
      400: tokens.colors.white400,
      500: tokens.colors.white500,
      600: tokens.colors.white600,
      700: tokens.colors.white700,
      800: tokens.colors.white800,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          body_Xl: 'p',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: tokens.colors.accent,
            color: tokens.colors.primary400,
            '&:hover': {
              backgroundColor: tokens.colors.primary400,
              color: tokens.colors.accent,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: tokens.colors.grey900,
            '&:hover': {
              backgroundColor: tokens.colors.black,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            backgroundColor: tokens.colors.error100,
            color: tokens.colors.error500,
            '&:hover': {
              backgroundColor: tokens.colors.error400,
              color: tokens.colors.white,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'warning' },
          style: {
            backgroundColor: tokens.colors.warning100,
            color: tokens.colors.warning500,
            '&:hover': {
              backgroundColor: tokens.colors.warning400,
              color: tokens.colors.white,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'success' },
          style: {
            backgroundColor: tokens.colors.shade,
            color: tokens.colors.primary500,
            '&:hover': {
              backgroundColor: tokens.colors.primary400,
              color: tokens.colors.white,
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: tokens.colors.transparent,
            color: tokens.colors.grey700,
            borderColor: tokens.colors.grey500,
            '&:hover': {
              backgroundColor: tokens.colors.grey800,
              color: tokens.colors.white,
            },
          },
        },
        {
          props: { disabled: true },
          style: {
            backgroundColor: `${tokens.colors.grey100} !important`,
            color: `${tokens.colors.grey400} !important`,
          },
        },
      ],
    },
  },
  customSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
});

export { muiTheme };
