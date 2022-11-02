import React from 'react';
import { ComponentStory } from '@storybook/react';
import SelectInput from './SelectInput';

const options = [
  { value: 'option 1', label: 'option 1' },
  { value: 'option 2', label: 'option 2' },
];

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
};

const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'label',
  options,
  defaultValue: options[0],
  reverse: false,
};

export const Reverse = Template.bind({});
Reverse.args = {
  label: 'label',
  options,
  defaultValue: options[0],
  reverse: true,
};
export const Error = Template.bind({});
Error.args = {
  label: 'label',
  options,
  defaultValue: options[0],
  error: 'error',
};
