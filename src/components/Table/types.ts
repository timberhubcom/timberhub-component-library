import React from 'react';

export type TableRowItem = { [key: string]: string | React.ReactNode };

export type HeaderItem = {
  title: string;
  name: string;
  key: string;
  width: number;
  show_title: boolean;
};

export type TableStructure = {
  header: HeaderItem[];
};

export type TableProps = {
  structure: TableStructure;
  rows: TableRowItem[];
  emptyText?: string;
};
