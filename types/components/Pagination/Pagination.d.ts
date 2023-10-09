import React from 'react';
export interface PaginationProps {
    activePage?: number;
    totalPages?: number;
    visiblePages?: number;
    ellipsisThreshold?: number;
    onPageChange?: (page?: number) => void;
}
declare const Pagination: ({ activePage, onPageChange: _onPageChange, totalPages, visiblePages, ellipsisThreshold, }: PaginationProps) => React.JSX.Element;
export default Pagination;
