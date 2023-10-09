import React from 'react';
export type TablePaginationProps = {
    currentPage?: number;
    totalPages?: number;
    visiblePages?: number;
    onChange?: (page: number) => void;
};
export declare const TablePagination: ({ currentPage, totalPages, onChange, visiblePages }: TablePaginationProps) => React.JSX.Element | null;
