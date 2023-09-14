import { ComponentStory } from '@storybook/react';
import React from 'react';

import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Base = Template.bind({});
Base.args = {
  option: { name: 'option', value: 'option' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  option: { name: 'option', value: 'option' },
  disabled: true,
};
