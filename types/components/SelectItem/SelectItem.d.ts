import React from 'react';
declare type SelectOption = {
    value: string;
    label: string;
};
declare type SelectItemProps = {
    label?: string;
    name: string;
    options: SelectOption[];
    placeholder?: string;
    labelClass?: string;
    onChange: (opt: SelectOption) => void;
    defaultValue?: SelectOption;
    searchable?: boolean;
    required?: boolean;
};
declare const SelectItem: React.FC<SelectItemProps>;
export default SelectItem;
