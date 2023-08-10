import React from 'react';
import {
  TableWrapper,
  TableCaption,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableFooter,
  TablePagination,
} from './components';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import Pagination, { PaginationProps } from '../Pagination/Pagination';
import Loader from '../Icons/Loader';
import { colors } from '../../theme/colors.enum';
import { css, cx } from '@emotion/css';
import { Skeleton } from '@mui/material';
import { tokens } from '../../theme/tokens';

interface TableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  onClick?: (row: Row<TData>) => void;
  renderEmpty?: () => React.ReactNode;
  pagination?: (data?: PaginationState) => PaginationProps;
}

export const Table = <TData extends object>({
  columns,
  data,
  isLoading,
  onClick,
  pagination,
  renderEmpty = () => 'No results',
}: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: !!pagination ? getPaginationRowModel() : undefined,
    // initialState: {
    //   pagination: { pageIndex: !!pagination ? (pagination()?.activePage ? pagination().activePage! - 1 : 0) : 0 },
    // },
  });

  // console.log(pagination?.().activePage ? pagination().activePage - 1 : 0);
  // console.log(table.getState().pagination.pageIndex + 1);

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
          <TableRow>
            <TableCell colSpan={columns.length}>
              <div className={styles.loading}>
                <Loader color={colors.POSITIVE} />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableWrapper>
    );
  }

  // Skeleton with header names
  // if (isLoading) {
  //   return (
  //     <TableWrapper>
  //       <TableHeader>
  //         {table.getHeaderGroups().map((headerGroup) => (
  //           <TableRow key={headerGroup.id}>
  //             {headerGroup.headers.map((header) => (
  //               <TableHead key={header.id}>
  //                 {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
  //               </TableHead>
  //             ))}
  //           </TableRow>
  //         ))}
  //       </TableHeader>
  //       <TableBody>
  //         {[...new Array(5)].map(() => (
  //           <TableRow key={crypto.randomUUID()}>
  //             {new Array(columns.length).fill(null).map(() => (
  //               <TableCell key={crypto.randomUUID()}>
  //                 <Skeleton variant="rectangular" />
  //               </TableCell>
  //             ))}
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </TableWrapper>
  //   );
  // }

  // Full Skeleton
  // if (isLoading) {
  //   return (
  //     <TableWrapper>
  //       <TableHeader>
  //         <TableRow>
  //           {[...new Array(columns.length)].map(() => (
  //             <TableHead key={crypto.randomUUID()}>
  //               <Skeleton variant="rectangular" />
  //             </TableHead>
  //           ))}
  //         </TableRow>
  //       </TableHeader>
  //       <TableBody>
  //         {[...new Array(5)].map(() => (
  //           <TableRow>
  //             {[...new Array(columns.length)].map(() => (
  //               <TableCell key={crypto.randomUUID()}>
  //                 <Skeleton variant="rectangular" />
  //               </TableCell>
  //             ))}
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </TableWrapper>
  //   );
  // }

  return (
    <TableWrapper>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className={styles.sticky}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
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

      {!!pagination ? (
        <TablePagination currentPage={table.getState().pagination.pageIndex + 1} totalPages={table.getPageCount()} />
      ) : null}
    </TableWrapper>
  );
};

const styles = {
  loading: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px;

    svg {
      width: 32px !important;
      height: 32px !important;
    }
  `,
  row: css`
    &:first-of-type {
      td {
        border: 1px solid ${tokens.colors.grey[200]};
        border-bottom: 0 solid;
        border-style: solid none;

        &:first-of-type {
          border-left-style: solid;
          border-top-left-radius: 10px;
        }

        &:last-of-type {
          border-right-style: solid;
          border-top-right-radius: 10px;
        }
      }
    }

    &:not(:first-of-type) {
      td {
        border: 1px solid ${tokens.colors.grey[200]};
        border-bottom: 0 solid;
        border-style: solid none;

        &:first-of-type {
          border-left-style: solid;
        }

        &:last-of-type {
          border-right-style: solid;
        }
      }
    }

    &:last-of-type {
      td {
        border: 1px solid ${tokens.colors.grey[200]};
        border-style: solid none;

        &:first-of-type {
          border-left-style: solid;
          border-bottom-left-radius: 10px;
        }

        &:last-of-type {
          border-right-style: solid;
          border-bottom-right-radius: 10px;
        }
      }
    }
  `,
  sticky: css`
    th,
    td {
      &:first-of-type {
        position: sticky;
        left: 0;
        z-index: 10;
        background-color: ${tokens.colors.white};
      }
    }
  `,
  active: css`
    cursor: pointer;
    &:hover {
      background-color: ${tokens.colors.grey[50]};
    }
  `,
  empty: css`
    text-align: center;
  `,
};
