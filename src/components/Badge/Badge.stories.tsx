import React from 'react';
import { ComponentStory } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>25+</Badge>;

export const Green = Template.bind({});
Green.args = {};

export const Red = Template.bind({});
Red.args = {
};
