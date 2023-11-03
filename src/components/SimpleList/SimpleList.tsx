import React from 'react';
import { Paper, TableContainer, TableBody, TableRow, TableCell, Table } from '@mui/material';
import { Typography } from '../Typography';
import { getRandomInt } from '../../utils/utils';

type SimpleItem = {
  text: string;
  style?: 'default' | 'bold';
}

export type SimpleListProps = {
  items: SimpleItem[][];
  className?: string;
}

export const SimpleList = React.forwardRef<HTMLDivElement, SimpleListProps>(function List(
  { items, className, ...props },
  ref,
) {
  type TableCellProps = 'center' | 'left' | 'right' | 'inherit' | 'justify';
  const getAlignment = (itemIndex: number, itemsLength: number) => {
    let alignment = 'center';
    if (itemIndex === 0) {
      alignment = 'left';
    } else if (itemIndex+1 === itemsLength) {
      alignment = 'right';
    }
    return alignment as TableCellProps;
  }

  return (
    <TableContainer component={Paper} variant="outlined" className={className} ref={ref}>
      <Table sx={{width: '100%'}}>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={getRandomInt()}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {item.map((cell: SimpleItem, index) => (
              <TableCell key={getRandomInt()} align={getAlignment(index, item.length)}>
                <Typography variant={cell?.style === 'bold' ? 'headline_ss_xs' : 'body_s'}>
                  {cell.text}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
          ))}
      </TableBody>
      </Table>
    </TableContainer>
  )
})

export default SimpleList;
