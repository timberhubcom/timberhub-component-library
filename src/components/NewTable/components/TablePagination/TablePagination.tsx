import React from 'react';
import { css } from '@emotion/css';
import { TablePaginationButton } from './components/TablePaginationButton';
import { muiTheme } from '../../../../config';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

export type TablePaginationProps = {
  currentPage?: number;
  totalPages?: number;
  visiblePages?: number;
  onChange?: (page: number) => void;
};

export const TablePagination = ({ currentPage = 1, totalPages, onChange, visiblePages = 5 }: TablePaginationProps) => {
  const isSmallScreen = useMediaQuery(() => muiTheme.breakpoints.down('sm'));

  const visiblePagesTransformed = isSmallScreen ? 3 : visiblePages;

  if (!totalPages || totalPages < 2) {
    return null;
  }

  const pages = React.useMemo(() => {
    if (visiblePagesTransformed === 1) {
      return [currentPage];
    }

    if (totalPages <= visiblePagesTransformed) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = currentPage - Math.floor(visiblePagesTransformed / 2);

    if (startPage < 1) {
      startPage = 1;
    } else if (startPage + visiblePagesTransformed > totalPages) {
      startPage = totalPages - visiblePagesTransformed + 1;
    }

    const block = Array.from({ length: visiblePagesTransformed }, (_, i) => i + startPage);

    const blockStart = !isSmallScreen && !block.includes(1);
    const blockEnd = !isSmallScreen && totalPages > block.length && !block.includes(totalPages);

    return [blockStart, ...block, blockEnd].filter((el) => !!el);
  }, [currentPage, totalPages, visiblePagesTransformed, isSmallScreen]);

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
