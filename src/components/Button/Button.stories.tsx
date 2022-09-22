import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Lib/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Timberhub</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Plain = Template.bind({});
Plain.args = {
  type: 'plain',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
