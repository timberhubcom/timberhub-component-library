import { StoryFn } from '@storybook/react';
import React from 'react';

import { TextField } from './TextField';

export default {
  title: 'MUI/TextField',
  component: TextField,
};

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Name',
  placeholder: 'placeholder',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Name',
  required: true,
  placeholder: 'placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Name',
  disabled: true,
  placeholder: 'placeholder',
};

export const Description = Template.bind({});
Description.args = {
  label: 'Name',
  placeholder: 'placeholder',
};

export const Number = Template.bind({});
Number.args = {
  label: 'Name',
  placeholder: 'placeholder',
  type: 'number',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Name',
  error: true,
  helperText: 'There was an error',
  placeholder: 'placeholder',
  defaultValue: 'default value',
};

export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Multiline',
  multiline: true,
  placeholder: 'placeholder',
  defaultValue: 'default value',
};
