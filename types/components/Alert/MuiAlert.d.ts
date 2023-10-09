import { BoxProps } from '@mui/material/Box';
import React from 'react';
import { CustomColors } from 'src/types';
export interface IMuiAlertProps extends BoxProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
    variant?: Omit<CustomColors, 'accent' | 'secondary' | 'primary'>;
}
declare const MuiAlert: ({ icon, children, variant, bgcolor, display, gap, p, ...props }: IMuiAlertProps) => React.JSX.Element;
export { MuiAlert };
