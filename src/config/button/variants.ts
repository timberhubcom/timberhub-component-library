import { tokens } from '../../theme/tokens';
import type { ComponentsVariants } from '@mui/material/styles/variants';

export const buttonVariants: ComponentsVariants['MuiButton'] = [
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
];
