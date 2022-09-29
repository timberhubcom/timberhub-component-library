import React from 'react';
export declare type TableRowItem = {
    [key: string]: string | React.ReactNode;
};
export declare type HeaderItem = {
    title: string;
    name: string;
    key: string;
    width: number;
    show_title: boolean;
};
export declare type TableStructure = {
    header: HeaderItem[];
};
export declare type TableProps = {
    structure: TableStructure;
    rows: TableRowItem[];
    emptyText?: string;
};
