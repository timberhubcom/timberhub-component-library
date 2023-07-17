import React from 'react';
import MuiAutocomplete, {
  AutocompleteRenderInputParams,
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete';
import { MuiTextField } from '../TextField';
import { tokens } from '../../theme/tokens';
import { TextFieldProps } from '../TextField/MuiTextField';

export interface AutocompleteProps<T> extends Omit<MuiAutocompleteProps<T, false, false, false, 'div'>, 'renderInput'> {
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  name?: string;
  textFieldProps?: TextFieldProps;
}

const Autocomplete = <T extends {}>({
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
}: AutocompleteProps<T>) => {
  return (
    <MuiAutocomplete
      size={size}
      sx={{
        '& .MuiAutocomplete-popupIndicator path': {
          d: 'path("M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z")',
        },
        '& .MuiAutocomplete-popupIndicatorOpen path': {
          fill: tokens.colors.primary,
        },
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
        if (isOptionEqualToValue) return isOptionEqualToValue(opt, val);
        // @ts-ignore
        if (typeof opt === 'object' && opt?.label) return opt?.label === val;
        return false;
      }}
      {...props}
    />
  );
};

export { Autocomplete };
