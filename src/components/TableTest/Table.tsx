import React from 'react';
import Loader from '../Icons/Loader';
import { HeaderItem, TableProps, TableRowItem } from './types';
import { colors } from '../../theme/colors.enum';
import Pagination from '../Pagination/Pagination';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { css } from '@emotion/css';
import { tokens } from '../../theme/tokens';

export const Table = ({
  structure,
  loading = false,
  items = [],
  renderEmpty = () => 'No data',
  onClick,
  pagination,
}: TableProps) => {
  if (loading) {
    return (
      <RootTable
        header={structure.header}
        addon={() => (
          <div className={styles.loading}>
            <Loader color={colors.POSITIVE} />
          </div>
        )}
      />
    );
  }

  if (items.length === 0) {
    return (
      <RootTable
        header={structure.header}
        addon={() => (
          <div className={styles.tableEmpty} data-testid={'empty-table'}>
            {renderEmpty()}
          </div>
        )}
      />
    );
  }

  return (
    <React.Fragment>
      <RootTable
        header={structure.header}
        addon={() => (
          <div className={styles.container}>
            {items.map((item, position) => (
              <TableRow key={position} item={item} header={structure.header} onClick={onClick} />
            ))}
          </div>
        )}
      />
      {!!pagination ? <Pagination {...pagination} /> : null}
    </React.Fragment>
  );
};

type RootTableProps = {
  header: HeaderItem[];
  addon: () => React.ReactElement;
};
const RootTable = ({ header, addon }: RootTableProps) => {
  return (
    <div className={styles.root}>
      <TableHeader header={header} />
      {addon()}
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    border-spacing: 0;
  `,
  container: css`
    border: 1px solid ${tokens.colors.grey[200]};
    border-radius: 10px;
  `,
  loading: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px;

    svg {
      width: 32px !important;
      height: 32px !important;
    }
  `,
  tableEmpty: css`
    color: grey;
    text-align: center;
    padding: 30px 20px;
  `,
};
