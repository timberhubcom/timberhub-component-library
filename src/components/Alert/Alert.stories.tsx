import { StoryFn } from '@storybook/react'
import React from 'react'

import Alert from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
}

const Template: StoryFn<typeof Alert> = (args) => (
  <Alert title={'You have 5 offers available for review'} {...args}>
    {args.children}
  </Alert>
)

export const Green = Template.bind({})
Green.args = {}

export const Red = Template.bind({})
Red.args = {
  variant: 'red',
}

export const Blue = Template.bind({})
Blue.args = {
  variant: 'blue',
}

export const Yellow = Template.bind({})
Yellow.args = {
  variant: 'yellow',
}

export const Grey = Template.bind({})
Grey.args = {
  variant: 'grey',
}

export const WithButton = Template.bind({})
WithButton.args = {
  buttonTitle: 'Go to offers',
}

export const Multiline = Template.bind({})
Multiline.args = {
  title:
    'You have 5 new offers and you have to click the button to able to accept them and also go to offers and download the invoices',
}
