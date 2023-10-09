import { BoxProps } from '@mui/material/Box';
import React from 'react';
import { CustomColors } from 'src/types';
export interface AlertProps extends BoxProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
    variant?: Omit<CustomColors, 'accent' | 'secondary' | 'primary'>;
}
export declare const Alert: ({ icon, children, variant, bgcolor, display, gap, p, ...props }: AlertProps) => React.JSX.Element;
