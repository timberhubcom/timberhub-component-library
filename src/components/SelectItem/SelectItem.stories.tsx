import React from 'react';
import { ComponentStory } from '@storybook/react';
import SelectItem from './SelectItem';

const options = [
  { value: 'option 1', label: 'option 1' },
  { value: 'option 2', label: 'option 2' },
];

export default {
  title: 'Components/SelectItem',
  component: SelectItem,
};

const Template: ComponentStory<typeof SelectItem> = (args) => <SelectItem {...args} />;
export const Base = Template.bind({});

Base.args = {
  label: 'label',
  options,
};

export const Empty = Template.bind({});
Empty.args = {
  label: 'label',
};

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  required: true,
  defaultValue: options[0],
  options,
};
