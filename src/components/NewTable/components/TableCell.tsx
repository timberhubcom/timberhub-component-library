import { css, cx } from '@emotion/css';
import React from 'react';

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => <td ref={ref} className={cx(styles.root, className)} {...props} />
);

const styles = {
  root: css`
    vertical-align: top;
  `,
};
