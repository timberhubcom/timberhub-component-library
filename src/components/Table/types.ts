import React from 'react';

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
  rows: TableRowItem[];
  clickableRow?: boolean;
  size?: 'default' | 'small';
  onClick?: (row: TableRowItem) => void;
  emptyText?: string;
};
