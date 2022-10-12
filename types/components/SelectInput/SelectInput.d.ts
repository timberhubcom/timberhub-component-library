import React from 'react';
import { SingleValue } from 'react-select';
declare type SelectOption = {
    value: string;
    label: string;
};
declare type SelectInputProps = {
    name: string;
    label?: string;
    options?: SelectOption[];
    placeholder?: string;
    labelClass?: string;
    onChange?: (opt: SingleValue<SelectOption>) => void;
    defaultValue?: SelectOption;
    searchable?: boolean;
    required?: boolean;
};
declare const SelectInput: React.FC<SelectInputProps>;
export default SelectInput;
