import clsx from 'clsx';
import React from 'react';
import styles from './Table.module.scss';
import Loader from '../Icons/Loader';
import { HeaderItem, TableProps, TableRowItem } from './types';
import { colors } from '../../theme/colors.enum';
import Pagination from '../Pagination/Pagination';

const Table: React.FC<TableProps> = ({
  structure,
  loading = false,
  rows = [],
  emptyText = 'No data',
  clickableRow = false,
  mobileHeader = 'visible',
  onClick,
  pagination,
  paginationData,
}) => {
  const handleRowClick = (row: TableRowItem) => {
    if (onClick) onClick(row);
  };

  return (
    <>
      <div className={styles['table']}>
        <div>
          <div className={clsx(styles['cols'], styles['tableHeader'], styles[`mobileHeader-${mobileHeader}`])}>
            {structure.header.map((column: HeaderItem, index: number) => (
              <div
                className={clsx(
                  styles.tableColumn,
                  styles[`col-${column.width}`],
                  styles[`sm-col-${column.mobile_width}`],
                )}
                data-key={column.name}
                key={`header-${column.name}-${index}`}
              >
                <span className={styles['tableHeaderText']}>{column.show_title && column.title}</span>
              </div>
            ))}
          </div>
        </div>
        {loading ? (
          <div>
            <div>
              <div className={styles.loading}>
                <Loader color={colors.POSITIVE} />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {rows.length > 0 ? (
              <>
                {rows.map((row, position) => (
                  <div key={`column-${row.key}`}>
                    <div
                      className={clsx(styles.cols, styles.tableRow, clickableRow && styles.tableRowClickable)}
                      onClick={() => handleRowClick(row)}
                      data-testid={`row-${position}`}
                    >
                      {structure.header.map((column, index) => (
                        <div
                          className={clsx(
                            styles.tableColumn,
                            styles[`col-${column.width}`],
                            styles[`sm-col-${column.mobile_width}`],
                            column.show_on_hover && styles.showOnHover,
                          )}
                          data-key={column.name}
                          key={`row-${row[column.name] ?? ''}-${index}`}
                        >
                          {row[column.name] && row[column.name]}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>
                <div className={styles['tableEmpty']} data-testid={'empty-table'}>
                  {emptyText}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {pagination ? <Pagination {...paginationData} /> : null}
    </>
  );
};

export default Table;
