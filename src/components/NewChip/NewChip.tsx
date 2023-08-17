import React from 'react';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';

export const chipColors = ['primary', 'grey', 'error', 'warning', 'info'] as const;

type NewChipProps = {
  label: string;
  addonStart?: React.ReactNode;
  color?: (typeof chipColors)[number];
};

export const NewChip = React.forwardRef<HTMLDivElement, NewChipProps>(function Chip(
  { label, addonStart, color = 'grey', ...props },
  ref,
) {
  const colors = React.useMemo(() => {
    if (color === 'grey') {
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
      background: color === 'primary' ? tokens.colors.shade : tokens.colors[color][100],
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
        styles.root(!!addonStart),
        styles.color(colors.text, colors.background, colors.hover.text, colors.hover.background),
      )}
      {...props}
    >
      {addonStart}
      <div className={styles.label}>{label}</div>
    </div>
  );
});

const styles = {
  root: (addonStart: boolean) => css`
    display: grid;
    grid-template-columns: ${addonStart ? 'auto' : ''} 1fr;
    gap: 4px;
    padding: 2px 8px;
    width: fit-content;
    border-radius: 1px;
    ${tokens.typography.caption};
    cursor: pointer;
  `,
  color: (textColor: string, bgColor: string, textHoverColor: string, bgHoverColor: string) => css`
    transition: all 150ms ease 0ms;
    color: ${textColor};
    background-color: ${bgColor};
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
