import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioGroup } from '../index';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

const options = [
  { name: 'option 1', value: 'option 1' },
  { name: 'option 2', value: 'option 2' },
  { name: 'option 3', value: 'option 3' },
];

export const Base = Template.bind({});
Base.args = {
  label: 'Options',
  options,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Options',
  required: true,
  options,
};

export const Default = Template.bind({});
Default.args = {
  label: 'Options',
  options,
  defaultValue: options[2].value,
};

export const Reset = Template.bind({});
Reset.args = {
  label: 'Options',
  options,
  defaultValue: options[2].value,
  resetText: 'Reset all',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Options',
  options,
  disabled: true,
};
