import React, { ReactNode } from 'react';
export declare type TableRowItem = {
    [key: string]: string | React.ReactNode;
};
export declare type HeaderItem = {
    title: string;
    name: string;
    key: string;
    width: number;
    show_title: boolean;
    show_on_hover?: boolean;
};
export declare type TableStructure = {
    header: HeaderItem[];
};
export declare type TableProps = {
    structure: TableStructure;
    loading?: boolean;
    rows: TableRowItem[];
    clickableRow?: boolean;
    size?: 'default' | 'small';
    onClick?: (row: TableRowItem) => void;
    emptyText?: ReactNode;
};
