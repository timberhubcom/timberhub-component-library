import React, { HTMLInputTypeAttribute } from 'react';
declare type TextFieldProps = {
    name?: string;
    label?: string;
    placeholder?: string;
    labelClass?: string;
    description?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
    min?: number;
    max?: number;
    required?: boolean;
    error?: string;
};
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
