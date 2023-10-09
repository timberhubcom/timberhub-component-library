import React from 'react';
import { TableStructure } from './types';
export declare const structure: TableStructure;
export declare const rows: ({
    key: string;
    col_1: React.JSX.Element;
    col_3: string;
    col_2?: undefined;
    col_4?: undefined;
} | {
    key: string;
    col_1: string;
    col_2: string;
    col_4: React.JSX.Element;
    col_3?: undefined;
} | {
    key: string;
    col_1: string;
    col_3: string;
    col_2?: undefined;
    col_4?: undefined;
} | {
    key: string;
    col_1: string;
    col_4: string;
    col_3?: undefined;
    col_2?: undefined;
} | {
    key: string;
    col_1: string;
    col_2: string;
    col_3?: undefined;
    col_4?: undefined;
})[];
