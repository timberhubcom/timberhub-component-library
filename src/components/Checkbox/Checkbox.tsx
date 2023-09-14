import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import React from 'react';

export type CheckboxProps = MuiCheckboxProps;

const sizeMapper = {
  small: 14,
  medium: 16,
  large: 24,
};

const Svg: React.FC = ({ children }) => (
  <svg
    width={'100%'}
    height={'100%'}
    viewBox={'0 0 14 14'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    preserveAspectRatio={'xMidYMid meet'}>
    {children}
  </svg>
);

const UncheckedIcon = (
  <Svg>
    <rect x={'0.5'} y={'0.5'} width={'13'} height={'13'} rx={'2.5'} stroke={'black'} strokeOpacity={'0.13'} />
  </Svg>
);

const CheckedIcon = (
  <Svg>
    <rect width={'14'} height={'14'} rx={'3'} fill={'currentColor'} />
    <path
      d={'M5.24994 9.45L2.79994 7L1.98328 7.81666L5.24994 11.0833L12.2499 4.08333L11.4333 3.26666L5.24994 9.45Z'}
      fill={'white'}
    />
  </Svg>
);

export const Checkbox = ({ size = 'medium', sx, ...props }: CheckboxProps) => {
  const svgSize = sizeMapper[size] ?? sizeMapper.medium;
  return (
    <MuiCheckbox
      size={size}
      sx={{
        padding: 0,
        marginInline: '9px',
        width: svgSize,
        ...sx,
      }}
      disableRipple
      icon={UncheckedIcon}
      checkedIcon={CheckedIcon}
      {...props}
    />
  );
};
