import React from 'react';
import { cx, css } from '@emotion/css';

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cx(styles.root, className)} {...props} />,
);

const styles = {
  root: css``,
};

TableHeader.displayName = 'TableHeader';
