import React from 'react';
import { TableStructure } from './types';

export const structure: TableStructure = {
  header: [
    {
      title: 'Col 1',
      name: 'col_1',
      key: 'col_1',
      width: 2,
      mobile_width: 3,
      show_title: true,
      show_on_hover: false,
    },
    {
      title: 'Col 2',
      name: 'col_2',
      key: 'col_2',
      width: 1,
      mobile_width: 1,
      show_title: true,
      show_on_hover: false,
    },
    {
      title: 'Col 3',
      name: 'col_3',
      key: 'col_3',
      width: 1,
      mobile_width: 1,
      show_title: true,
      show_on_hover: false,
    },
    {
      title: 'Col 4',
      name: 'col_4',
      key: 'col_4',
      width: 1,
      mobile_width: 3,
      show_title: true,
      show_on_hover: false,
    },
  ],
};

export const rows = [
  { key: '1', col_1: <div>React node</div>, col_3: 'data 3' },
  { key: '2', col_1: 'data 1', col_2: 'data 2', col_4: <div>data 4</div> },
  { key: '3', col_1: 'data 1', col_3: 'data 3' },
  { key: '4', col_1: 'data 1', col_3: 'data 3' },
  { key: '5', col_1: 'data 1', col_4: 'data 4' },
  { key: '6', col_1: 'data 1', col_2: 'data 2' },
];
