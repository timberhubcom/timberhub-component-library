const sharedThemeValues = {
  typography: {
    heading1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '48px',
      lineHeight: '56px',
      letterSpacing: '-0.02em',
    },
    heading2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '40px',
      lineHeight: '47px',
      letterSpacing: '-0.02em',
    },
    heading3: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '30px',
      lineHeight: '36px',
      letterSpacing: '-0.015em',
    },
    heading4: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '22px',
      lineHeight: '28px',
      letterSpacing: '-0.0075em',
    },
    heading5: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '28px',
      letterSpacing: '-0.0075em',
    },
    heading6: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '28px',
      letterSpacing: '-0.0075em',
    },
    heading7: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '28px',
      letterSpacing: '-0.0075em',
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
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
