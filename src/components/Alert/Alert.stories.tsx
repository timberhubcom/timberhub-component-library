import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Alert, AlertProps } from './Alert'

export default {
  title: 'MUI/Alert',
  component: Alert,
} as Meta

const Template: StoryFn<AlertProps> = (args) => (
  <Alert {...args} icon={<InfoOutlinedIcon />}>
    You have 5 new offers and you have to click the button to able to accept them and also go to offers and download the
    invoices
  </Alert>
)

export const Green = Template.bind({})
Green.args = {
  variant: 'success',
}

export const Red = Template.bind({})
Red.args = {
  variant: 'error',
}

export const Blue = Template.bind({})
Blue.args = {
  variant: 'info',
}

export const Yellow = Template.bind({})
Yellow.args = {
  variant: 'warning',
}

export const Grey = Template.bind({})
Grey.args = {
  variant: 'grey',
}
