import React from 'react';
import { StoryFn } from '@storybook/react';
import DeliveryIcon from '../../icons/Delivery.svg';
import DataItemsList, { DataItemsListProps } from "./DataItemsList";

export default {
  title: 'MUI/DataItemsList',
  component: DataItemsList,
}

const Template: StoryFn<DataItemsListProps> = (args) => (
  <DataItemsList {...args} />
)

export const ItemsList = Template.bind({});
ItemsList.args = {
  items: [
    {
      title: 'First item title',
      description: 'First item description text',
      icon: DeliveryIcon,
    },
    {
      title: 'Middle item title',
      description: 'Middle item description text',
      icon: DeliveryIcon,
    },
    {
      title: 'Last item title',
      description: 'Last item description text',
      icon: DeliveryIcon,
    },
  ]
}

export const EmptyItemsList = Template.bind({});
EmptyItemsList.args = {
  items: [
    {
      title: '',
      description: '',
      icon: DeliveryIcon,
    },
    {
      title: 'Middle item title',
      description: 'Middle item description text',
      icon: DeliveryIcon,
    },
  ]
}
