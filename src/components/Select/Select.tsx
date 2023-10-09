import MenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import React from 'react';
import { dropdownIconPath } from 'src/icons/dropdownIconPath';

import { outlinedInputStyles } from '../TextField/TextField';

interface Option {
  value: string;
  label: React.ReactNode;
}

export interface ExtendedSelectProps<T> extends Omit<SelectProps<T>, 'ref'> {
  options?: Option[];
  emptyOptionText?: React.ReactNode;
}

const StyledSelect = styled((props: ExtendedSelectProps<any>) => <MuiSelect {...props} />)(({ theme }) => ({
  fontFamily: 'Inter',
  color: theme.palette.grey['900'],
  '& .MuiSelect-select': {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
  },
  '&.MuiOutlinedInput-root': {
    ...outlinedInputStyles(theme),
  },
  '& .MuiSelect-icon path': {
    d: `path("${dropdownIconPath}")`,
  },
}));

// eslint-disable-next-line @typescript-eslint/comma-dangle
const ExtendedSelect = <T = unknown,>({
  options = [],
  children,
  required,
  emptyOptionText,
  ...props
}: ExtendedSelectProps<T>) => {
  const hasOptions = options?.length > 0;
  const showEmptyOption = !required && !!emptyOptionText;
  const selectOptions = [
    ...(showEmptyOption
      ? [
          {
            label: emptyOptionText ?? '',
            value: null,
          },
        ]
      : []),
    ...options,
  ];
  return (
    <StyledSelect required={required} {...props}>
      {hasOptions
        ? selectOptions?.map((option) => (
            <MenuItem key={option.value ?? ''} value={option.value ?? ''}>
              {option.label}
            </MenuItem>
          ))
        : children}
    </StyledSelect>
  );
};

export { ExtendedSelect as Select };
