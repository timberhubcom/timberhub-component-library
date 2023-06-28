import React, { ReactElement } from 'react';
import { clsx } from 'clsx';
import { Button } from '../Button';

import TimeIcon from '../../icons/time.svg';

import styles from './CampaignOffers.module.scss';

export interface CampaignOfferProps {
  layout: 'flex' | 'grid';
  title: ReactElement;
  onClick: () => void;
  timeLeft?: number;
  totalTrucks?: number;
  price?: number;
}

const CampaignOffer = ({
  layout = 'flex',
  timeLeft = 0,
  price = 0,
  title,
  onClick,
  totalTrucks = 0,
}: CampaignOfferProps) => {
  const dimensions = '10x12x12';

  return (
    <button className={clsx(styles.card, styles.layout, styles[layout])} onClick={onClick}>
      <div className={styles.overflowActions}>
        {timeLeft <= 0 ? null : (
          <div className={styles.timeLeft}>
            <TimeIcon />
            <p>{timeLeft}</p>
          </div>
        )}
      </div>
      {layout === 'grid' ? (
        <div className={styles.gridTitleWrapper}>
          <p className={styles.productName}>{title}</p>
          <div className={clsx(styles.dimensions)}>
            <p>{dimensions}</p>
            <p>{totalTrucks} truck</p>
          </div>
        </div>
      ) : (
        <>
          <p className={styles.productName}>{title}</p>
          <div className={clsx(styles.dimensions)}>
            <p>{dimensions}</p>
            <p>{totalTrucks} truck</p>
          </div>
        </>
      )}
      <div className={clsx(styles.footer)}>
        <p>
          <span className={clsx('text-17-b')}>{price}€</span>
          <small className={clsx(styles.cbm)}>
            {' '}
            per m<sup>3</sup>
          </small>
        </p>
        <Button type="secondary" onClick={onClick}>
          Buy
        </Button>
      </div>
    </button>
  );
};

export default CampaignOffer;
