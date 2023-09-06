import { ColumnDef, Row } from '@tanstack/react-table';
import React from 'react';
import { TablePaginationProps } from './components';
export type NewTableProps<TData> = {
    columns: ColumnDef<TData>[];
    data: TData[];
    isLoading?: boolean;
    loadingRows?: number;
    onClick?: (row: Row<TData>) => void;
    renderEmpty?: () => React.ReactNode;
    pagination?: TablePaginationProps;
};
export declare const NewTable: <TData extends object>({ columns, data, isLoading, loadingRows, onClick, pagination, renderEmpty, }: NewTableProps<TData>) => React.JSX.Element;
