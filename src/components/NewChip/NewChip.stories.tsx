import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { NewChip } from './NewChip'

export default {
  title: 'MUI/NewChip',
  component: NewChip,
  parameters: { actions: { argTypesRegex: null } },
} as Meta

const Template: StoryFn<typeof NewChip> = (args) => <NewChip {...args} />
const MultipleSizes: StoryFn<any> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <NewChip {...args[0]} />
    <NewChip {...args[1]} />
  </div>
)

const MultipleTemplate: StoryFn<any> = (args) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <NewChip {...args[0]} />
    <NewChip {...args[1]} />
    <NewChip {...args[2]} />
    <NewChip {...args[3]} />
    <NewChip {...args[4]} />
  </div>
)

export const Base = Template.bind({})
Base.args = {
  label: 'offer',
}

export const Sizes = MultipleSizes.bind({})
Sizes.args = [
  {
    label: 'Small',
    size: 'small',
  },
  {
    label: 'Default',
  },
]

export const Color = MultipleTemplate.bind({})
Color.args = [
  {
    label: 'pending',
    color: 'warning',
  },
  {
    label: 'closed',
  },
  {
    label: 'offer',
    color: 'info',
  },
  {
    label: 'approved',
    color: 'primary',
  },
  {
    label: 'rejected',
    color: 'error',
  },
]

export const AddonStart = Template.bind({})
AddonStart.args = {
  label: 'offer',
  addonStart: '1',
}

export const isLoading = Template.bind({})
isLoading.args = {
  label: 'offer',
  isLoading: true,
}
