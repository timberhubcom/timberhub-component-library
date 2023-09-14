import { StoryObj } from '@storybook/react';
import React from 'react';

import { LinearProgress, LinearProgressProps } from './LinearProgress';

export default {
  title: 'MUI/LinearProgress',
  component: LinearProgress,
};

const Template = (args: LinearProgressProps) => {
  return <LinearProgress {...args} />;
};

type Story = StoryObj<LinearProgressProps>;

export const Default: Story = {
  args: {
    value: 50,
    variant: 'determinate',
  },
  render: (args: LinearProgressProps) => <Template {...args} />,
};

export const Secondary: Story = {
  args: {
    value: 50,
    variant: 'determinate',
    color: 'secondary',
  },
  render: (args: LinearProgressProps) => <Template {...args} />,
};

export const Error: Story = {
  args: {
    value: 50,
    variant: 'determinate',
    color: 'error',
  },
  render: (args: LinearProgressProps) => <Template {...args} />,
};
