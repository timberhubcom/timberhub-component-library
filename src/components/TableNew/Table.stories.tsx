import React from 'react';
import { StoryFn } from '@storybook/react';
import { Table } from './Table';
import { createLayout } from './layout';
import { TableRow } from './TableRow';

// @ts-ignore
export default {
  title: 'MUI/TableNew',
  component: Table,
};

const layout = createLayout(['Product', 'Dimensions', 'Price p/m3', 'Delivery Date', 'Status']);
const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Base = Template.bind({});
Base.args = {
  layout,
  renderRow: (props) => <TableRow {...props} />,
};
