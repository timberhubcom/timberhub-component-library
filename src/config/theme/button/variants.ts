import { tokens } from '../../../theme/tokens';
import type { ComponentsVariants } from '@mui/material/styles/variants';

const textButtonVariants: ComponentsVariants['MuiButton'] = (
  [
    { color: 'primary', active: tokens.colors.primary400, hover: tokens.colors.primary500 },
    { color: 'warning', active: tokens.colors.warning400, hover: tokens.colors.warning500 },
    { color: 'error', active: tokens.colors.error400, hover: tokens.colors.error500 },
  ] as const
).map(({ color, active, hover }) => ({
  props: { variant: 'text', color },
  style: {
    padding: '0px 0px 2px 0px !important',
    minWidth: 'auto',
    height: 'auto !important',
    color: active,
    '&:hover': {
      background: tokens.colors.transparent,
      color: hover,
    },
  },
}));

const containedButtonVariants: ComponentsVariants['MuiButton'] = (
  [
    {
      color: 'primary',
      bgColor: tokens.colors.accent,
      textColor: tokens.colors.primary400,
      hoveredBgColor: tokens.colors.primary400,
      textColor2: tokens.colors.accent,
      clickedBgColor: tokens.colors.primary500,
    },
    {
      color: 'error',
      bgColor: tokens.colors.error100,
      textColor: tokens.colors.error500,
      hoveredBgColor: tokens.colors.error400,
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.error500,
    },
    {
      color: 'warning',
      bgColor: tokens.colors.warning100,
      textColor: tokens.colors.warning500,
      hoveredBgColor: tokens.colors.warning400,
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.warning500,
    },
    {
      color: 'success',
      bgColor: tokens.colors.shade,
      textColor: tokens.colors.primary500,
      hoveredBgColor: tokens.colors.primary400,
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.primary500,
    },
    {
      color: 'grey',
      bgColor: tokens.colors.grey100,
      textColor: tokens.colors.grey700,
      hoveredBgColor: tokens.colors.grey300,
      textColor2: tokens.colors.grey900,
      clickedBgColor: tokens.colors.grey400,
    },
    {
      color: 'secondary',
      bgColor: tokens.colors.grey900,
      textColor: tokens.colors.white,
      hoveredBgColor: tokens.colors.black,
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.grey800,
    },
  ] as const
).map(({ color, bgColor, textColor, hoveredBgColor, textColor2, clickedBgColor }) => ({
  props: { variant: 'contained', color },
  style: {
    backgroundColor: bgColor,
    color: textColor,
    '&:hover': {
      backgroundColor: hoveredBgColor,
      color: textColor2,
    },
    '&:focus': {
      backgroundColor: clickedBgColor,
      color: textColor2,
    },
  },
}));

export const buttonVariants: ComponentsVariants['MuiButton'] = [
  ...containedButtonVariants,
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
      '&:focus': {
        backgroundColor: tokens.colors.grey900,
        color: tokens.colors.white,
      },
    },
  },
  ...textButtonVariants,
  {
    props: { disabled: true },
    style: {
      backgroundColor: `${tokens.colors.grey100} !important`,
      color: `${tokens.colors.grey400} !important`,
    },
  },
];
