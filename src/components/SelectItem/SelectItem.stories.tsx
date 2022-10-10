import React from 'react';
import { ComponentStory } from '@storybook/react';
import Select from './SelectItem';

export default {
  title: 'Components/SelectItem',
  component: Select,
};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'label',
  options: [
    { value: 'test', label: 'test' },
    { value: 'test 1', label: 'test 1' },
  ],
};
