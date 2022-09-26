import React from 'react';
declare type CheckboxOptionType = {
    name: string;
    children?: React.ReactNode;
};
declare type CheckboxProps = {
    name?: string;
    label?: string;
    labelClass?: string;
    option: CheckboxOptionType;
    description?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
