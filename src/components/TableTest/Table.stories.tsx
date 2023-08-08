import React from 'react';
import { StoryFn } from '@storybook/react';
import { Table } from './Table';
import { items, structure } from './data';

export default {
  title: 'MUI/TableTest',
  component: Table,
};

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Base = Template.bind({});
Base.args = {
  structure,
  items,
};

export const Empty = Template.bind({});
Empty.args = {
  structure,
  items: [],
};

export const Loading = Template.bind({});
Loading.args = {
  structure,
  loading: true,
  items,
};

export const HiddenHeader = Template.bind({});
HiddenHeader.args = {
  structure,
  items,
};

export const ClickableRow = Template.bind({});
ClickableRow.args = {
  structure,
  items,
  onClick: (row) => console.log(row),
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  structure,
  items,
  onClick: (row) => console.log(row),
  pagination: {
    activePage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log(page),
  },
};
