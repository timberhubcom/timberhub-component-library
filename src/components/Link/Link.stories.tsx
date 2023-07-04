import React from 'react';
import { StoryFn } from '@storybook/react';
import Link from '@mui/material/Link';

export default {
  title: 'MUI/Components/Link',
  component: Link,
};

const Template: StoryFn<typeof Link> = (args) => <Link {...args}>Go to request</Link>;

export const Primary = Template.bind({});
Primary.args = {};
