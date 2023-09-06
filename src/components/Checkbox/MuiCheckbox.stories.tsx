import { StoryFn } from '@storybook/react'
import React from 'react'

import { MuiCheckbox as Checkbox } from './MuiCheckbox'

export default {
  title: 'MUI/Checkbox',
  component: Checkbox,
}

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Error = Template.bind({})
Error.args = {
  color: 'error',
  defaultChecked: true,
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  defaultChecked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  defaultChecked: true,
}

export const accent = Template.bind({})
accent.args = {
  color: 'accent',
  defaultChecked: true,
}

export const info = Template.bind({})
info.args = {
  color: 'info',
  defaultChecked: true,
}
