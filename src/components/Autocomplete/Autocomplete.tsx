import React from 'react';
import MuiAutocomplete, {
  AutocompleteRenderInputParams,
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete';
import { MuiTextField } from '../TextField';
import { tokens } from '../../theme/tokens';
import { TextFieldProps } from '../TextField/MuiTextField';

export interface OptionType {
  label: string;
}

export type AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
> = Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> & {
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  name?: string;
  textFieldProps?: TextFieldProps;
};

const Autocomplete = <
  T extends OptionType,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  renderInput,
  label = '',
  helperText,
  size = 'small',
  sx = {},
  required,
  name,
  error,
  placeholder,
  isOptionEqualToValue,
  textFieldProps = {},
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  return (
    <MuiAutocomplete
      size={size}
      sx={{
        '& .MuiAutocomplete-popupIndicator path': {
          d: 'path("M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z")',
        },
        '& .MuiAutocomplete-popupIndicatorOpen svg': {
          fill: tokens.colors.primary[400],
        },
        '& .Mui-error .MuiAutocomplete-popupIndicator svg': {
          fill: tokens.colors.error[400],
        },
        ...sx,
      }}
      renderInput={
        renderInput ||
        ((params) => (
          <MuiTextField
            {...params}
            label={label}
            helperText={helperText}
            required={required}
            error={error}
            name={name}
            placeholder={placeholder}
            {...textFieldProps}
          />
        ))
      }
      isOptionEqualToValue={(opt, val) => {
        if (isOptionEqualToValue && typeof isOptionEqualToValue === 'function') {
          return isOptionEqualToValue(opt as T, val as T);
        }
        if (typeof opt === 'string') return opt === val;
        if (typeof opt === 'object' && typeof val === 'string') return opt?.label === val;
        if (typeof opt === 'object' && typeof val === 'object' && opt?.label) return opt?.label === val?.label;
        return false;
      }}
      {...props}
    />
  );
};

export { Autocomplete };
