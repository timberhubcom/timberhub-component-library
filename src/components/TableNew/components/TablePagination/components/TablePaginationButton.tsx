import React from 'react';
import { css, cx } from '@emotion/css';
import { tokens } from '../../../../../theme/tokens';
import { KeyboardArrowLeft, KeyboardDoubleArrowLeft } from '@mui/icons-material';

interface TablePaginationArrowProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  active?: boolean;
  onClick?: (page?: number) => void;
}
export const TablePaginationButton = ({ active, children, onClick, ...props }: TablePaginationArrowProps) => {
  return (
    <button
      onClick={!!onClick ? () => onClick() : undefined}
      className={cx(styles.root, { [styles.clickable]: !!onClick, [styles.active]: !!active })}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

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
    min-height: 34px;
    max-height: 34px;
    min-width: 34px;
    max-width: 34px;
    border-radius: 4px;
    transition: background-color 150ms ease 0ms;
    box-shadow: inset 0 0 0 1px ${tokens.colors.grey[50]};

    &:disabled {
      cursor: not-allowed;
      * {
        opacity: 0.6;
      }
    }
  `,
  clickable: css`
    &:not(:disabled) {
      cursor: pointer;

      &:hover {
        color: ${tokens.colors.primary[400]};
        background-color: ${tokens.colors.grey[50]};
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
    color: ${tokens.colors.primary[400]};
    background-color: ${tokens.colors.grey[50]};
  `,
};
