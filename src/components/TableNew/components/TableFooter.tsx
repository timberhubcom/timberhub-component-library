import React from 'react';
import { cx, css } from '@emotion/css';

export const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <tfoot ref={ref} className={cx(styles.root, className)} {...props} />,
);

const styles = {
  root: css``,
};

TableFooter.displayName = 'TableFooter';
