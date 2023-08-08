import React from 'react';
import { HeaderItem } from './types';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';

interface TableHeaderProps {
  header: HeaderItem[];
}

export const TableHeader = ({ header }: TableHeaderProps) => {
  return (
    <div className={styles.root}>
      {header.map((column, index) => (
        <div
          className={cx(styles.column, styles.col(column.width))}
          data-key={column.name}
          key={`header-${column.name}-${index}`}
        >
          <span className={''}>{column.show_title && column.title}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  root: css`
    ${tokens.typography.headline_ss_xxs};
    color: ${tokens.colors.grey[600]};
    display: flex;
  `,
  column: css`
    display: flex;
    align-items: center;
    padding: 0 8px 8px;
  `,
  col: (width: number) => css`
    @media screen and (min-width: 521px) {
      flex: ${width} 1 0;
    }
  `,
};
