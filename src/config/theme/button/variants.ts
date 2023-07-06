import { tokens } from '../../../theme/tokens';
import type { ComponentsVariants } from '@mui/material/styles/variants';

const textButtonVariants: ComponentsVariants['MuiButton'] = (
  [
    { color: 'primary', active: tokens.colors.primary['400'], hover: tokens.colors.primary['500'] },
    { color: 'warning', active: tokens.colors.warning['400'], hover: tokens.colors.warning['500'] },
    { color: 'error', active: tokens.colors.error['400'], hover: tokens.colors.error['500'] },
  ] as const
).map(({ color, active, hover }) => ({
  props: { variant: 'text', color },
  style: {
    padding: '0px 0px 0px 0px !important',
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
      textColor: tokens.colors.primary['400'],
      hoveredBgColor: tokens.colors.primary['400'],
      textColor2: tokens.colors.accent,
      clickedBgColor: tokens.colors.primary['500'],
    },
    {
      color: 'error',
      bgColor: tokens.colors.error['100'],
      textColor: tokens.colors.error['500'],
      hoveredBgColor: tokens.colors.error['400'],
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.error['500'],
    },
    {
      color: 'warning',
      bgColor: tokens.colors.warning['100'],
      textColor: tokens.colors.warning['500'],
      hoveredBgColor: tokens.colors.warning['400'],
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.warning['500'],
    },
    {
      color: 'success',
      bgColor: tokens.colors.shade,
      textColor: tokens.colors.primary['500'],
      hoveredBgColor: tokens.colors.primary['400'],
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.primary['500'],
    },
    {
      color: 'grey',
      bgColor: tokens.colors.grey['100'],
      textColor: tokens.colors.grey['700'],
      hoveredBgColor: tokens.colors.grey['300'],
      textColor2: tokens.colors.grey['900'],
      clickedBgColor: tokens.colors.grey['400'],
    },
    {
      color: 'secondary',
      bgColor: tokens.colors.grey['900'],
      textColor: tokens.colors.white,
      hoveredBgColor: tokens.colors.black,
      textColor2: tokens.colors.white,
      clickedBgColor: tokens.colors.grey['800'],
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
      color: tokens.colors.grey['700'],
      borderColor: tokens.colors.grey['500'],
      '&:hover': {
        backgroundColor: tokens.colors.grey['800'],
        color: tokens.colors.white,
      },
      '&:focus': {
        backgroundColor: tokens.colors.grey['900'],
        color: tokens.colors.white,
      },
    },
  },
  ...textButtonVariants,
  {
    props: { disabled: true },
    style: {
      backgroundColor: `${tokens.colors.grey['100']} !important`,
      color: `${tokens.colors.grey['400']} !important`,
    },
  },
];
