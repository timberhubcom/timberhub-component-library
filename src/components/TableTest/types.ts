import React, { ReactNode } from 'react';
import { PaginationProps } from '../Pagination/Pagination';

export type TableRowItem = { [key: string]: string | React.ReactNode };

export type HeaderItem = {
  title: ReactNode;
  name: string;
  key?: string;
  width: number;
  mobile_width?: number;
  show_title: boolean;
  show_on_hover?: boolean;
};

export type TableStructure = {
  header: HeaderItem[];
};

export type TableProps = {
  structure: TableStructure;
  loading?: boolean;
  items: TableRowItem[];
  onClick?: (row: TableRowItem) => void;
  renderEmpty?: () => ReactNode;
  pagination?: PaginationProps;
};
