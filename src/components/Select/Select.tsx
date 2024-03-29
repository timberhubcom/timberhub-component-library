import React from 'react';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { outlinedInputStyles } from '../TextField/TextField';
import { dropdownIconPath } from 'src/icons/dropdownIconPath';

interface Option {
  value: string;
  label: React.ReactNode;
}

export interface ExtendedSelectProps<T extends unknown> extends Omit<SelectProps<T>, 'ref'> {
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

const ExtendedSelect = <T extends unknown = unknown>({
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
        ? selectOptions?.map((option, idx) => (
            <MenuItem key={option.value ?? ''} value={option.value ?? ''}>
              {option.label}
            </MenuItem>
          ))
        : children}
    </StyledSelect>
  );
};

export { ExtendedSelect as Select };
