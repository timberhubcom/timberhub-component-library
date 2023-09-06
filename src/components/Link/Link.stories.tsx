import { StoryFn } from '@storybook/react'
import React from 'react'

import { Link } from './Link'

export default {
  title: 'MUI/Link',
  component: Link,
}

const Template: StoryFn<typeof Link> = (args) => <Link {...args}>sales@timberhub.com</Link>

export const Medium = Template.bind({})
Medium.args = {
  variant: 'text_link_m',
}

export const Small = Template.bind({})
Small.args = {
  variant: 'text_link_s',
}
