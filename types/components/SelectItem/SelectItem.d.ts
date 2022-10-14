import React from 'react';
import { SingleValue } from 'react-select';
export declare type SelectOption = {
    value: string;
    label: string;
};
declare type SelectItemProps = {
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
declare const SelectItem: React.FC<SelectItemProps>;
export default SelectItem;
