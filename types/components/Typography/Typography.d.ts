import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import React from 'react';
export interface TypographyProps extends MuiTypographyProps {
    /**
     * Applies the theme typography styles.
     * @default 'body_m'
     */
    variant?: MuiTypographyProps['variant'];
}
export declare const Typography: React.FC<TypographyProps>;
