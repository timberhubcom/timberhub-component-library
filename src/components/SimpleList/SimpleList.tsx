import React from 'react';
import { Divider, Paper, Stack } from '@mui/material';
import { Typography } from '../Typography';
import { nanoid } from 'nanoid/non-secure';

type SimpleItem = {
  text: string;
  style?: 'default' | 'bold';
};

export type SimpleListProps = {
  items: SimpleItem[][];
  className?: string;
};

export const SimpleList = React.forwardRef<HTMLDivElement, SimpleListProps>(function List(
  { items, className, ...props },
  ref,
) {
  return (
    <Paper variant="outlined" className={className} ref={ref}>
      <Stack divider={<Divider />}>
        {items.map((item) => (
          <Stack direction="row" justifyContent="space-between" key={nanoid()} p={2} pr={1.5}>
            {item.map((cell: SimpleItem) => (
              <Typography variant={cell?.style === 'bold' ? 'headline_ss_xs' : 'body_s'} key={nanoid()}>
                {cell.text}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
});

export default SimpleList;
