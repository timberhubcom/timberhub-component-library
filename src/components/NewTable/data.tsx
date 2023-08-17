import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { Button } from '../Button';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
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

export const data: Payment[] = [...new Array(10)].map((_, index) => ({
  id: index.toString(),
  amount: index + 100,
  email: `user${index}@email${index}.com`,
  status: index === 0 ? 'pending' : index % 2 === 0 ? 'success' : 'failed',
  random: 'hola',
}));

export const dataPagination: Payment[] = [...new Array(1005)].map((_, index) => ({
  id: index.toString(),
  amount: index + 100,
  email: `user${index}@email${index}.com`,
  status: index === 0 ? 'pending' : index % 2 === 0 ? 'success' : 'failed',
  random: 'hola',
}));
