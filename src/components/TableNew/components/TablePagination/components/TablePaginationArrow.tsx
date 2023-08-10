import React from 'react';
import { css, cx } from '@emotion/css';
import { tokens } from '../../../../../theme/tokens';
import { KeyboardArrowLeft, KeyboardDoubleArrowLeft } from '@mui/icons-material';

type TablePaginationArrowProps = {
  direction?: 'left' | 'right';
  disabled?: boolean;
  onClick?: (page?: number) => void;
};
export const TablePaginationArrow = ({ direction = 'right', disabled = false, onClick }: TablePaginationArrowProps) => {
  const isRight = direction === 'right';
  return (
    <div className={cx(styles.root, { [styles.right]: isRight })}>
      <button
        title={isRight ? 'Last' : 'First'}
        disabled={disabled}
        onClick={!!onClick ? () => onClick() : undefined}
        className={styles.button}
      >
        <KeyboardDoubleArrowLeft className={styles.icon} />
      </button>
      <button
        title={isRight ? 'Next' : 'Previous'}
        disabled={disabled}
        onClick={!!onClick ? () => onClick() : undefined}
        className={styles.button}
      >
        <KeyboardArrowLeft className={styles.icon} />
      </button>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    gap: 4px;
  `,
  right: css`
    transform: scale(-1, 1);
  `,
  button: css`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 4px;
    transition: background-color 150ms ease 0ms;
    box-shadow: inset 0 0 0 1px ${tokens.colors.grey[50]};

    &:hover:not(:disabled) {
      color: ${tokens.colors.primary[400]};
      background-color: ${tokens.colors.grey[50]};
    }

    &:disabled {
      cursor: not-allowed;
      * {
        opacity: 0.6;
      }
    }
  `,
  icon: css`
    width: 24px !important;
    height: 24px !important;
  `,
  disabled: css``,
};
