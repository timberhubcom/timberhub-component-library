import React from 'react';
export type CheckboxOptionType = {
    name: string;
    value: string;
    children?: React.ReactNode;
};
type CheckboxOptionTypeOptionalValue = Omit<CheckboxOptionType, 'value'> & {
    value?: string;
};
type CheckboxProps = {
    name?: string;
    label?: string;
    labelClass?: string;
    option?: CheckboxOptionTypeOptionalValue;
    description?: string;
    defaultValue?: boolean;
    value?: boolean;
    disabled?: boolean;
    onClick?: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
