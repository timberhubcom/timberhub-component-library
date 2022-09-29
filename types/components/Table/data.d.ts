/// <reference types="react" />
import { TableStructure } from './types';
export declare const structure: TableStructure;
export declare const rows: ({
    test: JSX.Element;
    dimensions?: undefined;
} | {
    test: string;
    dimensions: string;
} | {
    test: string;
    dimensions?: undefined;
})[];
