import { Theme, createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
    subtitle1: {
      fontSize: 12,
    },
    // text
    body_Xl: {
      fontSize: 20,
      lineHeight: 28
    },
    body_L: {
      fontSize: 18,
      lineHeight: 26
    },
    body_M: {
      fontSize: 16,
      lineHeight: 23
    },
    body_S: {
      fontSize: 14,
      lineHeight: 20
    },
    caption: {
      fontSize: 12,
      lineHeight: 18
    },
    // heading
  },
  palette: {
    primary: {
      light: '#006646',
      main: '#005238',
      dark: '#00291C',
      400: '#006646',
      500: '#005238',
      600: '#00291C',
      contrastText: '#DCF53C'
    },
    secondary: {
      main: '#DCF53C',
      contrastText: '#006646'
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
      styleOverrides: {
        // root: (props) => {
        //   const size = props.theme.customSizes[props.size as keyof Theme['customSizes']];
        //    const fontSize = size ? `${size}px` : '14px';
        //   const padding = size ? size * 0.5 : 8; // Default padding if size not found

        //   console.log('theme', size, padding)

        //   return {
        //     padding: `${padding}px 24px`,
        //     fontSize
        //   };
        // },
      },
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
