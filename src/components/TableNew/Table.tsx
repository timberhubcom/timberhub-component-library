import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { css } from '@emotion/css';
import { createLayout, TableLayout } from './layout';
import { TableRowProps } from './TableRow';

interface TableProps {
  layout: TableLayout;
  renderRow: (props: TableRowProps) => React.ReactNode;
}

export const Table = ({ layout, renderRow }: TableProps) => {
  // console.log(layout);
  return (
    <div className={styles.container}>
      <TableHeader layout={layout} />
      {renderRow({ layout })}
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 16px;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
    position: relative;
    will-change: scroll-position;
    //background: red;
    align-items: flex-start;
  `,
};
