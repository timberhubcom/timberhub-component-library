import React from 'react';
import { CheckboxOptionType } from '../Checkbox/Checkbox';
declare type CheckboxGroupProps = {
    name?: string;
    label?: string;
    labelClass?: string;
    options: CheckboxOptionType[];
    description?: string;
    defaultValues?: {
        [key: string]: string;
    };
    disabled?: boolean;
    required?: boolean;
    error?: string;
};
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
