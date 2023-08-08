import React from 'react';
import { HeaderItem, TableRowItem } from './types';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';

interface TableRowProps {
  item: TableRowItem;
  header: HeaderItem[];
  onClick?: (item: TableRowItem) => void;
}

export const TableRow = ({ item, header, onClick }: TableRowProps) => {
  return (
    <div
      key={`column-${item.key}`}
      className={cx(styles.container, { [styles.active]: !!onClick })}
      tabIndex={-1}
      onClick={() => onClick?.(item)}
      data-testid={`item-${item.id}`}
    >
      {header.map((column, index) => (
        <div
          className={styles.tableColumn(column.width)}
          data-key={column.name}
          key={`row-${item[column.name] ?? ''}-${index}`}
        >
          {item[column.name] && item[column.name]}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    background-color: ${tokens.colors.white};
    transition: background-color 150ms ease 0ms;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${tokens.colors.grey[200]};
    }

    &:first-of-type {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &:last-of-type {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  `,
  active: css`
    cursor: pointer;
    &:hover {
      background-color: ${tokens.colors.grey[50]};
    }
    //@media (hover: hover) {
    //   background-color: ${tokens.colors.black};
    //}
  `,
  tableColumn: (width: number) => css`
    display: flex;
    align-items: center;
    padding: 16px 8px;
    word-break: break-word;
    white-space: break-spaces;
    @media screen and (min-width: 521px) {
      flex: ${width} 1 0;
    }
  `,
};
