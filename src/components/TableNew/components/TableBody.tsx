import React from 'react';
import { cx, css } from '@emotion/css';

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <tbody ref={ref} className={cx(styles.root, className)} {...props} />,
);

const styles = {
  root: css``,
};

TableBody.displayName = 'TableBody';
