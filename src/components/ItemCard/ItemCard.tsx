import { clsx } from 'clsx';
import React, { FC } from 'react';

import styles from './itemCard.module.scss';

type TItemCard = {
  className?: string;
  children: React.ReactNode;
};

const ItemCard: FC<TItemCard> = ({ className, children }) => {
  return <div className={clsx(className, styles.itemCardWrapper)}>{children}</div>;
};

export default ItemCard;
