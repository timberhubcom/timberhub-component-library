import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NewTable } from './NewTable';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../Button';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'email',
    header: 'email',
    minSize: 200,
    maxSize: 300,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'random',
    header: 'Random',
  },
  {
    accessorKey: 'amount',
    header: () => <div>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  { id: 'action', enablePinning: true, cell: () => <Button>View</Button> },
];

const data: Payment[] = [...new Array(10)].map((_, index) => ({
  id: index.toString(),
  amount: index + 100,
  email: `user${index}@email${index}.com`,
  status: index === 0 ? 'pending' : index % 2 === 0 ? 'success' : 'failed',
  random: 'hola',
}));

const dataPagination: Payment[] = [...new Array(1005)].map((_, index) => ({
  id: index.toString(),
  amount: index + 100,
  email: `user${index}@email${index}.com`,
  status: index === 0 ? 'pending' : index % 2 === 0 ? 'success' : 'failed',
  random: 'hola',
}));
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
