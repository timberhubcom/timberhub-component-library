import { StoryFn } from '@storybook/react';
import React from 'react';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'MUI/Typography',
  component: Typography,
};

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args}>sales@timberhub.com</Typography>;

export const Medium = Template.bind({});
Medium.args = {
  variant: 'body_m',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'body_s',
};
