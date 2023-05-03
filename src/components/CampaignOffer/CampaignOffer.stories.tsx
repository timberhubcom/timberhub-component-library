import React from 'react';
import CampaignOffer from './CampaignOffer';

export default {
  title: 'Components/CampaignOffer',
  component: CampaignOffer,
};

export const Flex = {
  args: {
    title: (
      <>
        SPF, Sawn Timber, TG 1-3, KD 18%, ISPM 15
        {<> & 2 more products</>}
      </>
    ),
    dimensions: '10x12x1200/5000',
    price: 312
  },
};

export const Grid = {
  ...Flex,
  args: {
    ...Flex.args,
    layout: 'grid',
  },
};

export const TimeLeft = {
  args: {
    layout: 'grid',
    timeLeft: 20,
  },
};
