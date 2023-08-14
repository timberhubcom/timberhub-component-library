import React from 'react';
import { Updater } from '@tanstack/react-table';
import { css } from '@emotion/css';
import { TablePaginationButton } from './components/TablePaginationButton';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';

export interface TablePaginationProps {
  currentPage?: number;
  totalPages?: number;
  visiblePages?: number; // Not counting the first & last page
  onChange?: (page: Updater<number>) => void;
}

export const TablePagination = ({ currentPage = 1, totalPages, onChange, visiblePages = 5 }: TablePaginationProps) => {
  if (!totalPages || totalPages < 2) {
    return null;
  }

  const pages = React.useMemo(() => {
    if (visiblePages === 1) {
      return [currentPage];
    }

    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = currentPage - Math.floor(visiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
    } else if (startPage + visiblePages > totalPages) {
      startPage = totalPages - visiblePages + 1;
    }

    const block = Array.from({ length: visiblePages }, (_, i) => i + startPage);

    const blockStart = !block.includes(1);
    const blockEnd = totalPages > block.length && !block.includes(totalPages);

    return [blockStart, ...block, blockEnd].filter((el) => !!el);
  }, [currentPage, totalPages, visiblePages]);

  return (
    <div className={styles.root} data-testid={'pagination'}>
      <TablePaginationButton disabled={currentPage === 1} onClick={onChange ? () => onChange(0) : undefined}>
        <KeyboardDoubleArrowLeft className={styles.icon} />
      </TablePaginationButton>
      <TablePaginationButton
        disabled={currentPage === 1}
        onClick={onChange ? () => onChange(currentPage - 2) : undefined}
      >
        <KeyboardArrowLeft className={styles.icon} />
      </TablePaginationButton>

      {pages.map((el) => (
        <TablePaginationButton
          key={crypto.randomUUID()}
          active={currentPage === el}
          onClick={typeof el === 'number' && onChange ? () => onChange(el - 1) : undefined}
        >
          {typeof el === 'number' ? el : '...'}
        </TablePaginationButton>
      ))}
      <TablePaginationButton
        disabled={currentPage === totalPages}
        onClick={onChange ? () => onChange(currentPage) : undefined}
      >
        <KeyboardArrowRight className={styles.icon} />
      </TablePaginationButton>
      <TablePaginationButton
        disabled={currentPage === totalPages}
        onClick={onChange ? () => onChange(totalPages - 1) : undefined}
      >
        <KeyboardDoubleArrowRight className={styles.icon} />
      </TablePaginationButton>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    margin-top: 16px;
    gap: 4px;
  `,
  icon: css`
    width: 24px;
    height: 24px;
  `,
};
