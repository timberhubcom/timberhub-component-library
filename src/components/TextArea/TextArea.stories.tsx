import { ComponentStory } from '@storybook/react'
import React from 'react'

import TextArea from './TextArea'

export default {
  title: 'Components/TextArea',
  component: TextArea,
}

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'label',
  placeholder: 'placeholder',
}

export const Required = Template.bind({})
Required.args = {
  label: 'label',
  required: true,
  placeholder: 'placeholder',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'label',
  disabled: true,
  placeholder: 'placeholder',
}

export const Description = Template.bind({})
Description.args = {
  label: 'label',
  description: 'This text describes the input',
  placeholder: 'placeholder',
}

export const Error = Template.bind({})
Error.args = {
  label: 'label',
  error: 'There was an error',
  placeholder: 'placeholder',
}
