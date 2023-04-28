import React from 'react';
import { ComponentStory } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert title="You have 5 offers available for review" {...args}></Alert>;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Multiline = Template.bind({});
Multiline.args = {
  title: 'You have 5 new offers and you have to click the button to able to accept them and also go to offers and download the invoices',
};
