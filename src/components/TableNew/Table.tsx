import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { css } from '@emotion/css';
import { createLayout } from './layout';

interface TableProps {
  text?: string;
}

export const Table = ({}: TableProps) => {
  const test = createLayout(['option 1', 'option 2']);
  console.log(test);
  return (
    <div className={styles.container}>
      <TableHeader layout={test} />
      {[0, 1, 2, 3, 4].map((el) => (
        <TableRow />
      ))}
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
    background: red;
    align-items: flex-start;
  `,
};
