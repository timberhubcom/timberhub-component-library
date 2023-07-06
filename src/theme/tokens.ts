const interFontStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
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
      lineHeight: '22px',
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
      lineHeight: '21px',
      letterSpacing: '-0.36px',
      fontFamily: 'GT Super Text',
    },
    body_xl: {
      ...interFontStyle,
      fontSize: '20px',
      lineHeight: '28px',
    },
    body_l: {
      ...interFontStyle,
      fontSize: '18px',
      lineHeight: '26px',
    },
    body_m: {
      ...interFontStyle,
      fontSize: '16px',
      lineHeight: '23px',
    },
    body_s: {
      ...interFontStyle,
      fontSize: '14px',
      lineHeight: '20px',
    },
    text_link_m: {
      ...interFontStyle,
      fontSize: '16px',
      lineHeight: 23,
      textDecorationLine: 'underline',
    },
    text_link_s: {
      ...interFontStyle,
      fontSize: 14,
      lineHeight: 20,
      textDecorationLine: 'underline',
    },
    caption: {
      ...interFontStyle,
      fontSize: 12,
      lineHeight: 18,
    },
  },
};

export type TTheme = typeof tokens;

// THEMES
export const tokens = {
  colors: {
    black: '#000000',
    transparent: 'transparent',
    white: '#ffffff',
    primary400: '#006646',
    primary500: '#005238',
    primary600: '#00291C',
    // accent
    accent: '#DCF53C',
    // shade
    shade: '#E9F7EE',
    // gray
    grey50: '#00000008', // #F7F7F7
    grey100: '#0000000D', // #F2F2F2
    grey200: '#00000014', // #EBEBEB
    grey300: '#00000021', // #DEDEDE
    grey400: '#00000036', // #C9C9C9
    grey500: '#00000057', // #A8A8A8
    grey600: '#0000008F', // #707070
    grey700: '#000000B0', // #505050
    grey800: '#000000C4', // #3B3B3B
    grey900: '#000000DE', // #212121
    // warning
    warning100: '#FFF3EB',
    warning200: '#FDC49B',
    warning300: '#FC9F5B',
    warning400: '#C45404',
    warning500: '#B44D04',
    warning600: '#783302',
    warning700: '#3C1A01',
    // error
    error100: '#FDEEED',
    error200: '#F4A9A4',
    error300: '#EB5E55',
    error400: '#DB271A',
    error500: '#C92318',
    error600: '#921A11',
    error700: '#370A06',
    // whiteScale
    white100: '#0F0F0F',
    white200: '#1A1A1A',
    white300: '#262626',
    white400: '#3D3D3D',
    white500: '#616161',
    white600: '#9E9E9E',
    white700: '#C4C4C4',
    white800: '#DBDBDB',
    // info
    info100: '#EDF3F9',
    info200: '#A6C6DE',
    info300: '#6A9FC8',
    info400: '#3D77A4',
    info500: '#376C95',
    info600: '#274C68',
    info700: '#11202D',
  },
  ...sharedThemeValues,
} as const;
