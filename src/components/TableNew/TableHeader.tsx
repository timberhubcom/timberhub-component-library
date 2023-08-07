import React from 'react';
import { TableLayout } from './layout';
import { css } from '@emotion/css';

interface TableHeaderProps {
  layout: TableLayout;
}

export const TableHeader = React.memo(({ layout }: TableHeaderProps) => {
  const head = Object.fromEntries(Object.entries(layout.renderHead).map(([k, v]) => [k, v]));

  return <div className={styles.container}>{Object.keys(head).length > 0 && <div>hola</div>}</div>;
});

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
  `,
};
