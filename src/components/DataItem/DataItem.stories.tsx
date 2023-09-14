import { StoryFn } from '@storybook/react';
import React from 'react';

import DeliveryIcon from '../../icons/Delivery.svg';
import DataItem, { DataItemsProps } from './DataItem';

export default {
  title: 'MUI/DataItem',
  component: DataItem,
};

const Template: StoryFn<DataItemsProps> = (args) => <DataItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  icon: DeliveryIcon,
  title: 'Title text',
  description: 'DataItem description',
};
