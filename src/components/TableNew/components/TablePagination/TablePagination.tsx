import React from 'react';
import { Table } from '@tanstack/react-table';
import { css } from '@emotion/css';
import { tokens } from '../../../../theme/tokens';
import { TablePaginationArrow } from './components/TablePaginationArrow';

interface TablePaginationProps {
  currentPage?: number;
  totalPages?: number;
  visiblePages?: number; // Number of visible page buttons
  ellipsisThreshold?: number; // Minimum number of pages required to display ellipses
  onChange?: (page?: number) => void;
}

export const TablePagination = ({
  currentPage = 1,
  totalPages,
  onChange,
  visiblePages = 5,
  ellipsisThreshold = 1,
}: TablePaginationProps) => {
  if (!totalPages || totalPages < 2) {
    return null;
  }

  const pageRange = React.useMemo(() => {
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = currentPage - Math.floor(visiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
    } else if (startPage + visiblePages > totalPages) {
      startPage = totalPages - visiblePages + 1;
    }

    return Array.from({ length: visiblePages }, (_, i) => i + startPage);
  }, [currentPage, totalPages, visiblePages]);

  console.log(pageRange);

  return (
    <div className={styles.root} data-testid={'pagination'}>
      {!!currentPage && currentPage > 1 && <TablePaginationArrow direction={'left'} disabled={true} />}

      <TablePaginationArrow />
      {/*{pageRange[0] > ellipsisThreshold && <button onClick={() => onPageChange(pageRange[0] - 1)}>&hellip;</button>}*/}
      {/*{pageRange.map((item) => (*/}
      {/*  <div className={styles.pageWrapper} key={'paginate-key-' + item}>*/}
      {/*    {currentPage === undefined ? (*/}
      {/*      <>*/}
      {/*        {item === 1 ? (*/}
      {/*          <div className={styles.currentPage}>{item}</div>*/}
      {/*        ) : (*/}
      {/*          <button onClick={() => onPageChange(item)} className={styles.page}>*/}
      {/*            {item}*/}
      {/*          </button>*/}
      {/*        )}*/}
      {/*      </>*/}
      {/*    ) : (*/}
      {/*      <>*/}
      {/*        {currentPage === item ? (*/}
      {/*          <div className={styles.currentPage}>{item}</div>*/}
      {/*        ) : (*/}
      {/*          <button onClick={() => onPageChange(item)} className={styles.page}>*/}
      {/*            {item}*/}
      {/*          </button>*/}
      {/*        )}*/}
      {/*      </>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*))}*/}

      {/*{pageRange[pageRange.length - 1] < totalPages - ellipsisThreshold && (*/}
      {/*  <button onClick={() => onPageChange(pageRange[pageRange.length - 1] + 1)}>&hellip;</button>*/}
      {/*)}*/}

      {/*{(currentPage === undefined || currentPage !== totalPages) && (*/}
      {/*  <>*/}
      {/*    <button*/}
      {/*      title="Next"*/}
      {/*      onClick={() => onChange?.(currentPage === undefined ? 1 : currentPage + 1)}*/}
      {/*      className={styles.last}*/}
      {/*    >*/}
      {/*      <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*        <path*/}
      {/*          d="M10.5186 11.1275L1.27599 1.88484C0.885458 1.49431 0.885472 0.861151 1.27599 0.47063C1.66651 0.0801096 2.29967 0.0800954 2.69021 0.47063L12.5897 10.3701C12.7977 10.5782 12.895 10.8551 12.8813 11.1275C12.8949 11.3999 12.7977 11.6768 12.5897 11.8848L2.6902 21.7843C2.29967 22.1748 1.66651 22.1748 1.27599 21.7843C0.885468 21.3938 0.885454 20.7606 1.27599 20.3701L10.5186 11.1275Z"*/}
      {/*          fill="black"*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    </button>*/}
      {/*    <button title="Last" onClick={() => onChange?.(totalPages)} className={styles.last}>*/}
      {/*      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*        <path*/}
      {/*          d="M9.53555 10.9502L0.292936 1.70757C-0.0975991 1.31703 -0.0975847 0.683877 0.292936 0.293356C0.683457 -0.097165 1.31661 -0.09718 1.70715 0.293354L11.6066 10.1928C11.8147 10.4009 11.9119 10.6778 11.8983 10.9502C11.9119 11.2226 11.8147 11.4995 11.6066 11.7075L1.70715 21.607C1.31661 21.9975 0.683457 21.9975 0.292933 21.607C-0.0975884 21.2165 -0.0976024 20.5833 0.292933 20.1928L9.53555 10.9502Z"*/}
      {/*          fill="black"*/}
      {/*        />*/}
      {/*        <path*/}
      {/*          d="M17.5355 10.9497L8.29294 1.70708C7.9024 1.31655 7.90242 0.683389 8.29294 0.292868C8.68346 -0.0976532 9.31661 -0.0976683 9.70715 0.292866L19.6066 10.1924C19.8147 10.4004 19.9119 10.6773 19.8983 10.9497C19.9119 11.2221 19.8147 11.499 19.6066 11.707L9.70715 21.6065C9.31661 21.9971 8.68346 21.997 8.29293 21.6065C7.90241 21.216 7.9024 20.5828 8.29293 20.1923L17.5355 10.9497Z"*/}
      {/*          fill="black"*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    </button>*/}
      {/*  </>*/}
      {/*)}*/}
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

  last: css`
    width: 34px;
    height: 34px;
    background: rgba(${tokens.colors.primary[400]}, 0.1);
  `,
};
