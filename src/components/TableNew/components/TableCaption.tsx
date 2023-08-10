import React from 'react';
import { cx, css } from '@emotion/css';

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => <caption ref={ref} className={cx(styles.root, className)} {...props} />,
);

const styles = {
  root: css`
    margin-top: 1rem;
  `,
};

TableCaption.displayName = 'TableCaption';
