import { ComponentStory } from '@storybook/react'
import React from 'react'

import CheckboxGroup from './CheckboxGroup'

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
}

const options = [
  { name: 'option 1', value: 'option 1' },
  { name: 'option 2', value: 'option 2' },
  { name: 'option 3', value: 'option 3' },
]

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />

export const Base = Template.bind({})
Base.args = {
  options,
  defaultValues: { 'option 1': 'option 1', 'option 2': 'option 2' },
}

export const Label = Template.bind({})
Label.args = {
  label: 'Final step',
  options,
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValues: { 'option 1': 'option 1' },
  options,
  disabled: true,
}

export const Required = Template.bind({})
Required.args = {
  label: 'Options',
  defaultValues: { 'option 1': 'option 1' },
  options,
  required: true,
}
