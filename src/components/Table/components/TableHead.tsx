import React from 'react';
import { cx, css } from '@emotion/css';
import { tokens } from '../../../theme/tokens';

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => <th ref={ref} className={cx(styles.root, className)} {...props} />,
);

const styles = {
  root: css`
    text-align: left;
    vertical-align: middle;
    cursor: default;
    ${tokens.typography.headline_ss_xxs};
    color: ${tokens.colors.grey[600]};
  `,
};
