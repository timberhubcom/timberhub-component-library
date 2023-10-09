import React from 'react';
interface TablePaginationArrowProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    active?: boolean;
    background?: boolean;
    onClick?: (page?: number) => void;
}
export declare const TablePaginationButton: ({ active, background, children, onClick, ...props }: TablePaginationArrowProps) => React.JSX.Element;
export {};
