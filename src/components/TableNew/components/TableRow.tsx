import React from 'react';
import { cx, css } from '@emotion/css';
import { tokens } from '../../../theme/tokens';

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => <tr ref={ref} className={cx(styles.root, className)} {...props} />,
);

const styles = {
  root: css``,
};

TableRow.displayName = 'TableRow';
