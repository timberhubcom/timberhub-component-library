import React from 'react';
declare const _default: {
    title: string;
    component: <T extends import("./Autocomplete").OptionType, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>({ renderInput, label, helperText, size, sx, required, name, error, placeholder, isOptionEqualToValue, textFieldProps, ...props }: import("./Autocomplete").AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => React.JSX.Element;
};
export default _default;
export declare const Base: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, Omit<import("@mui/material").AutocompleteProps<import("./Autocomplete").OptionType, boolean | undefined, boolean | undefined, boolean | undefined, "div">, "renderInput"> & {
    label?: string | undefined;
    helperText?: string | undefined;
    required?: boolean | undefined;
    error?: boolean | undefined;
    renderInput?: ((params: import("@mui/material").AutocompleteRenderInputParams) => React.ReactNode) | undefined;
    name?: string | undefined;
    textFieldProps?: import("..").TextFieldProps | undefined;
}>;
