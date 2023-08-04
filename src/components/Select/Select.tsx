import React from 'react';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Color } from '@mui/material';
import { outlinedInputStyles } from '../TextField/MuiTextField';
import { dropdownIconPath } from 'src/icons/dropdownIconPath';

interface Option {
  value: string;
  label: React.ReactNode;
}

export interface ExtendedSelectProps<T extends unknown> extends Omit<SelectProps<T>, 'ref'> {
  options?: Option[];
}

const StyledSelect = styled((props: ExtendedSelectProps<any>) => <MuiSelect {...props} />)(({ theme }) => ({
  fontFamily: 'Inter',
  color: theme.palette.grey['900'],
  '&.MuiOutlinedInput-root': {
    ...outlinedInputStyles(theme),
  },
  '& .MuiSelect-icon path': {
    d: `path(${dropdownIconPath})`,
  },
}));

const ExtendedSelect = <T extends unknown = unknown>({ options, children, ...props }: ExtendedSelectProps<T>) => {
  const hasOptions = options?.length > 0;
  return (
    <StyledSelect {...props}>
      {hasOptions
        ? options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        : children}
    </StyledSelect>
  );
};

export { ExtendedSelect as Select };
