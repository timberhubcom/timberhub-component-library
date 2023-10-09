import React from 'react';
type SwitchOptionType = {
    name: string;
    children?: React.ReactNode;
};
type SwitchProps = {
    label?: string;
    name?: string;
    option: SwitchOptionType;
    labelClass?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
};
declare const Switch: React.FC<SwitchProps>;
export default Switch;
