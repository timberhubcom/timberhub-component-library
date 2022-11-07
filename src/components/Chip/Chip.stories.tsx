import React from 'react';
import { ComponentStory } from '@storybook/react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
};

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;
const MultipleTemplate: ComponentStory<any> = (args) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Chip {...args[0]} />
    <Chip {...args[1]} />
    <Chip {...args[2]} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  text: 'offer',
};

export const Color = MultipleTemplate.bind({});
Color.args = [
  {
    text: 'pending',
    color: 'orange',
  },
  {
    text: 'closed',
  },
  {
    text: 'offer',
    color: 'blue',
  },
  {
    text: 'approved',
    color: 'green',
  },
];

export const Prefix = Template.bind({});
Prefix.args = {
  text: 'offer',
  prefix: '1',
};
