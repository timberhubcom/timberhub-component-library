import React from 'react';
import { StoryFn } from '@storybook/react';
import DataItem, {DataItemsProps} from './DataItem';
import DeliveryIcon from '../../icons/Delivery.svg';

export default {
  title: 'MUI/DataItem',
  component: DataItem,
}

const Template: StoryFn<DataItemsProps> = (args) => (
  <DataItem {...args} />
)

export const Item = Template.bind({});
Item.args = {
  icon: DeliveryIcon,
  title: 'Title text',
  description: 'DataItem description',
}
