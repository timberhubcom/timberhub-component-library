import { AutocompleteProps as MuiAutocompleteProps, AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import React from 'react';
import { TextFieldProps } from '../TextField/TextField';
export interface OptionType {
    label: string;
}
export type AutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined = undefined> = Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> & {
    label?: string;
    helperText?: string;
    required?: boolean;
    error?: boolean;
    renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
    name?: string;
    textFieldProps?: TextFieldProps;
};
declare const Autocomplete: <T extends OptionType, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>({ renderInput, label, helperText, size, sx, required, name, error, placeholder, isOptionEqualToValue, textFieldProps, ...props }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => React.JSX.Element;
export { Autocomplete };
