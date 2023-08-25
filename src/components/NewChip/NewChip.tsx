import React from 'react';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';

export const ChipColorEnum = Object.freeze({
  PRIMARY: 'primary',
  GREY: 'grey',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
});

type ChipSize = 'small' | 'default';

type NewChipProps = {
  label: string;
  size?: ChipSize;
  addonStart?: React.ReactNode;
  color?: (typeof ChipColorEnum)[keyof typeof ChipColorEnum];
  onClick?: () => void;
  className?: string;
};

export const NewChip = React.forwardRef<HTMLDivElement, NewChipProps>(function Chip(
  { label, size = 'default', addonStart, color = ChipColorEnum.GREY, onClick, className, ...props },
  ref,
) {
  const colors = React.useMemo(() => {
    if (color === ChipColorEnum.GREY) {
      return {
        text: tokens.colors.grey[700],
        background: tokens.colors.grey[100],
        hover: {
          background: tokens.colors.grey[900],
          text: tokens.colors.white,
        },
      };
    }

    return {
      text: tokens.colors[color][500],
      background: color === ChipColorEnum.PRIMARY ? tokens.colors.shade : tokens.colors[color][100],
      hover: {
        background: tokens.colors[color][400],
        text: tokens.colors.white,
      },
    };
  }, [color]);
  return (
    <div
      ref={ref}
      className={cx(
        styles.root(size, !!addonStart),
        styles.color(colors.text, colors.background),
        {
          [styles.clickable(colors.hover.text, colors.hover.background)]: !!onClick,
        },
        className,
      )}
      {...props}
    >
      {addonStart}
      <div className={styles.label}>{label}</div>
    </div>
  );
});

const styles = {
  root: (size: ChipSize, addonStart: boolean) => css`
    display: grid;
    grid-template-columns: ${addonStart ? 'auto' : ''} 1fr;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    height: ${size === 'default' ? '24px' : '16px'};
    width: fit-content;
    border-radius: 1px;
    ${tokens.typography.caption};
  `,
  color: (textColor: string, bgColor: string) => css`
    transition: all 150ms ease 0ms;
    color: ${textColor};
    background-color: ${bgColor};
  `,
  clickable: (textHoverColor: string, bgHoverColor: string) => css`
    cursor: pointer;
    &:hover {
      color: ${textHoverColor};
      background-color: ${bgHoverColor};
    }
  `,
  label: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};
