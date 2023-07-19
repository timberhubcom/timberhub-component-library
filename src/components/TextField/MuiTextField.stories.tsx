import React from 'react';
import { StoryFn } from '@storybook/react';
import { MuiTextField } from './MuiTextField';

export default {
  title: 'MUI/Components/TextField',
  component: MuiTextField,
};

const Template: StoryFn<typeof MuiTextField> = (args) => <MuiTextField {...args} />;

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
