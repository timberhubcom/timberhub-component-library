import React from 'react';
import { ComponentStory } from '@storybook/react';
import Table from './Table';
import { rows, structure } from './data';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

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
  rows: [],
};

export const ClickableRow = Template.bind({});
ClickableRow.args = {
  structure,
  rows,
  clickableRow: true,
  onClick: (row) => console.log(row),
};
