import { StoryFn } from '@storybook/react'
import React from 'react'

import SimpleList, { SimpleListProps } from './SimpleList'

export default {
  title: 'MUI/SimpleList',
  component: SimpleList,
}

const Template: StoryFn<SimpleListProps> = (args) => <SimpleList {...args} />

export const ThreeCellsList = Template.bind({})
ThreeCellsList.args = {
  items: [
    [
      {
        text: 'Bold text',
        style: 'bold',
      },
      {
        text: 'Regular text',
        style: 'default',
      },
      {
        text: 'Bold text',
        style: 'bold',
      },
    ],
    [
      {
        text: 'Bold text',
        style: 'bold',
      },
      {
        text: 'Regular text',
        style: 'default',
      },
      {
        text: 'Bold text',
        style: 'bold',
      },
    ],
  ],
}

export const TwoCellsList = Template.bind({})
TwoCellsList.args = {
  items: [
    [
      {
        text: 'Bold text',
        style: 'bold',
      },
      {
        text: 'Regular text',
        style: 'default',
      },
    ],
    [
      {
        text: 'Bold text',
        style: 'bold',
      },
      {
        text: 'Regular text',
        style: 'default',
      },
    ],
    [
      {
        text: 'Bold text',
        style: 'bold',
      },
      {
        text: 'Regular text',
        style: 'default',
      },
    ],
  ],
}
