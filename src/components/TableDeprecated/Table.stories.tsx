import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TableDeprecated } from './Table';
import { rows, structure } from './data';

export default {
  title: 'Components/TableDeprecated',
  component: TableDeprecated,
};

const Template: ComponentStory<typeof TableDeprecated> = (args) => <TableDeprecated {...args} />;

export const Base = Template.bind({});
Base.args = {
  structure,
  rows,
};

export const Empty = Template.bind({});
Empty.args = {
  structure,
  rows: [],
};

export const Loading = Template.bind({});
Loading.args = {
  structure,
  loading: true,
  rows,
};

export const HiddenHeader = Template.bind({});
HiddenHeader.args = {
  structure,
  rows,
  mobileHeader: 'hidden',
};

export const ClickableRow = Template.bind({});
ClickableRow.args = {
  structure,
  rows,
  clickableRow: true,
  onClick: (row) => console.log(row),
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  structure,
  rows,
  clickableRow: true,
  onClick: (row) => console.log(row),
  pagination: true,
  paginationData: {
    activePage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log(page),
  },
};
