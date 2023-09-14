import { css, cx } from '@emotion/css';
import React from 'react';

export const TableWrapper = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className={styles.root}>
      <table ref={ref} className={cx(styles.container, className)} {...props} />
    </div>
  )
);

const styles = {
  root: css`
    width: 100%;
    overflow: auto;
  `,
  container: css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  `,
};
