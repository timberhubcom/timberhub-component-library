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
      light: '#006646',
      main: '#005238',
      dark: '#00291C',
      400: '#006646',
      500: '#005238',
      600: '#00291C',
      contrastText: '#DCF53C',
    },
    secondary: {
      main: '#DCF53C',
      contrastText: '#006646',
    },
    accent: {
      main: '#DCF53C',
      contrastText: '#006646',
    },
    grey: {
      50: '#00000008', // #F7F7F7
      100: '#0000000D', // #F2F2F2
      200: '#00000014', // #EBEBEB
      300: '#00000021', // #DEDEDE
      400: '#00000036', // #C9C9C9
      500: '#00000057', // #A8A8A8
      600: '#0000008F', // #707070
      700: '#000000B0', // #505050
      800: '#000000C4', // #3B3B3B
      900: '#000000DE', // #212121
    },
    warning: {
      100: '#FFF3EB',
      200: '#FDC49B',
      300: '#FC9F5B',
      400: '#C45404',
      500: '#B44D04',
      600: '#783302',
      700: '#3C1A01',
    },
    error: {
      100: '#FDEEED',
      200: '#F4A9A4',
      300: '#EB5E55',
      400: '#DB271A',
      500: '#C92318',
      600: '#921A11',
      700: '#370A06',
    },
    info: {
      100: '#EDF3F9',
      200: '#A6C6DE',
      300: '#6A9FC8',
      400: '#3D77A4',
      500: '#376C95',
      600: '#274C68',
      700: '#11202D',
    },

    // whiteScale: {
    //   100: '#0F0F0F',
    //   200: '#1A1A1A',
    //   300: '#262626',
    //   400: '#3D3D3D',
    //   500: '#616161',
    //   600: '#9E9E9E',
    //   700: '#C4C4C4',
    //   800: '#DBDBDB',
    // },
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
