import React from 'react';
import { StoryFn } from '@storybook/react';
import { Table } from './Table';

// @ts-ignore
export default {
  title: 'MUI/Components/TableNew',
  component: Table,
};

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Base = Template.bind({});
