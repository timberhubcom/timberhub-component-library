import React from 'react';
import { RadioOptionType } from '../Radio/Radio';
declare type RadioGroupProps = {
    label?: string;
    labelClass?: string;
    options: RadioOptionType[];
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    resetText?: string;
};
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
