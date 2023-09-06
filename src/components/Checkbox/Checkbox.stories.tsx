import { ComponentStory } from '@storybook/react'
import React from 'react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
}

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox
    {...args}
    onClick={(e: any) => {
      // eslint-disable-next-line no-console
      console.log(e.target.checked)
    }}
  />
)

export const Base = Template.bind({})
Base.args = {
  option: { name: '', value: 'checked' },
}

export const Label = Template.bind({})
Label.args = {
  label: 'Final step',
  option: { name: 'Agree with the t&cs' },
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: true,
  option: { name: 'Disabled', value: 'Disabled' },
  disabled: true,
}

export const Required = Template.bind({})
Required.args = {
  defaultValue: true,
  option: { name: 'Option', value: 'Option' },
  required: true,
}

export const ChildComponent = Template.bind({})
ChildComponent.args = {
  option: { name: 'Option', value: 'Option', children: <div>child</div> },
}
