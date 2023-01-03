import React from 'react';
export declare type CheckboxOptionType = {
    name: string;
    value: string;
    children?: React.ReactNode;
};
declare type CheckboxProps = {
    name?: string;
    label?: string;
    labelClass?: string;
    option?: CheckboxOptionType;
    description?: string;
    defaultValue?: boolean;
    value?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    required?: boolean;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
