import React from 'react';
import { TableLayout } from './layout';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';

interface TableHeaderProps {
  layout: TableLayout;
}

export const TableHeader = React.memo(({ layout }: TableHeaderProps) => {
  const head = Object.fromEntries(Object.entries(layout.renderHead).map(([k, v]) => [k, v?.({})]));

  return (
    <div className={styles.container}>
      {Object.keys(head).length > 0 && (
        <div className={styles.row}>
          {layout.sections.map(({ id, children, sticky }) => (
            <div key={id} className={cx(styles.section, { [styles.sticky]: !!sticky })}>
              {children.map(({ id, width }) => (
                <div key={id} data-column-id={id} className={styles.column(width)}>
                  {head[id]}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const styles = {
  container: css`
    display: flex;
    flex: 1;
    width: 100%;
    ${tokens.typography.headline_ss_xxs};
    color: ${tokens.colors.grey[600]};
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
