import React from 'react';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';
import { TableLayout } from './layout';

export interface TableRowProps {
  layout: TableLayout;
}

export const TableRow = ({ layout }: TableRowProps) => {
  const data = Object.fromEntries(Object.entries(layout.renderData).map(([k, v]) => [k, v?.({})]));
  console.log(data);
  return (
    <div className={styles.container}>
      {Object.keys(data).length > 0 && (
        <div className={styles.row}>
          {layout.sections.map(({ id, children, sticky }) => (
            <div key={id} className={cx(styles.section, { [styles.sticky]: !!sticky })}>
              {children.map(({ id, width }) => (
                <div key={id} data-column-id={id} className={styles.column(width)}>
                  {data[id]}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: css`
    padding: 16px 0;
    border: 1px solid ${tokens.colors.grey[200]};
  `,
  row: css`
    display: flex;
    gap: 16px;
    width: 100%;
    margin-bottom: 8px;
    position: relative;
  `,
  section: css`
    display: flex;
    gap: 16px;
  `,
  column: (width?: number) => css`
    display: flex;
    ${{ width }};
    position: relative;
  `,
  sticky: css`
    position: sticky;
    left: 0;
    background-color: ${tokens.colors.white};
    //border-right: 1px solid red;
    z-index: 10;
  `,
};
