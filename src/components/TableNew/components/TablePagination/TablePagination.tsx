import React, { useMemo } from 'react';
import { Table, Updater } from '@tanstack/react-table';
import { css } from '@emotion/css';
import { tokens } from '../../../../theme/tokens';
import { TablePaginationButton } from './components/TablePaginationButton';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface TablePaginationProps {
  currentPage?: number;
  totalPages?: number;
  visiblePages?: number;
  onChange?: (page: Updater<number>) => void;
}

export const TablePagination = ({ currentPage = 1, totalPages, onChange, visiblePages = 5 }: TablePaginationProps) => {
  if (!totalPages || totalPages < 2) {
    return null;
  }

  const onClick = (page: number) => {
    if (onChange) {
      onChange(page);
    }
  };

  const pageRange = useMemo(() => {
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = currentPage - Math.floor(visiblePages / 2);

    if (startPage < 2) {
      startPage = 2;
    } else if (startPage + visiblePages > totalPages) {
      startPage = totalPages - visiblePages + 1;
    }

    return Array.from({ length: visiblePages }, (_, i) => i + startPage);
  }, [currentPage, totalPages, visiblePages]);

  console.log(pageRange);

  return (
    <div className={styles.root} data-testid={'pagination'}>
      <TablePaginationButton disabled={currentPage === 1} onClick={() => onClick(currentPage - 1)}>
        <KeyboardArrowLeft className={styles.icon} />
      </TablePaginationButton>

      <TablePaginationButton active={currentPage === 1} onClick={() => onClick(0)}>
        1
      </TablePaginationButton>
      {currentPage > visiblePages && <TablePaginationButton>&hellip;</TablePaginationButton>}
      {pageRange.map((el) => (
        <TablePaginationButton active={currentPage === el} onClick={() => onClick(el)}>
          {el}
        </TablePaginationButton>
      ))}

      {currentPage < totalPages - visiblePages && <TablePaginationButton>&hellip;</TablePaginationButton>}
      <TablePaginationButton active={currentPage === totalPages} onClick={() => onClick(totalPages)}>
        {totalPages}
      </TablePaginationButton>
      <TablePaginationButton disabled={currentPage === totalPages} onClick={() => onClick(currentPage + 1)}>
        <KeyboardArrowRight className={styles.icon} />
      </TablePaginationButton>
    </div>
  );
};

const styles = {
  root: css`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 20px;
    position: sticky;
    left: 0;

    svg {
      height: 13px;
      width: auto;
      display: table;
    }

    & > * {
      &:not(:last-child) {
        margin-right: 4px;
      }
    }

    .currentPage {
      color: ${tokens.colors.black};
      border: 1px solid #00000021;
      width: 34px;
      height: 34px;
    }
  `,
  icon: css`
    width: 24px !important;
    height: 24px !important;
  `,

  last: css`
    width: 34px;
    height: 34px;
    background: rgba(${tokens.colors.primary[400]}, 0.1);
  `,
};
