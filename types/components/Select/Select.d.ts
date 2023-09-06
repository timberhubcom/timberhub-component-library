import { SelectProps } from '@mui/material/Select';
import React from 'react';
interface Option {
    value: string;
    label: React.ReactNode;
}
export interface ExtendedSelectProps<T> extends Omit<SelectProps<T>, 'ref'> {
    options?: Option[];
    emptyOptionText?: React.ReactNode;
}
declare const ExtendedSelect: <T = unknown>({ options, children, required, emptyOptionText, ...props }: ExtendedSelectProps<T>) => React.JSX.Element;
export { ExtendedSelect as Select };
