import React from 'react';
import { PaginationProps } from './Pagination';
declare const _default: {
    title: string;
    component: ({ activePage, onPageChange: _onPageChange, totalPages, visiblePages, ellipsisThreshold, }: PaginationProps) => React.JSX.Element;
};
export default _default;
export declare const Default: {
    args: {
        activePage: number;
        totalPages: number;
    };
    render: (args: PaginationProps) => React.JSX.Element;
};
export declare const WithEllipse: {
    args: {
        activePage: number;
        totalPages: number;
    };
    render: (args: PaginationProps) => React.JSX.Element;
};
export declare const WithEllipseFourVisible: {
    args: {
        activePage: number;
        totalPages: number;
        visiblePages: number;
    };
    render: (args: PaginationProps) => React.JSX.Element;
};
export declare const WithEllipseTenVisible: {
    args: {
        activePage: number;
        totalPages: number;
        visiblePages: number;
    };
    render: (args: PaginationProps) => React.JSX.Element;
};
