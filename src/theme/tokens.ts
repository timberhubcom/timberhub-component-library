const colors = {
  black: '#000000',
  transparent: 'transparent',
  white: '#ffffff',
  primary: {
    400: '#006646',
    500: '#005238',
    600: '#00291C',
  },
  accent: '#DCF53C',
  shade: '#E9F7EE',
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
  // warning
  warning: {
    100: '#FFF3EB',
    200: '#FDC49B',
    300: '#FC9F5B',
    400: '#C45404',
    500: '#B44D04',
    600: '#783302',
    700: '#3C1A01',
  },
  // error
  error: {
    100: '#FDEEED',
    200: '#F4A9A4',
    300: '#EB5E55',
    400: '#DB271A',
    500: '#C92318',
    600: '#921A11',
    700: '#370A06',
  },
  // whiteScale
  whiteScale: {
    100: '#ffffff0F',
    200: '#ffffff1A',
    300: '#ffffff26',
    400: '#ffffff3D',
    500: '#FFFFFF61',
    600: '#FFFFFF9E',
    700: '#ffffffC4',
    800: '#ffffffDB',
  },
  // info
  info: {
    100: '#EDF3F9',
    200: '#A6C6DE',
    300: '#6A9FC8',
    400: '#3D77A4',
    500: '#376C95',
    600: '#274C68',
    700: '#11202D',
  },
};

const interFontStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  color: colors.grey['900'],
};

const interMediumFontStyle = {
  ...interFontStyle,
  fontWeight: '500',
};

const sharedThemeValues = {
  typography: {
    headline_ss_xxl: {
      ...interMediumFontStyle,
      fontSize: '48px',
      lineHeight: '56px',
      letterSpacing: '-0.96px',
    },
    headline_ss_xl: {
      ...interMediumFontStyle,
      fontSize: '40px',
      lineHeight: '47px',
      letterSpacing: '-0.8px',
    },
    headline_ss_l: {
      ...interMediumFontStyle,
      fontSize: '30px',
      lineHeight: '36px',
      letterSpacing: '-0.45px',
    },
    headline_ss_m: {
      fontSize: '22px',
      ...interMediumFontStyle,
      lineHeight: '28px',
      letterSpacing: '-0.165px',
    },
    headline_ss_s: {
      ...interMediumFontStyle,
      fontSize: '18px',
      lineHeight: '25px',
    },
    headline_ss_xs: {
      ...interMediumFontStyle,
      fontSize: '16px',
      lineHeight: '23px',
    },
    headline_ss_xxs: {
      ...interMediumFontStyle,
      fontSize: '14px',
      lineHeight: '20px',
    },
    headline_xxl: {
      ...interMediumFontStyle,
      fontSize: '48px',
      lineHeight: '56px',
      letterSpacing: '-1.2px',
      fontFamily: 'GT Super Text',
    },
    headline_xl: {
      ...interMediumFontStyle,
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-1px',
      fontFamily: 'GT Super Text',
    },
    headline_l: {
      ...interMediumFontStyle,
      fontSize: '30px',
      lineHeight: '36px',
      letterSpacing: '-0.75px',
      fontFamily: 'GT Super Text',
    },
    headline_m: {
      ...interMediumFontStyle,
      fontSize: '22px',
      lineHeight: '26px',
      letterSpacing: '-0.55px',
      fontFamily: 'GT Super Text',
    },
    headline_s: {
      ...interMediumFontStyle,
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '-0.36px',
      fontFamily: 'GT Super Text',
    },
    body_xl: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: '20px',
      lineHeight: '28px',
    },
    body_l: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: '18px',
      lineHeight: '26px',
    },
    body_m: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: '16px',
      lineHeight: '23px',
    },
    body_s: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: '14px',
      lineHeight: '20px',
    },
    text_link_m: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: '16px',
      lineHeight: '23px',
      textDecorationLine: 'underline',
    },
    text_link_s: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: 14,
      lineHeight: '20px',
      textDecorationLine: 'underline',
    },
    caption: {
      ...interFontStyle,
      color: colors.grey['600'],
      fontSize: 12,
      lineHeight: '18px',
    },
  },
};

export type TTheme = typeof tokens;

// THEMES
export const tokens = {
  colors,
  ...sharedThemeValues,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
} as const;
