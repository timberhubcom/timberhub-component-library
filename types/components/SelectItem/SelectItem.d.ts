import React from 'react';
import { SingleValue } from 'react-select';
export declare type SelectOption = {
    value: string;
    label: string;
};
declare type SelectItemProps = {
    name: string;
    className?: string;
    label?: string;
    options?: SelectOption[];
    placeholder?: string;
    labelClass?: string;
    onChange?: (opt: SingleValue<SelectOption>) => void;
    value?: SelectOption;
    defaultValue?: SelectOption;
    searchable?: boolean;
    required?: boolean;
    error?: string;
};
declare const SelectItem: React.FC<SelectItemProps>;
export default SelectItem;
