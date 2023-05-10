import React from 'react';
import { PaginationProps } from '../Pagination/Pagination';

export type TableRowItem = { [key: string]: string | React.ReactNode };

export type HeaderItem = {
  title: string;
  name: string;
  key: string;
  width: number;
  show_title: boolean;
  show_on_hover: boolean;
};

export type TableStructure = {
  header: HeaderItem[];
};

export type TableProps = {
  structure: TableStructure;
  loading?: boolean;
  rows: TableRowItem[];
  clickableRow?: boolean;
  size?: 'default' | 'small';
  onClick?: (row: TableRowItem) => void;
  emptyText?: string;
  pagination?: boolean;
  paginationData?: PaginationProps;
};
