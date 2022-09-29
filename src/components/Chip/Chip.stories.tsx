import React from 'react';
import { ComponentStory } from '@storybook/react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
};

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Base = Template.bind({});
Base.args = {
  text: '16x1050',
};

export const Prefix = Template.bind({});
Prefix.args = {
  text: '16x1050',
  prefix: '1',
};
