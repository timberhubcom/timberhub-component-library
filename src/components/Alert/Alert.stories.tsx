import React from 'react';
import { ComponentStory } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert title="You have 5 offers available for review" {...args}></Alert>;

export const Green = Template.bind({});
Green.args = {};

export const Red = Template.bind({});
Red.args = {
  variant: 'red',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
};

export const Yellow = Template.bind({});
Yellow.args = {
  variant: 'yellow',
};

export const Yellow = Template.bind({});
Grey.args = {
  variant: 'grey',
};

export const WithButton = Template.bind({});
WithButton.args = {
  buttonTitle: 'Go to offers',
};

export const Multiline = Template.bind({});
Multiline.args = {
  title: 'You have 5 new offers and you have to click the button to able to accept them and also go to offers and download the invoices',
};
