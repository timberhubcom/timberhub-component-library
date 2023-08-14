import React from 'react';
import {
  TableWrapper,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TablePagination,
  TablePaginationProps,
} from './components';
import {
  ColumnDef,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { css, cx } from '@emotion/css';
import { Skeleton } from '@mui/material';
import { tokens } from '../../theme/tokens';

interface TableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  onClick?: (row: Row<TData>) => void;
  renderEmpty?: () => React.ReactNode;
  pagination?: TablePaginationProps;
}

export const Table = <TData extends object>({
  columns,
  data,
  isLoading,
  onClick,
  pagination,
  renderEmpty = () => 'No results',
}: TableProps<TData>) => {
  const columnResizeMode: ColumnResizeMode = 'onChange';

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: !!pagination ? getPaginationRowModel() : undefined,
  });

  const paginationData = table.getState().pagination;

  if (isLoading) {
    return (
      <TableWrapper>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {[...new Array(10)].map(() => (
            <TableRow key={crypto.randomUUID()}>
              {[...new Array(columns.length)].map(() => (
                <TableCell key={crypto.randomUUID()}>
                  <Skeleton variant="rectangular" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    );
  }

  return (
    <React.Fragment>
      <TableWrapper>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className={styles.sticky}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ width: header.getSize(), position: 'relative' }}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={styles.resizer(header.column.getIsResizing())}
                  />
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length > 0 ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-testid={`row-${index}`}
                onClick={!!onClick ? () => onClick(row) : undefined}
                className={cx(styles.row, styles.sticky, { [styles.active]: !!onClick })}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className={styles.empty}>
                {renderEmpty()}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableWrapper>
      {!!pagination ? (
        <TablePagination
          currentPage={pagination.currentPage || paginationData.pageIndex + 1}
          totalPages={pagination.totalPages || table.getPageCount()}
          onChange={(page) => {
            table.setPageIndex(page);
            pagination.onChange?.(page + 1);
          }}
        />
      ) : null}
    </React.Fragment>
  );
};

const rowTd = (type: 'first' | 'middle' | 'last') => css`
  td {
    border: 1px solid ${tokens.colors.grey[200]};
    ${type !== 'last' &&
    css`
      border-bottom: 0 solid;
    `};
    border-style: solid none;

    &:first-of-type {
      border-left-style: solid;
      ${type === 'first' &&
      css`
        border-top-left-radius: 10px;
      `};
      ${type === 'last' &&
      css`
        border-bottom-left-radius: 10px;
      `};
    }

    &:last-of-type {
      border-right-style: solid;
      ${type === 'first' &&
      css`
        border-top-right-radius: 10px;
      `};
      ${type === 'last' &&
      css`
        border-bottom-right-radius: 10px;
      `};
    }
  }
`;

const styles = {
  row: css`
    &:first-of-type {
      ${rowTd('first')}
    }

    &:not(:first-of-type) {
      ${rowTd('middle')}
    }

    &:last-of-type {
      ${rowTd('last')}
    }
  `,
  sticky: css`
    th,
    td {
      &:first-of-type {
        position: sticky !important;
        left: 0;
        z-index: 10;
        background-color: ${tokens.colors.white};
      }
    }
  `,
  active: css`
    cursor: pointer;

    &:hover {
      td {
        background-color: #f7f7f7; // tokens.colors.grey[50] includes opacity, thus making it not work. Colors shouldn't have opacity
      }
    }
  `,
  empty: css`
    text-align: center;
  `,
  resizer: (isActive: boolean) => css`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${tokens.colors.grey[50]};
    cursor: col-resize;
    user-select: none;
    touch-action: none;
    transition: all 150ms ease 0ms;

    &:hover {
      transform: scaleX(2);
      background-color: ${tokens.colors.primary[500]};
    }

    ${isActive &&
    css`
      transform: scaleX(2);
      background-color: ${tokens.colors.primary[400]};
    `}
  `,
};
