import { css, cx } from '@emotion/css';
import React from 'react';

import DataItem, { DataItemsProps } from '../DataItem/DataItem';

export type DataItemsListProps = {
  items: DataItemsProps[];
  className?: string;
};

const getItemClass = (itemIndex: number, items: DataItemsProps[]) => {
  let itemClass;

  if (itemIndex === 0) {
    itemClass = styles.first;
  } else if (itemIndex + 1 === items.length) {
    itemClass = styles.last;
  } else {
    itemClass = styles.middle;
  }

  return itemClass;
};

export const DataItemsList = React.forwardRef<HTMLDivElement, DataItemsListProps>(function DataItemsList(
  { items, className },
  ref
) {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <DataItem
          icon={item.icon}
          title={item.title}
          description={item.description}
          className={cx(getItemClass(index, items), className)}
          key={crypto.randomUUID()}
          ref={ref}
        />
      ))}
    </React.Fragment>
  );
});

const styles = {
  first: css`
    border-radius: 4px 4px 0 0 !important;
    border-bottom: 0 !important;
  `,
  last: css`
    border-radius: 0 0 4px 4px !important;
  `,
  middle: css`
    border-bottom: 0 !important;
    border-radius: 0 !important;
  `,
};

export default DataItemsList;
