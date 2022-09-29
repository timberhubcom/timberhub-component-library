import React from 'react';
import styles from './Table.module.scss';
import { HeaderItem, TableProps } from './types';

const Table: React.FC<TableProps> = ({ structure, rows = [], emptyText = 'No data' }) => {
  return (
    <table className={styles['table']}>
      <thead>
        <tr className={`${styles['cols']} ${styles['tableHeader']}`}>
          {structure.header.map((column: HeaderItem, index: number) => (
            <th
              className={`${styles['tableColumn']} ${styles[`col-${column.width}`]}`}
              data-key={column.name}
              key={index}
            >
              <span className={styles['tableColumnText']}>{column.show_title && column.title}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          <tr>
            {rows.map((row, position) => (
              <td className={`${styles['cols']} ${styles['tableRow']}`} key={position}>
                {structure.header.map((column, index) => (
                  <div
                    className={`${styles['tableColumn']} ${styles[`col-${column.width}`]}`}
                    data-key={column.name}
                    key={index}
                  >
                    {row[column.name] && row[column.name]}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        ) : (
          <div className={styles['tableEmpty']} data-testid={'empty-table'}>
            {emptyText}
          </div>
        )}
      </tbody>
    </table>
  );
};

export default Table;
