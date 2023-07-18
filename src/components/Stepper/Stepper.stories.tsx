import React from 'react';
import { StoryFn } from '@storybook/react';
import { Stepper } from './Stepper';

export default {
  title: 'MUI/Components/Stepper',
  component: Stepper,
};

const Template: StoryFn<typeof Stepper> = (args) => {
  const [activeStep, setActiveStep] = React.useState(0);
  return <Stepper {...args} activeStep={activeStep} onChange={(val) => setActiveStep(val)} />;
};

export const Medium = Template.bind({});
Medium.args = {
  steps: ['Add product', 'Select delivery', 'Confirm request'],
};
