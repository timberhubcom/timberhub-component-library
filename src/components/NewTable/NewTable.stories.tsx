import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NewTable } from './NewTable';
import { columns, data, dataPagination } from './data';

export default {
  title: 'MUI/NewTable',
  component: NewTable,
  parameters: { actions: { argTypesRegex: null } },
} as Meta;

const Template: StoryFn<typeof NewTable> = (args) => <NewTable {...args} />;

export const Base = Template.bind({});
Base.args = {
  columns,
  data,
};

export const Empty = Template.bind({});
Empty.args = {
  columns,
  data: [],
};

export const Loading = Template.bind({});
Loading.args = {
  columns,
  data,
  isLoading: true,
};

export const ClickableRow = Template.bind({});
ClickableRow.args = {
  columns,
  data,
  onClick: (row) => console.log(row),
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  columns,
  data: dataPagination,
  onClick: (row) => console.log(row),
  pagination: {
    onChange: (page) => {
      console.log('Page: ', page);
    },
  },
};
