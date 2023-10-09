import React from 'react';
export type RadioOptionType = {
    name: string;
    value: string;
    children?: React.ReactNode;
};
type RadioProps = {
    option: RadioOptionType;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
