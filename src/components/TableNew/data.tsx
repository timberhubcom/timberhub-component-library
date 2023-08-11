import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'email',
    header: 'Email',
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
    accessorKey: 'random2',
    header: 'Random2',
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
];

export const data: Payment[] = [...new Array(504)].map((_, index) => ({
  id: crypto.randomUUID(),
  amount: index + 100,
  email: `user${index}@email${index}.com`,
  status: index === 0 ? 'pending' : index % 2 === 0 ? 'success' : 'failed',
  random: 'hola',
  random2: 'hola',
}));
