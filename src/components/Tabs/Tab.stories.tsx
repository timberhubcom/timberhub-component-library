import React, { useState } from 'react';

import Tabs, { TabsProp } from './Tabs';

export default {
  title: 'Layouts/Tabs',
  component: Tabs,
};

const items = [
  {
    title: 'Open',
    value: '/open',
    name: 'open',
    disabled: false,
  },
  {
    title: 'Closed',
    value: '/closed',
    name: 'closed',
    disabled: false,
  },
  {
    title: 'Draft',
    value: '/draft',
    name: 'draft',
    disabled: false,
  },
];

export const WithoutCounter = {
  args: {
    items,
    activeTab: 'open',
  },
};

export const WithCounter = {
  args: {
    ...WithoutCounter.args,
    counts: {
      open: 13,
      closed: 2,
      draft: 3,
    },
  },
};

const TabWithHandler = (args: Pick<TabsProp, 'items' | 'counts'>) => {
  const [activeTab, setActiveTab] = useState('open');

  const handleOnChange = (value: string) => {
    setActiveTab(items.find((item) => item.value === value)?.name || '');
  };
  return <Tabs {...args} activeTab={activeTab} onClick={handleOnChange} />;
};

export const WithOnClick = {
  render: () => <TabWithHandler {...{ ...WithoutCounter.args }} />,
};

export const WithDisabled = {
  render: () => (
    <TabWithHandler
      items={[
        ...items,
        {
          title: 'Disabled',
          value: '/disabled',
          name: 'disabled',
          disabled: true,
        },
      ]}
    />
  ),
};
