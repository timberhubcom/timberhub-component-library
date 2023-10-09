import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Chip } from './Chip';

export default {
  title: 'MUI/Chip',
  component: Chip,
  parameters: { actions: { argTypesRegex: null } },
} as Meta;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;
const MultipleSizes: StoryFn<any> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <Chip {...args[0]} />
    <Chip {...args[1]} />
  </div>
);

const MultipleTemplate: StoryFn<any> = (args) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Chip {...args[0]} />
    <Chip {...args[1]} />
    <Chip {...args[2]} />
    <Chip {...args[3]} />
    <Chip {...args[4]} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  label: 'offer',
};

export const Sizes = MultipleSizes.bind({});
Sizes.args = [
  {
    label: 'Small',
    size: 'small',
  },
  {
    label: 'Default',
  },
];

export const Color = MultipleTemplate.bind({});
Color.args = [
  {
    label: 'pending',
    color: 'warning',
  },
  {
    label: 'closed',
  },
  {
    label: 'offer',
    color: 'info',
  },
  {
    label: 'approved',
    color: 'primary',
  },
  {
    label: 'rejected',
    color: 'error',
  },
];

export const AddonStart = Template.bind({});
AddonStart.args = {
  label: 'offer',
  addonStart: '1',
};

export const isLoading = Template.bind({});
isLoading.args = {
  label: 'offer',
  isLoading: true,
};
