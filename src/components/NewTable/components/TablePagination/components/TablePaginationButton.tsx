import { css, cx } from '@emotion/css'
import React from 'react'

import { tokens } from '../../../../../theme/tokens'

interface TablePaginationArrowProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  active?: boolean
  background?: boolean
  onClick?: (page?: number) => void
}
export const TablePaginationButton = ({
  active,
  background,
  children,
  onClick,
  ...props
}: TablePaginationArrowProps) => {
  return (
    <button
      onClick={!!onClick ? () => onClick() : undefined}
      className={cx(styles.root, {
        [styles.background]: !!background,
        [styles.clickable]: !!onClick,
        [styles.active]: !!active,
      })}
      {...props}>
      {children}
    </button>
  )
}

const styles = {
  root: css`
    margin: 0;
    outline: none;
    text-decoration: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${tokens.colors.white};
    min-height: 24px;
    max-height: 24px;
    min-width: 24px;
    max-width: 24px;
    border-radius: 9999px;
    transition: background-color 150ms ease 0ms;
    ${tokens.typography.headline_ss_xxs};

    &:disabled {
      cursor: not-allowed;
      * {
        opacity: 0.6;
      }
    }
  `,
  background: css`
    background-color: ${tokens.colors.grey[100]};
  `,
  clickable: css`
    &:not(:disabled) {
      cursor: pointer;

      &:hover {
        color: ${tokens.colors.white};
        background-color: ${tokens.colors.grey[900]};
        > svg {
          color: ${tokens.colors.white};
        }
      }

      &:active {
        > span {
          transition: all 150ms ease 0ms;
          transform: translateY(0.5px);
        }
      }
    }
  `,
  active: css`
    pointer-events: none;
    color: ${tokens.colors.white};
    background-color: ${tokens.colors.grey[900]};
  `,
}
