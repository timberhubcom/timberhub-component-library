import React from 'react';
import clsx from 'clsx';

import styles from './Badge.module.scss';

type SimpleColors = 'green' | 'red' | 'blue' | 'orange';

type NormalSizes = 'sm' | 'md' | 'lg';

type BadgePlacements = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface BadgeProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  placement?: BadgePlacements;
  color?: SimpleColors;
  className?: string;
  size?: NormalSizes;
}

const classVariance = {
  placement: {
    'top-right': styles['top-right'],
    'top-left': styles['top-left'],
    'bottom-right': styles['bottom-right'],
    'bottom-left': styles['bottom-left'],
  },
  size: {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
  },
};

const Badge = ({ children, content, placement = 'top-right', className, size = 'md',color='green', ...rest }: BadgeProps) => {
  const asChild = content !== undefined && !!children;
  return (
    <span className={styles.badgeWrapper}>
      {asChild && children}
      <span
        className={clsx(
          styles.badge,
          asChild && classVariance.placement[placement],
          asChild && styles.asChild,
          classVariance.size[size],
          styles[color],
        )}
        {...rest}
      >
        {asChild ? content : children}
      </span>
    </span>
  );
};

export default Badge;
