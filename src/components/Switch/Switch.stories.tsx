import { ComponentStory } from '@storybook/react'
import React from 'react'

import Switch from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
}

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Base = Template.bind({})
Base.args = {
  option: { name: 'option' },
  label: 'label',
  defaultValue: true,
}
